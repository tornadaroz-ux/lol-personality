# LoL Personality

A bilingual (RO/EN) League of Legends personality quiz: answer a few questions and get a matching champion.

How to use:
- Open `index.html` directly in a browser for a quick test.
- Or serve the folder with any static web server if you want a cleaner browser experience.

This version is built as a fully offline static export, so it works on both desktop and mobile devices without any internet connection or backend.

Export:
- The project is ready to be zipped and sent to friends.
- For a simple bundle, zip the project folder and open `index.html` in any browser.

## Publish online with GitHub Pages

The repository includes a GitHub Actions workflow that publishes the game whenever code is pushed to the `main` or `master` branch.

1. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
2. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.
3. Share the site URL shown in the deployment, usually `https://<your-username>.github.io/<repository-name>/`.

After setup, each push to `main` or `master` publishes the updated game automatically. The workflow publishes only the files needed to play the game; no backend or build dependencies are required.
