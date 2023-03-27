import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../routes/HomePage";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("HomePage component", () => {
  it("renders the logo", () => {
    render(<HomePage />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
