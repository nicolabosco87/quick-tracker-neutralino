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
  Neutralino.window.hide() // Hiding the window instead of closing the app with Neutralino.app.exit()
  console.log(event);
  return false;
})

Neutralino.events.on('trayIconClicked', (event: any) => {
  if (event.detail.button === 0) { // If click was made with left mouse button
    event.preventDefault() // Prevent the tray menu to show up
    Neutralino.window.show() // And bring back my window, thanks!
  }
})


let tray = {
  icon: '/assets/icon.png',
  menuItems: [
    {id: "about", text: "About"},
    {text: "-"},
    {id: "quit", text: "Quit"}
  ]
};

Neutralino.os.setTray(tray);