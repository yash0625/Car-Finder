import React, { useState ,Suspense } from "react";
import { carData } from "./Cars/car-data";
import CarLists from "./components/carList";
import Filters from "./components/filters";
import ComparisonTable from "./components/comparisonTable";
import Header from './components/header';
import Footer from './components/footer';
const App = () => {
  const [filteredCars, setFilteredCars] = useState(carData);
  const [selectedCars, setSelectedCars] = useState([]);
  const CarList = React.lazy(() => import("./components/carList"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold text-center mb-6">Car Comparison</h1>
      <Filters cars={carData} setFilteredCars={setFilteredCars} />
      <CarLists
        cars={filteredCars}
        selectedCars={selectedCars}
        setSelectedCars={setSelectedCars}
      />
      {selectedCars.length > 0 && (
        <ComparisonTable selectedCars={selectedCars} />
      )}
       <Footer />
    </div>
    </Suspense>
  );
};

export default App;
