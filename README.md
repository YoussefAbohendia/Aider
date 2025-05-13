# Aider

# React Calculator – Aider Assignment Submission

## 🔧 Features Implemented

### 1. ✅ Calculation History
- Each time the user presses `=`, the full expression and result (e.g., `5 + 3 = 8`) is stored.
- A list of recent calculations is displayed below the calculator UI using a new `History.js` component.

### 2. ✅ Dark Mode Toggle
- A button labeled **Toggle Dark Mode** is added to the top of the calculator.
- Clicking it toggles between light and dark themes.
- The dark theme applies styles using a `dark-mode` CSS class.

---

## 🗂️ Files Included

- `App.js` – Main app logic, including calculator state, history management, and dark mode toggle
- `History.js` – New component to render recent calculations
- `App.css` – Styling for both light and dark themes, and history list
- `App.test.js` – Basic test to ensure the app renders

---

## 📂 File Structure

```
src/
└── component/
    ├── App.js
    ├── App.css
    ├── App.test.js
    └── History.js
```

---

## 🧠 How the Features Work

### History
- Implemented with a new state variable: `history: []`
- When `=` is pressed, the full expression and result is pushed to `history`
- The `History` component maps over this array and renders each item in a list

### Dark Mode
- A `darkMode` boolean state is toggled with the button
- The top-level app `<div>` has a class of `dark-mode` conditionally applied
- CSS styles change background and text colors based on that class

---

## 💬 Aider Interaction Summary (Simulated)

**Prompt:**
```
Add a dark mode toggle to the calculator. Add a button labeled 'Toggle Dark Mode' at the top of the app. When clicked, it should toggle a 'dark-mode' CSS class on the root container. Update App.js to manage the toggle, and update App.css to support dark mode styling.
```

**Aider Response:**
```
✔ Updated App.js:
- Added darkMode state
- Added toggleDarkMode() method
- Rendered a button to toggle theme
- Applied conditional 'dark-mode' class

✔ Updated App.css:
- Added dark mode styling

✔ Created Git commit: feat: Add dark mode toggle functionality
```

---

## 🧪 How to Test

1. Run `npm start` inside the `calculator` project
2. Enter calculations like `4 + 5 =`
3. Check that history appears below
4. Click **Toggle Dark Mode** to switch themes


