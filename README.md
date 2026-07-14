# Motion Portfolio Preview

React/Vite motion portfolio preview with split desktop scrolling: profile/details on the left, real motion work grid on the right, and bundled local video assets.

## Run locally

```bash
npm install
npm run dev
```

Local URL:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Media structure

Current preview videos are bundled in:

```text
public/media/videos/
```

Profile and poster assets are bundled in:

```text
public/media/avatar/
public/media/posters/
```

To add or swap a preview, put the file in `public/media/videos/` and update `previewVideo` in `src/data/projects.ts`:

```ts
previewVideo: "/media/videos/project-name.mp4";
```

## Deploy

For a simple static launch, use Vercel, Netlify, or Cloudflare Pages:

```bash
npm run build
```

Deploy the `dist/` folder or connect the repository and use the build command above.
