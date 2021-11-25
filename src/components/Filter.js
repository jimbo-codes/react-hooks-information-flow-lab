import React, { useState } from "react";

function Filter({onCategoryChange, filterState}){
    // console.log(filterResult)
    console.log(filterState)
    return(
<div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}
export default Filter