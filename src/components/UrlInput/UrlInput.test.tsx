import { renderWithProviders, screen } from "../../utils/test-utils";
import { UrlInput } from "./UrlInput";

describe("UrlInput", () => {
  it("renders an input with the correct placeholder", () => {
    renderWithProviders(<UrlInput url="" setUrl={() => {}} />);

    expect(screen.getByPlaceholderText("Enter repo URL")).toBeInTheDocument();
  });

  it("renders an input with the correct value", () => {
    renderWithProviders(
      <UrlInput url="github.com/facebook/react" setUrl={() => {}} />,
    );

    expect(
      screen.getByDisplayValue("github.com/facebook/react"),
    ).toBeInTheDocument();
  });
});
