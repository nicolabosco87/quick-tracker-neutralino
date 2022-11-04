import { Group, Header, Text } from "@mantine/core";
import React from "react";

export const HeadBar = () => {
  return (
    <>
      <Header height={33} sx={(theme) => ({ background: theme.colors["ocean-blue"][7], zIndex: 10000 })}>
        <Group position="center" align="center" sx={{ height: 33 }}>
          <Text
            size="sm"
            sx={{ flex: 1, textAlign: "center", zIndex: 0 }}
            color="white"
            weight={500}
            style={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              "-webkit-app-region": "drag",
            }}
          >
            Quick Tracker
          </Text>
        </Group>
      </Header>
    </>
  );
};
