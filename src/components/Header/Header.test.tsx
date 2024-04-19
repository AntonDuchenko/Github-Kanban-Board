import { renderWithProviders, screen } from "../../utils/test-utils";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a header", () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole("header")).toBeInTheDocument();
  });
});
