
import { useState } from "react";
import { useDispatch } from "react-redux";

const usePriceRange = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState("");

  const [minPriceRange, setMinPriceRange] = useState(0);
  const [maxPriceRange, setMaxPriceRange] = useState(1500);

  const [minPriceRangeSlider, setMinPriceRangeSlider] = useState(0);
  const [maxPriceRangeSlider, setMaxPriceRangeSlider] = useState(1500);

  const rangeMinInput = document.getElementById("rangeMin");
  const rangeMaxInput = document.getElementById("rangeMax");
  const progress = document.getElementById("priceSlider");
  const priceGap = 280;

  const handleMinTextValChange = (e) => {
    if (parseInt(e.target.value) + priceGap < maxPriceRange) {
      setMinPriceRange(e.target.value);
      setMinPriceRangeSlider(e.target.value);
      progress.style.left = (parseInt(e.target.value) / rangeMinInput.max) * 100 + "%";
    } else {
      setMinPriceRange(e.target.value);
      setMinPriceRangeSlider(maxPriceRange - priceGap);
      progress.style.left = "60%";
    }

    if (e.target.value === "") {
      progress.style.left = (0 / rangeMinInput.max) * 100 + "%";
      setErrorText("Please put mimimum amount");
      setTimeout(() => {
        setErrorText("")
      }, 5000);
    }
    
  };

  const handleMaxTextValChange = (e) => {
    
    if (parseInt(e.target.value) >= parseInt(rangeMaxInput.max)) {
      setMaxPriceRange(e.target.value);
      setMaxPriceRangeSlider(parseInt(rangeMaxInput.max))
      progress.style.right = 100 - (parseInt(rangeMaxInput.max) / rangeMaxInput.max) * 100 + "%";
      setErrorText("")
    }else{
      setMaxPriceRange(e.target.value);
      setMaxPriceRangeSlider(e.target.value)
      progress.style.right = 100 - (parseInt(e.target.value) / rangeMaxInput.max) * 100 + "%";
      setErrorText("")
    }
    
    if(parseInt(e.target.value) <= priceGap){
      setMaxPriceRange(e.target.value);
      setMaxPriceRangeSlider(minPriceRange + priceGap)
      progress.style.right = 100 - (priceGap / rangeMaxInput.max) * 100 + "%";
      setErrorText("")
    }
  
    if (e.target.value === "") {
      progress.style.right = 100 - (priceGap/ rangeMaxInput.max) * 100 + "%";
      setMaxPriceRangeSlider(minPriceRange + priceGap);
      setErrorText("Please put maximum amount")
      setTimeout(() => {
        setErrorText("")
      }, 5000);
    }
  };

  const handleMinRangeSlider = (e) => {
    // if ( parseInt(e.target.value) + priceGap < parseInt(rangeMaxInput.value)) {
    //   progress.style.left = (parseInt(e.target.value) / rangeMinInput.max) * 100 + "%";
    //   setMinPriceRangeSlider(e.target.value);
    //   setMinPriceRange(e.target.value);
    // }
    setMinPriceRange(e.target.value)
    setMinPriceRangeSlider(e.target.value);
    progress.style.left = (parseInt(e.target.value) / rangeMinInput.max) * 100 + "%";
  };

  const handleMaxRangeSlider = (e) => {
    // if (parseInt(e.target.value) - priceGap > parseInt(rangeMinInput.value)) {
    //   setMaxPriceRange(e.target.value);
    //   setMaxPriceRangeSlider(e.target.value);
    //   progress.style.right =
    //     100 - (parseInt(e.target.value) / rangeMaxInput.max) * 100 + "%";
    // }
    setMaxPriceRange(e.target.value);
    setMaxPriceRangeSlider(e.target.value);
    progress.style.right = 100 - (parseInt(e.target.value) / rangeMaxInput.max) * 100 + "%";
  };

  return {
    setMinPriceRange,
    setMaxPriceRange,
    handleMinTextValChange,
    handleMaxTextValChange,
    handleMinRangeSlider,
    handleMaxRangeSlider,
    dispatch,
    minPriceRange,
    maxPriceRange,
    minPriceRangeSlider,
    maxPriceRangeSlider,
    errorText,
  };
};

export default usePriceRange;
