<div align="center">

![Quiet Garden Banner](banner.svg)

</div>

---

## The idea

I wanted to build a landing page for a fictional flower shop called Quiet Garden, but I didn't want to use standard stock photos. Instead of hunting for the right Unsplash images, I decided to use watercolour illustrations. The goal was to make the site feel like a painted journal using just HTML and CSS, rather than looking like a generic e-commerce template.

---

## How the illustrations work

Since the illustrations have transparent backgrounds, I used `mix-blend-mode: multiply` on the images. This makes the painted textures blend naturally into the background colours instead of looking like flat stickers placed on top of the page. I also added a subtle paper texture over the whole site using a fixed pseudo-element to tie everything together.

---

## What the CSS is doing

Most of the visual details are handled purely in CSS.

**Blob shapes.** The product cards use a multi-value `border-radius` to get an organic, uneven shape. I didn't want to use SVGs or `clip-path` for this, so it is just standard CSS:

```css
border-radius: 40% 60% 70% 30% / 50% 40% 60% 50%;
