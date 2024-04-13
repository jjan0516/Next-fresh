'use client'

import {age} from "./data"
export default function Cart(){
    let 장바구니 = ['Tomatoes', 'Pasta']
    return (
        <div>
          <h4 className="title">Cart</h4>
          { 장바구니.map((item, idx) => {
            return <CartItem item={item} key={idx}/>
            })
          }
          <Banner content="롯데카드"/>
        </div>
      )
    
}
function Banner(props){
    return <h5>{props.content} 결제 할인 중</h5>
}
function CartItem({item, idx}){
    return (
        <div className="cart-item">
            <p>{item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}