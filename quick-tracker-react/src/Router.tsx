import { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Content } from "./components/Content";
import { Layout } from "./components/Layout";
import { Home } from "./features/Home/Home";
import { ManualTrack } from "./features/ManualTrack";
import { Settings } from "./features/Settings";
import { Track } from "./features/Track";
import { isReminderTime } from "./lib/utils";
import { state } from "./state/state";

let reminderInterval: NodeJS.Timer;

export const Router = () => {
  const navigate = useNavigate();
  const { settings} = useSnapshot(state)

  useEffect(() => {
    reminderInterval = setInterval(async () => {
      if (isReminderTime(settings)) {
        await Neutralino.window.setSize({
          width: 400,
          height: 500,
        })

        const displays = await Neutralino.computer.getDisplays();
        console.log(displays)

        await Neutralino.window.move(displays[1].resolution.width - 400, displays[1].resolution.height - 500);
        
        navigate("track-popup");
        await Neutralino.window.show();
        Neutralino.window.focus();
      }
    },60000 );

    return () => {
      if (reminderInterval) {
        clearInterval(reminderInterval);
      }
    }
  }, [])

  useEffect(( ) => {
    Neutralino.events.on('trayMenuItemClicked', (event: any, menuItem: any) => {
      if (event.detail.id === "quit") {
        Neutralino.app.exit();
      }

      if (event.detail.id === "history") {
        Neutralino.window.minimize();
        navigate("/");
        Neutralino.window.show();
      }
    })
  }, []);

  return (
    <Routes>
      <Route
        path=""
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Home />} />
        <Route path="manual-track" element={<ManualTrack />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route
        path="track-popup"
        element={
          <Content>
            <Track />
          </Content>
        }
      />
    </Routes>
  );
};
