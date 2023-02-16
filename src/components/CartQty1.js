import React from "react";

function CartQty1(props) {
  import React, { useState, useEffect } from "react";

  const [checked, setChecked] = useState({ a: false, b: false, c: false });
  const [quantities, setQuantities] = useState({ a: 0, b: 0, c: 0 });
  const [prices, setPrices] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load the prices from the data.json file
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
      });
  }, []);

  useEffect(() => {
    // Calculate the total based on the quantities and prices
    let newTotal = 0;
    Object.keys(checked).forEach((key) => {
      if (checked[key]) {
        newTotal += quantities[key] * prices[key];
      }
    });
    setTotal(newTotal);
  }, [checked, quantities, prices]);

  const handleCheck = (e) => {
    setChecked({ ...checked, [e.target.name]: !checked[e.target.name] });
  };

  const handleCheckAll = () => {
    setChecked({ a: !checked.a, b: !checked.a, c: !checked.a });
  };

  const handleSave = () => {
    const data = JSON.stringify(checked);
    // Save the data to a JSON file
  };

  const handleDelete = () => {
    setChecked({ a: false, b: false, c: false });
    setQuantities({ a: 0, b: 0, c: 0 });
    // Delete the data from the JSON file
  };

  const handleIncrease = (key) => {
    setQuantities({ ...quantities, [key]: quantities[key] + 1 });
  };

  const handleDecrease = (key) => {
    if (quantities[key] > 0) {
      setQuantities({ ...quantities, [key]: quantities[key] - 1 });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="all"
        checked={checked.a}
        onChange={handleCheckAll}
      />
      <label htmlFor="a">Check All</label>
      <br />
      <input
        type="checkbox"
        name="a"
        checked={checked.a}
        onChange={handleCheck}
      />
      <label htmlFor="a">A</label>
      <button onClick={() => handleIncrease("a")}>+</button>
      <button onClick={() => handleDecrease("a")}>-</button>
      <br />
      <input
        type="checkbox"
        name="b"
        checked={checked.b}
        onChange={handleCheck}
      />
      <label htmlFor="b">B</label>
      <button onClick={() => handleIncrease("b")}>+</button>
    </div>
  );
}

export default CartQty1;
