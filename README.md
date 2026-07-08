# Portfolio Website

A fully responsive personal portfolio website built with React and Vite, featuring an editorial-style overlapping layout.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── assets/
│   │   └── images/          # Place your images here
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProfileSection.jsx
│   │   ├── CenterSection.jsx
│   │   ├── RightSection.jsx
│   │   ├── TravelCollage.jsx
│   │   └── ScrollIndicator.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── portfolio.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🖼️ Adding Your Images

Replace the placeholder emojis with your actual images:

1. **Profile Image**: Add your profile photo to `src/assets/images/` and update `ProfileSection.jsx`
2. **Hero Image**: Add your main hero image and update `CenterSection.jsx`
3. **Travel Images**: Add two travel photos and update `TravelCollage.jsx`
4. **Company Logos**: Add company logos and update `ProfileSection.jsx`

### Example:
```jsx
// In ProfileSection.jsx
<img src="/src/assets/images/profile.jpg" alt="Profile" className="profile-image" />

// In CenterSection.jsx
<img src="/src/assets/images/hero.jpg" alt="Hero" className="center-image" />

// In TravelCollage.jsx
<img src="/src/assets/images/travel1.jpg" alt="Travel" className="travel-image-back" />
<img src="/src/assets/images/travel2.jpg" alt="Travel" className="travel-image-front" />
```

## 🎨 Customization

### Colors
The main colors used in the design:
- Orange/Red: `#ff5722`
- Cyan/Turquoise: `#4dd0e1`
- Background: `#f5f3f0`
- Text: `#2d2d2d`

### Fonts
The design uses system fonts with bold weights. For best results, these are automatically applied.

### Layout
The layout is intentionally overlapping and editorial-style. The positioning and z-index values are carefully calibrated to match the reference design.

## 📱 Responsive Design

The website is fully responsive across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **CSS3** - Styling
- **JavaScript (ES6+)** - Programming Language

## 📝 License

This project is open source and available for personal use.
