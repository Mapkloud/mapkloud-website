# MapKloud Website

A modern company website built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

## 🚀 Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Static site generation for better search rankings
- **Custom Domain Ready**: Configured for custom domain deployment

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mapkloud-website.git
cd mapkloud-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Using Dev Container

1. Open the project in VS Code
2. When prompted, click "Reopen in Container"
3. The development environment will be automatically configured
4. Run `npm run dev` to start the server

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://mapkloud.com`

### Custom Domain

To use a custom domain:

1. Update the `CNAME` file in the `public/` directory with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update `astro.config.mjs` with your domain:
   ```javascript
   site: 'https://mapkloud.com',
   base: '/',
   ```

## 📁 Project Structure

```
├── src/
│   ├── pages/          # Astro pages
│   ├── layouts/        # Layout components
│   └── styles/         # Global styles
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions
└── .devcontainer/      # Dev container config
```

## 🎨 Customization

- **Styling**: Modify Tailwind classes in components
- **Content**: Update pages in `src/pages/`
- **Layout**: Customize `src/layouts/Layout.astro`
- **Branding**: Replace favicon and update colors

## 📝 License

MIT License - see LICENSE file for details.
