# MatchMaker 🧺

A two-player, cooperative shelf-sorting game for two iPhones. Each of you sorts your own shelves, but every triple is split across the two boards, so you have to send each other the missing pieces. Every few matches, the game pauses and one of you answers a question. Answerer alternates strictly, the answerer picks which question, and the questions get deeper with each level.

Files:

- `index.html` — the whole game (no build step, no dependencies)
- `questions.js` — the question deck. **This is the only file you need to edit to change questions.**
- `config.js` — where your Firebase config goes
- `database.rules.json` — the security rules to paste into Firebase

## Try it right now (no setup)

Open `index.html` in any browser, or AirDrop the folder to your phone and open it in Safari. With no Firebase config it runs in single-device demo mode: you play both seats, which is enough to see the whole flow and test your question list.

## Two-phone setup (about 5 minutes)

### 1. Create the Firebase project

1. Go to https://console.firebase.google.com and click **Add project**. Name it anything (e.g. `matchmaker`). You can turn off Google Analytics.
2. In the left sidebar, open **Build → Realtime Database → Create Database**. Pick the US location, and choose **Start in locked mode**. Click Enable.
3. Open the **Rules** tab of the Realtime Database, replace everything with the contents of `database.rules.json`, and click **Publish**.
   (These rules let anyone read/write `rooms/XXXX` if they know the 4-letter code, and nothing else. Fine for a game; don't put anything private in it.)

### 2. Get the web config

1. Click the gear next to **Project Overview → Project settings**.
2. Scroll to **Your apps** and click the **</>** (web) icon. Give it a nickname, leave Hosting unchecked for now, click **Register app**.
3. You'll see a `firebaseConfig = { ... }` block. Copy the object.
4. Open `config.js` and paste it in as `window.FIREBASE_CONFIG = { ... };` (replace the `null`).

   Make sure the object includes a `databaseURL` line. If it doesn't, copy the URL shown at the top of the Realtime Database page (looks like `https://matchmaker-xxxx-default-rtdb.firebaseio.com`) and add `databaseURL: "..."` to the object.

### 3. Put it on the internet

Any static host works. Easiest:

- **Netlify Drop**: go to https://app.netlify.com/drop and drag the `matchmaker` folder onto the page. You get a URL like `https://something.netlify.app` immediately. (Free, no account needed for the first drop; make an account to keep it.)
- Or **Firebase Hosting** from the same project (`npm i -g firebase-tools`, `firebase login`, `firebase init hosting` with this folder as the public dir, `firebase deploy`).
- Or **GitHub Pages**.

### 4. Play

1. Open the URL on your phone → **Create a room** → enter your name. You get a 4-letter code and a link.
2. Tap **Share link** and text it to her. She opens it, enters her name, and you'll see her appear. Tap **Start**.
3. Both of you tap **Share → Add to Home Screen** in Safari the first time; after that it opens full-screen like an app.

If either phone loses signal or the screen locks, just reopen the link — the room remembers which seat you had and the board is right where you left it.

## How it plays

- **Each of you has your own board** (shelves on the sides, a conveyor belt down the middle) on your own phone. Drag an item from the belt or a shelf onto an empty shelf spot, or tap it then tap the spot. Three of a kind on one shelf clears it.
- **Every triple is split between you.** For each item type, one of you holds two copies and the other holds the third. The only way to finish a triple is for the third to be sent across: drag it onto the **"Send to …"** bar at the bottom (or tap it, then tap the bar). It lands on your partner's belt with a little toast. Items only ever move belt/shelf → shelf, or → partner's belt.
- **📣 I need…** shows the items you hold two of; tap one and it lights up gold on your partner's screen (and a banner tells them). It's meant as a nudge — the real mechanic is asking out loud.
- **Questions every N matches.** The host picks 3, 4, or 5 in the lobby (default 4). Matches are counted across both boards, so skill doesn't skew who answers. Level sizes are 12, 16, and 20 matches, so that's roughly 15 / 12 / 9 questions per full game — a level always ends with a question even if the count isn't aligned.
- The answerer alternates strictly (host first) and sees three cards. They sort the hand in two taps: first the one they'll **answer**, then the one to **recycle** (it goes back into the pool for later); the third is **tossed** and never shown again that session. The asker sees the same cards greyed out while this happens. Then both phones show the chosen question (plus a small note of what was recycled and tossed) until someone taps **Done**. Two "show me different ones" passes per player per level; a pass recycles all three.
- Level 1 draws tier-1 questions, level 2 tier-2, level 3 tier-3. Answered and tossed questions never come back; recycled ones can, but not in the very next hand. After level 3, a final mutual question.
- When your board is clear you automatically watch your partner's board (read-only) until they finish.
- **🔀** reshuffles your own shelves if things feel stuck. Every item appears exactly 3 times across the two boards, so every level is clearable.
- In single-device demo mode there's a **⇄ seat** button to switch between the two boards.

## Editing questions

`questions.js` is a plain list. Each entry has a `tier` (1–3) and `text`; add `both: true` for a question you both answer. With 'every 3' you'll see up to ~15 questions per game, so ~10+ per tier is comfortable (more is better, since passes burn through them). Tiers fall back to lower tiers if a deck runs dry.

To change the item icons, edit the `ITEMS` list near the top of `index.html` (any emoji works). To change level sizes (`typesPer` = item types each player owns; total matches per level = 2 × typesPer) or how many items start on the belt, edit `LEVELS` right below it; `BELT_PERIOD` sets the belt speed (ms per notch).
