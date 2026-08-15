# 📱 Mobile Responsive - Quick Reference Card

## 🚀 Quick Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📱 Breakpoints Quick Reference
```css
320px   → iPhone SE (1st gen) - Minimum
375px   → iPhone SE (2nd/3rd), iPhone 6/7/8
390px   → iPhone 12/13/14
430px   → iPhone 14 Pro Max
768px   → iPad Mini, Tablet
1024px  → iPad Pro, Laptop
1200px+ → Desktop
```

## ✅ Testing Checklist (1-Minute)
- [ ] Open `npm run dev`
- [ ] Press F12 → Ctrl+Shift+M (Device Mode)
- [ ] Test 320px, 390px, 768px, 1920px
- [ ] Check: No horizontal scroll
- [ ] Check: All buttons work
- [ ] Check: Form submits
- [ ] Check: Navigation menu opens

## 🎯 Key Features
✅ Fully responsive 320px - 1920px+
✅ Touch-friendly buttons (≥44px)
✅ Mobile hamburger menu
✅ Optimized forms (16px inputs)
✅ Smooth animations
✅ No horizontal scroll
✅ Safe area insets
✅ All features preserved

## 🐛 Quick Fixes
```css
/* Horizontal scroll fix */
overflow-x: hidden;
max-width: 100vw;

/* Touch target fix */
min-height: 44px;
min-width: 44px;

/* Text overflow fix */
overflow-wrap: break-word;

/* iOS zoom fix */
input { font-size: 16px; }
```

## 📊 Performance Target
- Lighthouse Mobile: **90+**
- FCP: **< 1.8s**
- LCP: **< 2.5s**
- CLS: **< 0.1**

## 📞 Quick Issues
**Horizontal Scroll?** → Check `overflow-x: hidden` on containers
**Text Too Small?** → Verify `font-size` uses `clamp()` or `min 12px`
**Buttons Not Working?** → Check `min-height: 44px`
**iOS Input Zoom?** → Ensure inputs are `16px+`
**Modal Not Scrolling?** → Check `max-height` and `overflow-y: auto`

## 📚 Full Documentation
- `MOBILE_RESPONSIVE_SUMMARY.md` - Complete overview
- `RESPONSIVE_IMPLEMENTATION.md` - Technical details
- `TESTING_GUIDE.md` - Detailed testing

---
**Status:** ✅ Production Ready | **Last Updated:** January 2025
