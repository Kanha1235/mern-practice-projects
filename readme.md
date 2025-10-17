# 🧪 mern_practice_projects

A living playground for all my mini‑projects, experiments, and UI/algorithm demos. Every folder inside `/practice_projects` is a self‑contained project with its own `index.html` (or framework entry) so you can open it directly or browse a live link.

> **Tip:** All project names below are clickable (blue links) that open the live demos.

---

## 🔗 Quick Live Gallery

* [YouTube Like Player]()
<!-- * [Password Generator + Secure Vault (MVP)](https://<your-username>.github.io/practice_projects/password-vault/)
* [Spell Correction using Ternary Search Tree](https://<your-username>.github.io/practice_projects/spell-correction-tst/)
* [YouTube‑like Video Player](https://<your-username>.github.io/practice_projects/youtube-like-player/)
* [Wishlist / To‑Do App](https://<your-username>.github.io/practice_projects/todo-wishlist/)
* [Canvas Drawing Playground](https://<your-username>.github.io/practice_projects/canvas-drawing/)
* [Font Size & Style Editor Demo](https://<your-username>.github.io/practice_projects/font-size-editor/)
* [Responsive Flex‑Wrap Card Layout](https://<your-username>.github.io/practice_projects/flex-wrap-cards/)
* [Event Propagation Visualizer](https://<your-username>.github.io/practice_projects/event-propagation/)
* [Coming Soon: Payment Flow & Idempotency Sim](https://<your-username>.github.io/practice_projects/payment-idempotency-sim/) -->


---

## 📁 Repository Structure

```
practice_projects/
├─ youtube-like-player/
│  ├─ index.html
│  ├─ assets/
│  └─ README.md
└─ ... (more to come)
```

* Every project is a standalone folder with its own documentation.
* Shared utilities (like small CSS resets or helper JS) can live under `/shared/` if needed.

---

## 📚 Learnings by Project

### YouTube‑like Player

* **Navbar icon placement:** How to achieve intact placement(preventing wrap) of icons inside navbar using inline - flex containers and making the nav element as flexbox

<!-- ```css
nav { display: flex; justify-content: space-between; align-items: center; }
.create_notification_profile span,
.hamburger_and_logo span { display: inline-flex; align-items: center; }
``` -->

* **Responsive playlist grid:** How to use display:grid, auto-fill, minmax to build layout and fluid responsive card based websites. 

<!-- ```css
.video_playlist { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
@media (max-width: 768px){ .layout { grid-template-columns: 1fr; } }
``` -->

<!-- * **Stable media previews:** `object-fit: cover;` on `<video>`/`<img>` keeps thumbnails consistent. -->

<!-- ### Wedding Card Studio

* **Drag/resize handles** with pointer events; **text metrics** + `measureText` for fitting text; **canvas export** to PNG via `toDataURL()`.
* **Layering:** Maintain a z‑index stack for selected elements; keyboard shortcuts for nudge/clone. -->


<!-- ## 📜 Stories Behind the Projects

### Wedding Card Studio

* **Story:** Born from a desire to create customizable digital invites for friends & family—drag, resize, pick fonts, and export.
* **What you’ll see:** Movable text boxes, font pickers, Google Fonts, export‑ready canvas.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/wedding-card-studio/) · **Code:** [/wedding-card-studio](./wedding-card-studio/)

### Password Generator + Secure Vault (MVP)

* **Story:** A fast, privacy‑first vault with client‑side encryption to never store plaintext passwords on the server.
* **What you’ll see:** Length slider, symbols/digits toggles, copy‑to‑clipboard with auto‑clear, basic search.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/password-vault/) · **Code:** [/password-vault](./password-vault/)

### Spell Correction using Ternary Search Tree

* **Story:** A C/TST experiment to auto‑suggest dictionary words and handle keyboard adjacency typos.
* **What you’ll see:** TST operations, nearest‑neighbor suggestions, adjacency arrays.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/spell-correction-tst/) · **Code:** [/spell-correction-tst](./spell-correction-tst/)

### YouTube‑like Video Player

* **Story:** A minimal clone to explore media APIs, event handling, and list‑grid responsiveness.
* **What you’ll see:** Custom controls, video list preview, keyboard shortcuts.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/youtube-like-player/) · **Code:** [/youtube-like-player](./youtube-like-player/)

### Wishlist / To‑Do App

* **Story:** A lightweight localStorage app for daily planning and “inbox‑zero” style tasking.
* **What you’ll see:** CRUD, filters, keyboard nav, small but handy UX touches.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/todo-wishlist/) · **Code:** [/todo-wishlist](./todo-wishlist/)

### Canvas Drawing Playground

* **Story:** Built to practice hit‑testing, resize handles, and canvas text metrics.
* **What you’ll see:** Drag/resize handles, centered shapes, dynamic scaling
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/canvas-drawing/) · **Code:** [/canvas-drawing](./canvas-drawing/)

### Font Size & Style Editor Demo

* **Story:** Micro‑editor to test `input` vs `change` events, dynamic font sizing, and live reflow.
* **What you’ll see:** Range inputs, color pickers, and auto‑fit logic for text areas.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/font-size-editor/) · **Code:** [/font-size-editor](./font-size-editor/)

### Responsive Flex‑Wrap Card Layout

* **Story:** A flexbox lab to understand `flex: 1 1 280px;` behavior and when cards wrap to the next line.
* **What you’ll see:** Card grid that adapts cleanly, without layout shifts.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/flex-wrap-cards/) · **Code:** [/flex-wrap-cards](./flex-wrap-cards/)

### Event Propagation Visualizer

* **Story:** A visual tool to understand capture → target → bubble phases with toggles.
* **What you’ll see:** Interactive DOM nodes with phase logs and stopPropagation options.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/event-propagation/) · **Code:** [/event-propagation](./event-propagation/)

### Payment Flow & Idempotency Sim *(Coming Soon)*

* **Story:** Inspired by payment gateways (e.g., Juspay): retries, deduplication keys, and DLQs.
* **What you’ll see:** Sequence diagrams, API mocks, and a replay‑safe flow.
* **Live:** [Open demo](https://<your-username>.github.io/practice_projects/payment-idempotency-sim/) · **Code:** [/payment-idempotency-sim](./payment-idempotency-sim/) -->

---

<!-- ## 🧭 How to Add a New Project

1. **Create a folder** under `/practice_projects/your-project-name/`.
2. Add an `index.html` (or framework entry like `app/` for Next.js). Keep assets inside `/assets`.
3. **Test locally** and ensure the main page loads via `index.html`.
4. **Add a README** inside the project with: goals, features, how to run, and screenshots.
5. **Deploy** (GitHub Pages recommended) and **add a link** to the lists above. -->

<!-- ### Template snippet for the README list

```md
- [Your Project Name](https://<your-username>.github.io/practice_projects/your-project-name/)  
  _Story:_ One line about why you built it and what you explored.  
  **Code:** [/your-project-name](./your-project-name/)
```
- [Your Project Name](https://<your-username>.github.io/practice_projects/your-project-name/)  
  _Story:_ One line about why you built it and what you explored.  
  **Code:** [/your-project-name](./your-project-name/)

> **GitHub Pages Setup:** Enable Pages for the repo → Source: `main` → `/root` (or `/docs`) → Save. Links will follow the pattern:
> `https://<your-username>.github.io/practice_projects/<project-folder>/`

--- -->

## 🛠️ Local Development

```bash
# clone
git clone https://github.com/<your-username>/practice_projects.git
cd practice_projects

# open a simple local server
# (choose one)
python -m http.server 8080
# or
npx serve .
```

Then visit `http://localhost:8080/practice_projects/<project-folder>/`.

---

## 🧰 Tech & Themes You’ll See Here

* HTML/CSS/JS fundamentals,  
* React.js / Node.js experiments
<!-- * Algorithms & data structures (TST, tries, DP, etc.)
* UI/UX micro‑interactions and accessibility experiments
* System‑design inspired simulations (retry, idempotency, queues) -->

---
<!-- 
## 🗺️ Roadmap

* [ ] Add screenshots/GIFs to each project
* [ ] Publish docs site with a project gallery
* [ ] Add tests for algorithmic demos
* [ ] Dark/light theme toggle
* [ ] CI to validate broken links -->

<!-- --- -->

## 📄 License

MIT — reuse freely with attribution.

---

<!-- ### Author

**Kanhaiya Kumar Sahu** · IIT Ropar (B.Tech, Math & Computing, 2025)

> If you found something useful or fun, ⭐ the repo and reach out with ideas to improve any demo! -->
