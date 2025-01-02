import React, { useState } from "react";

const Filters = ({ cars, setFilteredCars }) => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [brand, setBrand] = useState("");

  // Extract unique brands from the cars array
  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];

  const handleFilter = () => {
    const filtered = cars.filter((car) => {
      return (
        car.price >= priceRange[0] &&
        car.price <= priceRange[1] &&
        (brand === "" || car.brand === brand)
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className="bg-white p-4 mb-4 shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <label className="block font-medium">Price Range</label>
          <input
            type="range"
            min="0"
            max="200000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
            className="w-full"
          />
          <span className="text-sm">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <div className="w-full md:w-1/3">
          <label className="block font-medium">Brand</label>
          <select
            className="border rounded p-2 w-full"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All</option>
            {uniqueBrands.map((brandName) => (
              <option key={brandName} value={brandName}>
                {brandName}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
            onClick={handleFilter}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
