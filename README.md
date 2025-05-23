# ApplyPilot Chrome Extension

ApplyPilot is a productivity-focused Chrome extension that helps job seekers streamline the application process by autofilling job application forms and tracking submissions in one click.

## 🚀 Features

- ✅ Autofill job application forms with your saved information
- 📌 Track applications directly from the extension
- 🧠 Simple, clean UI for quick access
- 🔒 Privacy-focused: No data is stored without your consent

## 🛠 Tech Stack

- **React 19 + Vite** for blazing fast UI
- **Tailwind CSS** for styling
- **Chrome Extensions API**
- **Supabase (planned)** for backend data storage

## 📂 Project Structure

```
├── public/
│   └── manifest.json
├── src/
│   ├── popup/
│   │   ├── Popup.jsx
│   │   └── index.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── popup.html
├── vite.config.js
└── package.json
```

## 🧪 Development

Start the development server:

```bash
npm install
npm run dev
```

Then load your extension in Chrome:

1. Visit `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select your project `dist` folder

You can preview popup UI at `http://localhost:5173/popup.html`

## 🔨 Build for Production

```bash
npm run build
```

This creates a `dist/` folder you can load into Chrome as an unpacked extension.

## ✅ TODOs

- [x] Popup UI design
- [x] Tailwind layout and styling
- [ ] Implement autofill functionality
- [ ] Integrate with Supabase for tracking

## 📜 License

MIT

---

Crafted with ❤️ by ApplyPilot
