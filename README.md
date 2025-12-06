# ⏳ Countdown Timer

A minimalist, dark-themed countdown timer built with vanilla JavaScript.  
This project prioritizes clean UI/UX, using the **Web Audio API** for generated sound (no external audio files) and **System Notifications** to alert users on desktop devices.

---

## 🚀 Features

- **Smart Input Fields**  
  Time units are `contenteditable` divs. You can type numbers directly, and the logic automatically handles formatting (zero-padding) and sanitization.

- **Web Audio API Oscillator**  
  Generates a custom “double-beep” alarm using sound synthesis (no MP3 files).

- **Desktop Notifications**  
  Shows a system notification with an icon (`clock.png`) when the timer finishes.

- **Mobile Optimized Layout**
  - Uses `100dvh` to avoid mobile browser UI shifting
  - Opens numeric keypad with `inputmode="numeric"`
  - Large buttons for touch devices

- **Responsive Design**  
  Works smoothly across desktops, tablets, and mobile screens.

---

## 🛠️ Tech Stack

- **HTML5** (Semantic structure, `contenteditable`)
- **CSS3** (Flexbox, Media Queries, `dvh` units)
- **JavaScript (ES6+)** (Web Audio API, Notifications API)

---

## 📂 Project Structure

```text
/
├── index.html       # Main HTML structure
├── style.css        # Responsive styling and dark theme
├── script.js        # Timer logic, audio, notifications
├── clock.png        # Notification icon
└── README.md        # Documentation
```
# 📱 Device Compatibility & Notifications

## 💻 Desktop / Laptop (Recommended)

- **Audio:** Works perfectly  
- **Visuals:** Works perfectly  
- **Notifications:** Works perfectly (even when tab is in background)

## 📱 Mobile (Android / iOS)

- **Audio:** Works perfectly  
- **Visuals:** Optimized for touch  
- ⚠️ **Notifications:** Not reliable on mobile browsers  
