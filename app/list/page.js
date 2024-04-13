'use client'
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState([0,0,0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
              <h4>{a} $40</h4>
              <span>{count[i]}</span>
              <button onClick={()=>{
                let countCopy = [...count];
                countCopy[i]++
                setCount(countCopy)}}>+</button>
              <button onClick={()=>{
                let countCopy = [...count];
                if (countCopy[i] > 0){
                  countCopy[i]--;
                  setCount(countCopy);
                }}}>-</button>
            </div>
          )
        })
      }
    </div>
  );
}
