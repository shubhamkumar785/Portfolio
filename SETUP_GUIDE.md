# Portfolio Setup Guide

## Current Status
✅ All React components created
✅ CSS styling matches reference design
✅ Responsive layout implemented
⚠️ Placeholder images need to be replaced with your actual images

## Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Adding Your Images

### Step 1: Add Image Files
Place your images in `src/assets/images/` with these names:
- `profile.jpg` - Your profile photo (215px × 240px recommended)
- `hero.jpg` - Main center image (340px × 425px recommended)
- `travel1.jpg` - First travel photo (160px × 210px recommended)
- `travel2.jpg` - Second travel photo (145px × 230px recommended)
- `logo1.png` - First company logo
- `logo2.png` - Second company logo

### Step 2: Update Components

#### ProfileSection.jsx
Replace this:
```jsx
<div className="profile-image">
  👤
</div>
```

With:
```jsx
<img src="/src/assets/images/profile.jpg" alt="Profile" className="profile-image" />
```

And replace:
```jsx
<div className="company-logo">EDO</div>
<div className="company-logo">ACABES</div>
```

With:
```jsx
<img src="/src/assets/images/logo1.png" alt="Company 1" className="company-logo" />
<img src="/src/assets/images/logo2.png" alt="Company 2" className="company-logo" />
```

#### CenterSection.jsx
Replace this:
```jsx
<div className="center-image">
  🏞️
</div>
```

With:
```jsx
<img src="/src/assets/images/hero.jpg" alt="Hero" className="center-image" />
```

#### TravelCollage.jsx
Replace the placeholder divs with:
```jsx
<img src="/src/assets/images/travel1.jpg" alt="Travel 1" className="travel-image-back" />
<img src="/src/assets/images/travel2.jpg" alt="Travel 2" className="travel-image-front" />
```

## Design Specifications

### Colors
- Primary Orange: `#ff5722`
- Cyan Label: `#4dd0e1`
- Background: `#f5f3f0`
- Text: `#2d2d2d`
- Netflix Badge: `#e50914`

### Typography
- Headers: Arial Black (bold, condensed)
- Body: System font stack

### Key Dimensions (Desktop ~1560px)
- Profile Image: 215px × 240px
- Center Image: 340px × 425px
- Large Typography: 140px font size
- Grid: 260px | 1fr | 280px

## Customization

### Change Text Content
Edit the text in these components:
- `src/components/ProfileSection.jsx` - Left section content
- `src/components/CenterSection.jsx` - Center intro text
- `src/components/RightSection.jsx` - Right section content

### Adjust Colors
Edit `src/styles/portfolio.css` and search for the color hex codes to replace them.

### Modify Layout
The layout uses CSS Grid for the main structure:
```css
.hero-grid {
  grid-template-columns: 260px 1fr 280px;
  gap: 50px;
}
```

Adjust these values to change column widths and spacing.

## Responsive Breakpoints
- Desktop: 1560px+ (reference design)
- Laptop: 1200px - 1400px
- Tablet: 768px - 1200px
- Mobile: 320px - 768px

## Troubleshooting

### Images not loading?
- Check the file path matches exactly
- Ensure images are in `src/assets/images/`
- Clear browser cache and reload

### Layout looks different?
- Check your browser zoom is at 100%
- View at desktop width (1560px+) for best match to reference
- Ensure all CSS files are imported

### Build issues?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Support
For issues or questions about the implementation, check:
1. Browser console for errors
2. Network tab for failed asset loads
3. React DevTools for component structure
