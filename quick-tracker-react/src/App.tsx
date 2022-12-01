import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "./Router";
import { loadFromDisk } from "./state/state";
import { theme } from "./theme";

export const App = () => {
  useEffect(() => {
    loadFromDisk();
  }, []);

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
