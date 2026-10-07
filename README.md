# Game Matchmaker

A static personality quiz site that lets players choose between:
- League of Legends
- VALORANT

After choosing a game, the quiz asks questions tailored to its characters and reveals the champion or agent that best matches the player. VALORANT agent portraits and the current roster are loaded from the public VALORANT API when online; a small built-in roster remains available offline.

How to use:
- Open `index.html` directly in a browser for a quick test.
- Or serve the folder with any static web server:
  `python3 -m http.server 8000`
- Then open `http://localhost:8000`

The site is a static export and needs no backend. League of Legends champion details and VALORANT agent portraits are refreshed from public APIs when online; built-in fallback data keeps both quizzes usable offline.

## Export / publish

- The project is ready to be zipped and shared.
- For GitHub Pages, push the project to a public repository and enable Pages from the repository settings.

The game is designed to be lightweight, portable, and easy to deploy anywhere with static hosting.
