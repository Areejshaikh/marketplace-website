import { useState } from "react";

const PriceRangeSlider = () => {
  const minLimit = 0;   // Minimum possible value
  const maxLimit = 5000; // Maximum possible value
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) setMaxPrice(value);
  };

  return (
    <div className="w-full max-w-md mx-auto py-4">
      <h2 className="text-lg text-left font-bold mb-4">Set Price Range</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>

      <div className="relative h-8">
        {/* Range Track */}
        <div className="absolute top-1/2 w-full h-3 bg-gray-300 rounded-lg transform -translate-y-1/2"></div>
        
        {/* Dynamic Colored Range */}
        <div
          className="absolute top-1/2 h-3 bg-black rounded-lg transform -translate-y-1/2"
          style={{
            left: `${(minPrice / maxLimit) * 100}%`,
            right: `${100 - (maxPrice / maxLimit) * 100}%`
          }}
        ></div>

        {/* Min Price Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
        />
        
        {/* Max Price Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
