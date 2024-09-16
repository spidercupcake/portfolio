# ERROR FIXES

- Fix mouse effects positioning on Footer.
- Try making Footer without framer-motion.

- Fix This:
  ⚠ For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'npm i sharp', and Next.js will use it automatically for Image Optimization.
  Read more: https://nextjs.org/docs/messages/sharp-missing-in-production

- Fix Source Map issues.
- Fix Issues in Console.
  warn-once.js:16 Image with src "/assets/hero.png" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes

# IDEA

**Basic layout**

- [x] Basic homepage with Hero picture in center.
- [x] Social media links on top right, set vertically.
- [x] Name and Deccription under Hero picture.
- [x] Technologies that I work on in the bottom, Glassmorphic div. Items zoom when hovered or touched.
- [ ] An Arrow " v " shows on bottom above the Technologies Div.
- [x] Background image is lazily loaded with a zink placeholder and slowly fade into background.

**When Scrolled**

- [x] Socials stay in its place.
- [x] Everything starts moving upwards
- [ ] and fades on top.
- [x] The bottom Technologies div extends from bottom.
- [ ] The arrow " v " turns into a line "\_\_" and extends vertically till it reaches the horizontal edges.
- [x] The background image first zooms then starts to blur
- [ ] to match the bottom technologies div.
