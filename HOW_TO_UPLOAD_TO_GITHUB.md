# Upload this portfolio to GitHub

Repository: https://github.com/ngoctram-seo/portfolio
Final URL after GitHub Pages is enabled:

```txt
https://ngoctram-seo.github.io/portfolio/
```

## Important

Do not upload the ZIP file as a single file to GitHub. GitHub Pages needs the project files extracted in the repository root.

## Option A: Upload through GitHub website

1. Open https://github.com/ngoctram-seo/portfolio
2. Delete the old uploaded ZIP file if it is still there.
3. Click **Add file** > **Upload files**.
4. Drag all files and folders from inside this project folder into GitHub.
5. Commit directly to the `main` branch.
6. Open **Settings** > **Pages**.
7. Under **Build and deployment**, choose **Source: GitHub Actions**.
8. Open the **Actions** tab and wait for `Deploy to GitHub Pages` to finish.
9. Open: https://ngoctram-seo.github.io/portfolio/

## Option B: Upload with terminal

From inside the extracted project folder:

```bash
git init
git add .
git commit -m "Deploy Joyce Le portfolio"
git branch -M main
git remote add origin https://github.com/ngoctram-seo/portfolio.git
git push -u origin main --force
```

Then enable GitHub Pages:

1. Go to **Settings** > **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Wait for the deploy workflow to finish.

## Local test

```bash
npm install
npm run dev
npm run build
```

## Background video

Put your video file here:

```txt
public/video/hero-bg.mp4
```

The page already has a fallback gradient if the video file is missing.
