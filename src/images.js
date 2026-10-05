// Project screenshots are converted at build time (vite-imagetools) into small WebP files:
//   srcSet - responsive versions for the big previews (640w / 1100w)
//   src    - single 1100w fallback for browsers without srcset
//   thumb  - 64px wide thumbnail for the tiny avatar circles
// Vite needs the glob pattern written out literally, hence the repetition.
// Only these seven files are processed; other images in the folder aren't shipped.

const srcSets = import.meta.glob(
  './assets/images/{PoonamPrintingShop,nestLiving,campussetu,ezoneImg,emmorce,feemanagement,portfolio}.png',
  { query: { w: '640;1100', format: 'webp', as: 'srcset' }, import: 'default', eager: true }
)

const srcs = import.meta.glob(
  './assets/images/{PoonamPrintingShop,nestLiving,campussetu,ezoneImg,emmorce,feemanagement,portfolio}.png',
  { query: { w: '1100', format: 'webp' }, import: 'default', eager: true }
)

const thumbs = import.meta.glob(
  './assets/images/{PoonamPrintingShop,nestLiving,campussetu,ezoneImg,emmorce,feemanagement,portfolio}.png',
  { query: { w: '64', format: 'webp' }, import: 'default', eager: true }
)

export const img = (file) => {
  const key = `./assets/images/${file}`
  return { src: srcs[key], srcSet: srcSets[key], thumb: thumbs[key] }
}
