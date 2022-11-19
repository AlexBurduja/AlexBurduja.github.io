import { useEffect, useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri'

export function ShoppingCart() {

  const [cart, setCart] = useState([]);


  ///Fetch Get RestApi
  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then((response) => response.json())
      .then((cartFromServer) => setCart(cartFromServer));
  }, [])

  return (
    <section>
      <RiShoppingCartLine />
      {cart.map((item) => {
        return (
         <div>
          <p>{item.quantity}</p>
         </div> 
        );
      })}
    </section>
  );
}
