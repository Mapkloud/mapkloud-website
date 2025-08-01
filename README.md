# MapKloud Website

A modern, responsive website for MapKloud - a digital transformation company specializing in cloud migration, AI solutions, and data-driven decision systems.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: AOS (Animate on Scroll) integration
- **Interactive Components**: Swiper.js carousels and smooth scrolling
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Modern UI**: Clean, professional design with blue and white color scheme

## Sections

1. **Hero Section**: Full-screen with gradient background and animated elements
2. **Services**: 3-column grid showcasing core services
3. **Industries**: 6 industry cards with hover effects
4. **Projects**: Horizontal scrollable project showcase
5. **Logo Carousel**: Auto-scrolling client/partner logos
6. **Blog**: Latest insights with featured images
7. **CTA**: Call-to-action with contact information
8. **Footer**: Company information and links

## Technologies Used

- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Animate on Scroll library
- **Swiper.js**: Touch slider library
- **Inter Font**: Modern typography

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
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

4. Open your browser and navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.astro    # Navigation with dark mode toggle
│   ├── Hero.astro      # Hero section with animations
│   ├── Services.astro  # Services showcase
│   ├── Industries.astro # Industry cards
│   ├── Projects.astro  # Project carousel
│   ├── LogoCarousel.astro # Client logos
│   ├── Blog.astro      # Blog preview
│   ├── CTA.astro       # Call to action
│   └── Footer.astro    # Footer with links
├── layouts/            # Layout components
│   └── Layout.astro    # Main layout with SEO
└── pages/              # Page components
    └── index.astro     # Homepage
```

## Customization

### Colors

The website uses a blue and white color scheme as requested. You can modify colors in the Tailwind classes throughout the components.

### Content

Update the content in each component file to match your specific business information.

### Images

Replace the placeholder SVG icons with actual images by updating the image paths in the components.

## Features in Detail

### Dark Mode

- Toggle button in the navbar
- Persistent across sessions
- Smooth transitions between themes

### Animations

- Fade-in effects on scroll
- Hover animations on cards
- Smooth scrolling navigation
- Animated background elements

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized for all screen sizes

### SEO Optimization

- Meta tags for social sharing
- Structured data
- Semantic HTML
- Optimized images and content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
