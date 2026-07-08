# Image Replacement Guide

This guide shows you EXACTLY how to replace the emoji placeholders with your actual images.

## Step 1: Prepare Your Images

Add these image files to `src/assets/images/`:

```
src/assets/images/
├── profile.jpg       (your profile photo)
├── hero.jpg          (main center image)
├── travel1.jpg       (first travel photo)
├── travel2.jpg       (second travel photo)
├── logo1.png         (first company logo)
└── logo2.png         (second company logo)
```

### Image Specifications

**profile.jpg**
- Dimensions: 430px × 480px (will display at 215×240px)
- Format: JPG or PNG
- Subject: Your profile/avatar photo
- Style: Professional or casual portrait
- Note: Will be displayed with 32px border radius (rounded corners)

**hero.jpg**
- Dimensions: 680px × 850px (will display at 340×425px)
- Format: JPG or PNG
- Subject: Person looking at landscape/scenic view (like reference)
- Style: Editorial, inspiring
- Quality: High resolution for sharp display

**travel1.jpg**
- Dimensions: 320px × 420px (will display at 160×210px)
- Format: JPG or PNG
- Orientation: Portrait (vertical)
- Subject: Travel/architecture photo
- Position: Will appear on left/bottom of collage

**travel2.jpg**
- Dimensions: 290px × 460px (will display at 145×230px)
- Format: JPG or PNG
- Orientation: Portrait (vertical)
- Subject: Travel/nature photo
- Position: Will appear on right/top of collage

**logo1.png & logo2.png**
- Height: 60px (will display at ~26px)
- Format: PNG with transparency
- Style: Grayscale or will be converted to grayscale
- Note: Keep aspect ratio, height is controlled

## Step 2: Update ProfileSection.jsx

**File:** `src/components/ProfileSection.jsx`

### Replace Profile Image

Find:
```jsx
<div className="profile-image">
  {/* Placeholder for profile image */}
  {/* Replace with: <img src="YOUR_PROFILE_IMAGE" alt="Profile" className="profile-image" /> */}
  👤
</div>
```

Replace with:
```jsx
<img 
  src="/src/assets/images/profile.jpg" 
  alt="Profile" 
  className="profile-image" 
/>
```

### Replace Company Logos

Find:
```jsx
<div className="company-logos">
  <div className="company-logo">EDO</div>
  <div className="company-logo">ACABES</div>
</div>
```

Replace with:
```jsx
<div className="company-logos">
  <img 
    src="/src/assets/images/logo1.png" 
    alt="Company 1" 
    className="company-logo" 
  />
  <img 
    src="/src/assets/images/logo2.png" 
    alt="Company 2" 
    className="company-logo" 
  />
</div>
```

## Step 3: Update CenterSection.jsx

**File:** `src/components/CenterSection.jsx`

Find:
```jsx
<div className="center-image">
  {/* Placeholder for center hero image */}
  {/* Replace with: <img src="YOUR_HERO_IMAGE" alt="Hero" className="center-image" /> */}
  🏞️
</div>
```

Replace with:
```jsx
<img 
  src="/src/assets/images/hero.jpg" 
  alt="Hero" 
  className="center-image" 
/>
```

## Step 4: Update TravelCollage.jsx

**File:** `src/components/TravelCollage.jsx`

**Current code:**
```jsx
import React from 'react'

const TravelCollage = () => {
  return (
    <div className="travel-collage">
      <div className="travel-image-back">
        {/* Placeholder for travel image 1 */}
        {/* Replace with: <img src="YOUR_TRAVEL_IMAGE_1" alt="Travel" className="travel-image-back" /> */}
        🏛️
      </div>
      <div className="travel-image-front">
        {/* Placeholder for travel image 2 */}
        {/* Replace with: <img src="YOUR_TRAVEL_IMAGE_2" alt="Travel" className="travel-image-front" /> */}
        🌸
      </div>
    </div>
  )
}

export default TravelCollage
```

**Replace with:**
```jsx
import React from 'react'

const TravelCollage = () => {
  return (
    <div className="travel-collage">
      <img 
        src="/src/assets/images/travel1.jpg" 
        alt="Travel 1" 
        className="travel-image-back" 
      />
      <img 
        src="/src/assets/images/travel2.jpg" 
        alt="Travel 2" 
        className="travel-image-front" 
      />
    </div>
  )
}

export default TravelCollage
```

## Step 5: Verify Changes

1. Save all modified files
2. If dev server is running, it should hot-reload automatically
3. If not running, start it: `npm run dev`
4. Open browser to `http://localhost:5173` (or the port shown)
5. Check browser console for any errors

### Common Issues

**Images not showing?**
- Check file paths are correct (case-sensitive)
- Ensure images are in `src/assets/images/` directory
- Check browser console for 404 errors
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Images look stretched?**
- CSS already has `object-fit: cover` applied
- Check your image dimensions match recommendations
- Ensure aspect ratios are close to recommended

**Images too large/small?**
- Use images at 2x the display size for retina displays
- Display size is controlled by CSS (already set correctly)

## Alternative: Using Vite's Public Directory

If you prefer, you can also place images in the `public/` directory:

```
public/
├── images/
│   ├── profile.jpg
│   ├── hero.jpg
│   ├── travel1.jpg
│   ├── travel2.jpg
│   ├── logo1.png
│   └── logo2.png
```

Then use paths like:
```jsx
<img src="/images/profile.jpg" alt="Profile" className="profile-image" />
```

## Image Optimization Tips

1. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim
   - Squoosh (https://squoosh.app/)

2. **Target file sizes:**
   - Profile: < 100KB
   - Hero: < 200KB
   - Travel images: < 150KB each
   - Logos: < 50KB each (PNG)

3. **Format recommendations:**
   - Photos: Use JPG/JPEG
   - Logos: Use PNG (for transparency)
   - Consider WebP for better compression

4. **Responsive images** (optional advanced):
   ```jsx
   <img 
     srcSet="/images/profile@2x.jpg 2x, /images/profile.jpg 1x"
     src="/images/profile.jpg"
     alt="Profile"
     className="profile-image"
   />
   ```

## Checklist

After replacing all images, verify:

- [ ] Profile image displays correctly
- [ ] Profile image maintains rounded corners
- [ ] Netflix badge still overlaps profile image
- [ ] Hero image displays correctly in center
- [ ] Hero image doesn't distort/stretch
- [ ] Cyan name label still overlaps hero image
- [ ] Both travel images display in collage
- [ ] Travel images overlap correctly
- [ ] Both company logos display
- [ ] Company logos appear grayscale
- [ ] No broken image icons (🖼️) visible
- [ ] No console errors related to images
- [ ] Page loads quickly (images optimized)

## Need Help?

If images still don't show:
1. Check browser console (F12) for errors
2. Verify file names match exactly (case-sensitive)
3. Clear browser cache
4. Restart dev server
5. Check file paths in code match actual file locations
