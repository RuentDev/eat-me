import React from "react";
import "./pricerange.css";
import {Button} from '..'

import usePriceRange from "./usePriceRange";

const PriceRangeSlider = () => {
  const {
    handleMinRangeSlider,
    handleMaxRangeSlider,
    handleMinTextValChange,
    handleMaxTextValChange,
    minPriceRange,
    maxPriceRange,
    minPriceRangeSlider,
    maxPriceRangeSlider,
    errorText,
  } = usePriceRange();

  return (
    <div className="price-range">
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input
            type="number"
            name="input-min"
            value={minPriceRange}
            onChange={(e) => handleMinTextValChange(e)}
          />
        </div>
        <div className="separator">_</div>
        <div className="field">
          <span>Max</span>
          <input
            type="number"
            name="input-max"
            value={maxPriceRange}
            onChange={(e) => handleMaxTextValChange(e)}
          />
        </div>
      </div>
      <div className="price-range-slider">
        <div className="price-slider" id="priceSlider"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          min={0}
          max={2000}
          value={minPriceRange ? minPriceRangeSlider : 0}
          className="range-min"
          name="range-min"
          id="rangeMin"
          onChange={(e) => handleMinRangeSlider(e)}
        />
        <input
          type="range"
          min={0}
          max={2000}
          value={maxPriceRangeSlider}
          className="range-max"
          name="range-max"
          id="rangeMax"
          onChange={(e) => handleMaxRangeSlider(e)}
        />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "red",
          margin: "1rem 0",
        }}
      >
        {errorText}
      </p>

      <div className="price-range-button">
        <Button 
          label="Refine Search"
          containerStyle={{
            height: '1rem',
            minWidth: '50px',
            padding: '1rem',
            borderRadius: '10px'
          }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
