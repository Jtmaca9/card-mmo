"use client";
import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  onClick?: () => Promise<void> | void;
};

export default function Button({ onClick, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      onClick={async () => {
        if (!onClick) return;
        await onClick();
      }}
    />
  );
}
