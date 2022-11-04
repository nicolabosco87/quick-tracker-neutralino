import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Content } from "./components/Content";
import { Layout } from "./components/Layout";
import { Home } from "./features/Home/Home";
import { ManualTrack } from "./features/ManualTrack";
import { Settings } from "./features/Settings";
import { Track } from "./features/Track";
import { WindowEnhanced } from "./types";

export const Router = () => {
  const navigate = useNavigate();

  // on opening from trackPopup navigate to track route
  // useEffect(() => {
  //   (window as WindowEnhanced).electronAPI.onTrackPopup(() => {
  //     navigate("/track-popup");
  //   });

  //   (window as WindowEnhanced).electronAPI.onShowHistory(() => {
  //     navigate("/");
  //   });
  // }, [navigate]);

  useEffect(() => {
    const r = Neutralino.events.on('trayMenuItemClicked', () => {

    });
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
