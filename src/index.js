import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App (){
    return <div className="container"> 
    <Header/>
    <Menu/>
    <Footer/>
    </div>
     


}

// This is how we render in react version 18
// basically create a connection from index.html to to my app
const root = ReactDom.createRoot(document.getElementById("root"));

// we use strict mode to render twice to find bugs, for better debugging and checking if we are using outdated parts of the react API
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>)

// header component
function Header(){
        return <header>
<h1 className="header"> Fast React Pizza</h1>
    </header>
    
    
}

function Menu(){
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

    return <div>
        <h2> Our Menu</h2> 
        
 {numPizzas ? (
  <> 
  {/* fragment */}
        <p>Authentic Italina cusine, 6 creative dishes to
choose from. All from our stone oven, all organic,
all delicious.</p>
                  <ul className="pizzas">
         {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
        </ul>
             </>
        ): <p>We're still working on our menu</p>}

   
       
    </div>
}

function Pizza({pizzaObj}){

  
    return (
    <li className={`pizza ${pizzaObj.soldOut? 'sold-out': ''}`} >
        <div>
          <img src= {pizzaObj.photoName} alt="Pizza spinaci"></img>
            <h2 > {pizzaObj.name} </h2>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut? "SOLD OUT" : pizzaObj.price}</span>
        </div>
    </li>);

}




function Footer(){
    // return React.createElement("footer",null, "We are open")
    const currentTime = new Date().getHours();
    const opening = 8;
    const closing = 18;
    const isOpen = currentTime > opening && currentTime < closing;


    return <footer>
    
       {isOpen ? (<Order closing = {closing} opening = {opening} />):<p>We're happy to welcome you at {opening}:00 - {closing}:00</p>
      
      }
       
    </footer>

}

function Order({closing}){
     console.log(`Logging closing time: ${closing}`)
  return <div className="order">
   

          <p>We're open until {closing}: 00. Come visit us or order online.</p> 
          <button className="btn">Order</button>
          

        </div>

     

}

