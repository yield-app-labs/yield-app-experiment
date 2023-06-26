import { render, screen } from "@testing-library/react";
import BusinessMetrics from "../business-metrics";
import _range from "lodash/range";
import { faker } from "@faker-js/faker";

function getBusinessMetrics(count: number) {
  return _range(count).map((_, index) => ({
    id: index,
    value: faker.lorem.text(),
    description: faker.lorem.sentence(),
  }));
}

const BUSINESS_METRICS_COUNT = 2;
const businessMetrics = getBusinessMetrics(BUSINESS_METRICS_COUNT);

describe("<BusinessMetrics />", () => {
  it("renders", () => {
    render(<BusinessMetrics businessMetrics={businessMetrics} />);
    const headings = screen.getAllByRole("heading", {
      level: 2,
    });
    expect(headings).toHaveLength(2);
    expect(headings[0].innerHTML).toEqual(businessMetrics[0].value);

    const descriptions = screen.getAllByRole("paragraph");
    expect(descriptions).toHaveLength(2);
    expect(descriptions[0].innerHTML).toEqual(businessMetrics[0].description);
  });
});
