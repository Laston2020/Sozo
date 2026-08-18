# GitHub Pages Deployment

To deploy to GitHub Pages, run:

```bash
npm run build
```

Then deploy the `dist` folder to your hosting service.

## One-Click Deployment Options

### Option 1: Netlify (Recommended)
1. Go to https://app.netlify.com
2. Click "Import an existing project"
3. Select your GitHub repository
4. Netlify will auto-detect the build settings
5. Deploy!

**Build command:** `npm run build`
**Publish directory:** `dist`

### Option 2: Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the Vite settings
5. Deploy!

### Option 3: GitHub Pages
1. Go to your repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/dist" folder
4. Save
5. Enable GitHub Actions to auto-build on push

## Environment Setup

No environment variables needed for this website. All customization is done through component files.

## Custom Domain

After deploying, add your custom domain:
- **Netlify:** Site settings → Domain management → Add custom domain
- **Vercel:** Project settings → Domains → Add domain
- **GitHub Pages:** Repository settings → Pages → Custom domain
