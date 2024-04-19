import { renderWithProviders, screen } from "../../utils/test-utils";
import { BreadCrumbs } from "./BreadCrumbs";

describe("BreadCrumbs", () => {
  it("renders a breadcrumb with the correct text", () => {
    renderWithProviders(<BreadCrumbs url="facebook/react" />);

    expect(screen.getByText("facebook")).toBeInTheDocument();
    expect(screen.getByText("react")).toBeInTheDocument();
  });
});
