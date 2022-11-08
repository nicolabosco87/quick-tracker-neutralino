import { HashRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import React, { useEffect } from "react";
import { Router } from "./Router";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { theme } from "./theme";
import { state } from "./state/state";
import { useSnapshot } from "valtio";

export const App = () => {

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <NotificationsProvider>
          <HashRouter>
            <Router />
          </HashRouter>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};
