import { renderWithProviders, screen } from "../../utils/test-utils";
import { Board } from "./Board";

describe("Board", () => {
  it("renders a board with columns", () => {
    renderWithProviders(<Board />);

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders a board with skeleton loading", () => {
    renderWithProviders(<Board />);

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
