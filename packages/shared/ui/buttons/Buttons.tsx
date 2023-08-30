"use client";

import React from "react";
import { Button, ButtonProps } from "@mantine/core";

export const PrimaryButton = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};
