import React from 'react'
import Filter_line from './filter_line'
import All_products from './all_products'
import { useState, useEffect } from 'react';
import data from '../dataForProject.js';

export default function BodyComp() {
  const [filterInfo, setFilterInfo] = useState("");

  useEffect(() => {
    if (!("quantity" in data[0]))
      data.forEach(item => {
        item.quantity = Math.floor(Math.random() * 20);
        console.log("data", item.quantity);
      });
  }, []);
  return (
    <div >
      <Filter_line setFilterInfo={setFilterInfo} />
      <All_products filterInfo={filterInfo} />
    </div>

  )
}
