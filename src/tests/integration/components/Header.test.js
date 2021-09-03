import { render, screen } from "@testing-library/react";
import Header from "../../../components/Header";

describe("Unit Tests | Header", () => {
  it("it should render the app header with title", () => {
    // Act
    render(<Header />);

    const heading = screen.getByText("heading");

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
