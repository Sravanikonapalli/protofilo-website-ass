# Portfolio Website

A modern, responsive personal portfolio built with **React**, **Bootstrap**, and custom **CSS**, featuring a light/dark mode toggle and creative vector-based layout.

---

### Live Link
[Live Demo](https://protofilo-website-ass.vercel.app/)

### GitHub
[github link](https://github.com/Sravanikonapalli/protofilo-website-ass)
## Features

- Dark / Light mode toggle
- Hero section with animated greeting
- About section with clean visuals and structured content
- Vector illustrations and layered design
- Social media integration
- Email icon sticky to layout

---

## Tech Stack

- **React** (Functional Components + Hooks)
- **Bootstrap 5**
- **Custom CSS** (Media Queries for responsiveness)
- **React Icons**

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### ▶ Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Dark Mode

Toggle is passed via props:

```jsx
<Navbar darkMode={darkMode} handleToggle={handleToggle} />
```

Then applied via conditional className:

```jsx
className={`about-container ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
```

CSS-based dark styles are scoped using:

```css
.navbar-dark .about-content {
    color: white;
}
```

---

## Deployment

Project is deployed using Vercel.
