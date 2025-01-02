const ComparisonTable = ({ selectedCars }) => {
    return (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Comparison Table</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Model</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {selectedCars.map((car) => (
              <tr key={car.id}>
                <td className="border p-2">{car.brand}</td>
                <td className="border p-2">{car.model}</td>
                <td className="border p-2">${car.price}</td>
                <td className="border p-2">{car.weight}</td>
                <td className="border p-2">{car.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    );
  };
  
  export default ComparisonTable;
  