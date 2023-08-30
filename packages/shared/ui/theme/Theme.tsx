"use client";

import React from "react";
import { Global, MantineProvider, MantineTheme } from "@mantine/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        body: {
          fontFamily: "SF Pro Display",
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: 1.5,
        },
      })}
    />
  );
};

type ThemeProps = {
  colorScheme: MantineTheme["colorScheme"];
  children: JSX.Element;
};

export const Theme = ({ colorScheme, children }: ThemeProps) => {
  return (
    <MantineProvider withNormalizeCSS theme={{ colorScheme }}>
      <GlobalStyles />
      {children}
    </MantineProvider>
  );
};
