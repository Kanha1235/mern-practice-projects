# YouTube Like Players &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![View it live](https://kanha1235.github.io/mern-practice-projects/youtube-like-players/)]()

A lightweight, responsive **mini video‑playlist player** built with plain HTML/CSS/JS. It renders a playlist from a small array, swaps the main player on click, and highlights the active item.



---

## ✨ Features

* **Dynamic playlist rendering** from a JS array; each item has a preview, title, and channel line.
* **Single play box** that swaps the main `<video>` + description when a playlist item is clicked (using event delegation).
* **Active item highlight** via a `.toggle` class.
* **Responsive layout**: two‑column desktop; grid playlist on small screens with `@media` rules.
* **Icon header** with search/mic placeholders using Material Icons + Font Awesome.

---

## 🧱 Tech Stack

* **HTML** for structure and semantic layout.
* **CSS** (with modern nesting) for layout, responsive grid, and hover states.
* **Vanilla JS** for data‑driven rendering and event handling.

---

## 📁 Project Structure

```
/ (project root)
├── index.html
├── style.css
├── script.js
└── assets/
    ├── 4879375_Gyps Fulvus_Griffon Vulture_3840x2160.mp4
    ├── 456540_Thailand_Bangkok_1920x1080.mp4
    ├── 6356499_Herd_Afghanistan_3840x2160.mp4
    └── big_buck_bunny_720p_10mb.mp4
```

 

---

## 🚀 Getting Started

### 1) Clone and open locally

```bash
git clone https://github.com/Kanha1235/youtube-like-players.git
cd youtube-like-players
```

### 2) Serve statically

Any simple HTTP server works:

```bash
# Python 3
python -m http.server 8080
# or Node
npx serve .
```

Then open `http://localhost:8080/`.

---

## 🧠 How it Works

1. **Seed videos**: a `videos` array defines base filenames for the playlist.
2. **Render playlist**: `insertAdjacentHTML` creates `.video_in_list` entries with a `data-key` index.
3. **Initial state**: the first video is injected into `.play_box` as the main player.
4. **Event delegation** on `.video_playlist`: clicking any child with `data-key` switches the main player and toggles the highlight.
5. **Responsive CSS**: desktop splits into 60%/30% main/playlist; under 768px the playlist becomes a grid.

---

## 🧪 Demo Content

* Header with left **menu + YouTube icon**, middle **search + mic**, right **create/notification/profile** placeholders.
* Playlist items with small `<video>` previews and text blocks.
* Active card gets a subtle background via `.toggle`.

---

<!-- ## ✅ Accessibility & UX Tweaks (Next)

* Add **keyboard navigation** (Up/Down to move, Enter to play; focus outlines).
* Provide **ARIA labels** on buttons/icons; label the main player region.
* Add **loading states** for video swaps (e.g., spinner or skeleton).
* Persist **last played index** in `localStorage`. -->

<!-- --- -->

<!-- ## 🛠️ Known Issues / Improvements

* **Class toggle typo**: `currVideo.classList.toggle(":hover")` attempts to toggle a pseudo‑class as if it were a real class; remove that line. Use only the `.toggle` class for highlighting.
* **Type coercion**: `dataset.key` is a string; compare numbers consistently (e.g., `Number(id) === last_video_in_the_view`) and store `last_video_in_the_view` as a number.
* Consider extracting **video metadata** (title/channel) into the array instead of using `description${i+1}` placeholders.

--- -->

<!-- ## 📸 Screenshots

*Add screenshots or a short GIF of switching between playlist items.*

--- -->

## 📦 License

MIT
