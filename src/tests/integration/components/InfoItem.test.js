import { render, screen } from "@testing-library/react";
import InfoItem from "../../../components/InfoItem";

const props = {
  title: "confirmed",
  newCases: 30,
  totalCases: 300,
  confirmed: true,
};

describe("Unit Tests | InfoItem", () => {
  it("it should render the InfoItem", () => {
    // Act
    render(<InfoItem {...props} />);

    const title = screen.getByText(props.title);
    const totalCases = screen.getByText(props.totalCases);

    // Assert
    expect(title).toBeInTheDocument();
    expect(totalCases).toBeInTheDocument();
  });
});
