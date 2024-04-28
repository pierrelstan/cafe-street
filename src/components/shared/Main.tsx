import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <>
      <h1>header</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
}
