import React ,{useCallback}from "react";

const CarList = ({ cars, selectedCars, setSelectedCars }) => {
    const handleSelect = useCallback(
        (car) => {
          if (selectedCars.includes(car)) {
            setSelectedCars(selectedCars.filter((item) => item !== car));
          } else {
            setSelectedCars([...selectedCars, car]);
          }
        },
        [selectedCars, setSelectedCars]
      );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className={`border p-4 rounded-lg shadow-md ${
            selectedCars.includes(car) ? "border-blue-500" : "border-gray-300"
          }`}
        >
   <img 
  src={car.image} 
  alt={`${car.brand} ${car.model}`} 
  loading="lazy" 
  className="w-full h-40 object-cover rounded-md mb-4" 
/>

          <h2 className="text-xl font-bold">
            {car.brand} {car.model}
          </h2>
          <p>Price: ${car.price.toLocaleString()}</p>
          <p>Weight: {car.weight}</p>
          <p>Rating: ⭐ {car.rating}</p>
          <button
            className={`mt-2 px-4 py-2 rounded ${
              selectedCars.includes(car)
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleSelect(car)}
          >
            {selectedCars.includes(car) ? "Remove" : "Compare"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
