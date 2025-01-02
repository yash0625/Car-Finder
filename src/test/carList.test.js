import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarList from "../components/carList";

const mockCars = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model S",
    price: 79999,
    weight: "2,241 kg",
    rating: 4.8,
    image: "tesla.jpg",
  },
  {
    id: 2,
    brand: "Ford",
    model: "Mustang",
    price: 55999,
    weight: "1,740 kg",
    rating: 4.5,
    image: "mustang.jpg",
  },
];

describe("CarList Component", () => {
  test("renders car details correctly", () => {
    render(
      <CarList cars={mockCars} selectedCars={[]} setSelectedCars={jest.fn()} />
    );

    // Check if car details are rendered
    expect(screen.getByText("Tesla Model S")).toBeInTheDocument();
    expect(screen.getByText("Ford Mustang")).toBeInTheDocument();
    expect(screen.getByText("Price: $79999")).toBeInTheDocument();
    expect(screen.getByText("Rating: 4.8")).toBeInTheDocument();
  });

  test("toggles car selection", () => {
    const setSelectedCarsMock = jest.fn();
    render(
      <CarList cars={mockCars} selectedCars={[]} setSelectedCars={setSelectedCarsMock} />
    );

    const compareButton = screen.getAllByText("Compare")[0];
    fireEvent.click(compareButton);

    // Check if the mock function is called with the selected car
    expect(setSelectedCarsMock).toHaveBeenCalledWith([mockCars[0]]);
  });
});
