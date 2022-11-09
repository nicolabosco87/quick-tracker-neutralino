import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

Neutralino.init();

let tray = {
  icon: '/quick-tracker-react/src/assets/icon.png',
  menuItems: [
    {id: "history", text: "History"},
    {text: "-"},
    {id: "quit", text: "Quit"}
  ]
};

Neutralino.os.setTray(tray);