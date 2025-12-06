# Countdown Timer

A minimalist, dark-themed countdown timer built with vanilla JavaScript. This project prioritizes a clean UI/UX, using the **Web Audio API** for generated sound (no external audio files) and **System Notifications** to alert users even when the tab is backgrounded.

## 🚀 Features

* **Smart Input Fields:** Time units are `contenteditable` divs. You can type numbers directly, and the logic automatically handles formatting (padding with zeros) and input sanitization.
* **Web Audio API Oscillator:** Generates a custom "double-beep" alarm using sound synthesis. No heavy MP3 files are loaded.
* **System Notifications:** Triggers a browser notification with a custom icon (`clock.png`) when the timer finishes.
* **Mobile Optimized:**
    * Uses `100dvh` (Dynamic Viewport Height) to handle mobile browser address bars perfectly.
    * Triggers the numeric keypad on phones (`inputmode="numeric"`).
    * Implemented large, touch-friendly button targets.
* **Responsive Design:** Adapts fluidly from desktop monitors down to small foldable devices.

## 🛠️ Tech Stack

* **HTML5** (Semantic structure, `contenteditable`)
* **CSS3** (Flexbox, Media Queries, CSS Variables, `dvh` units)
* **JavaScript** (ES6+, Web Audio API, Notification API, Regex)

## 📂 Project Structure

```text
/
├── index.html      # Main HTML structure
├── style.css       # Responsive styling and dark theme
├── script.js       # Timer logic, Audio synthesis, and Event handling
├── clock.png       # Icon used for Browser Notifications
└── README.md       # Project documentation
