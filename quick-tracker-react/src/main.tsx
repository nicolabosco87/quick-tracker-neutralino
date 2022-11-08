import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

Neutralino.init();

Neutralino.events.on('windowMinimize', () => {
  Neutralino.window.hide() // Hiding the window and the task bar icon
})

Neutralino.events.on('windowClose', (event: any) => {
  console.log("windowClose", event);
  Neutralino.window.hide() // Hiding the window instead of closing the app with Neutralino.app.exit()
  return false;
})



let tray = {
  icon: '/icon.png',
  menuItems: [
    {id: "history", text: "History"},
    {text: "-"},
    {id: "quit", text: "Quit"}
  ]
};

Neutralino.os.setTray(tray);