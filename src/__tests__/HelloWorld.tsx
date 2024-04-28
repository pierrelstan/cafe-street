import React from "react";
import HelloWorld from "@/components/shared/HelloWorld";
import { render, screen } from "@testing-library/react";

test("loads items eventually", async () => {
  render(<HelloWorld />);

  screen.getByText(/Hello world/i);
});
