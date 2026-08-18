# Sozo Miracle Harvest Church Website

A modern, responsive website for Sozo Miracle Harvest Church built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI** - Clean and professional interface with smooth animations
- **Service Times** - Display of weekly service schedules
- **Events Calendar** - Upcoming church events and activities
- **About Section** - Mission, vision, and core values
- **Contact Form** - Easy way for visitors to get in touch
- **Smooth Navigation** - Intuitive menu with smooth scrolling between sections

## Pages & Sections

- **Home/Hero** - Welcome banner with call-to-action buttons
- **Services** - Weekly service times and descriptions
- **About** - Church mission, vision, and values
- **Events** - Upcoming events and activities
- **Contact** - Contact information and contact form
- **Footer** - Quick links, newsletter signup, and social media

## Tech Stack

- **Frontend Framework**: React 19.2.8
- **Language**: TypeScript 6.0.2
- **Build Tool**: Vite 8.2.0
- **Styling**: Tailwind CSS 4.3.3
- **Package Manager**: npm

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run linter
npm run lint
```

## Project Structure

```
Sozo/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── Hero.tsx            # Welcome banner
│   │   ├── Services.tsx        # Service times section
│   │   ├── About.tsx           # About church section
│   │   ├── Events.tsx          # Events listing
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer with links
│   │   └── Navigation.tsx      # Main navigation component
│   ├── App.tsx                 # Main App component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles (Tailwind)
│   └── App.css                 # App-specific styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # This file
```

## Customization

### Colors & Branding

Edit the color scheme in `src/index.css`:

```css
:root {
  --text: #1f2937;
  --text-h: #111827;
  --bg: #fff;
  --border: #e5e7eb;
  --accent: #1e40af;
  --accent-light: #3b82f6;
}
```

Or update Tailwind CSS utilities directly in components using color classes like `bg-blue-600`, `text-purple-600`, etc.

### Content Updates

- **Header/Logo**: Edit `src/components/Header.tsx`
- **Hero Section**: Edit `src/components/Hero.tsx`
- **Service Times**: Update the `services` array in `src/components/Services.tsx`
- **Church Information**: Edit `src/components/About.tsx`
- **Events**: Update the `events` array in `src/components/Events.tsx`
- **Contact Info**: Edit contact details in `src/components/Contact.tsx`
- **Footer**: Update links and info in `src/components/Footer.tsx`

## Contact Form Integration

The contact form in `src/components/Contact.tsx` currently logs to the browser console. To integrate with a backend service:

1. Update the `handleSubmit` function to send data to your API
2. Or use a service like Formspree, Netlify Forms, or SendGrid

## Deployment

### Deploy to Netlify

1. Push to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Other Hosting

Build the project and upload the `dist` folder to your hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Sozo Miracle Harvest Church** - "Growing in faith, serving our community, and experiencing God's transforming grace."
