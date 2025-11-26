# ZitSouss - Moroccan Olive Oil E-commerce

A premium e-commerce website for selling Moroccan olive oil and table olives, built with React, TypeScript, and TailwindCSS v4.

## Features

- 🛒 Full shopping cart functionality
- 🌍 Multi-language support (French/Arabic with RTL)
- 🔍 Real-time product search
- 📱 Fully responsive design
- ✨ Toast notifications for user feedback
- 🎨 Premium Moroccan-inspired design
- ♿ Accessibility-focused (ARIA labels)
- 🏆 Awards showcase system

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Carousel**: Swiper

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── awards/     # Awards showcase
│   ├── home/       # Home page sections
│   ├── layout/     # Header, Footer, Layout
│   ├── products/   # Product cards and grids
│   └── ui/         # Base UI components
├── contexts/       # React Context providers
│   ├── CartContext.tsx
│   ├── LanguageContext.tsx
│   └── ToastContext.tsx
├── data/           # Product and awards data
├── pages/          # Page components
├── router/         # Route configuration
└── main.tsx        # App entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Customization

### Product Data

Edit `src/data/products.ts` to add/modify products:

- Product names (French & Arabic)
- Descriptions
- Prices and sizes
- Awards associations

### Theme Colors

Modify the `@theme` block in `src/index.css`:

- Olive color palette
- Gold accent colors
- Earth tones

### Language Settings

Update translations in `src/contexts/LanguageContext.tsx`

## License

Private - ZitSouss © 2024

## Contact

For support or inquiries, visit [contact page](http://localhost:5173/contact)
