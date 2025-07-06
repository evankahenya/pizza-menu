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
    return <div>
        <h2> Our Menu</h2>
        <Pizza/>
        <Pizza/>
        <Pizza />
    

    </div>
}

function Footer(){
    // return React.createElement("footer",null, "We are open")
    const currentTime = new Date().getHours();
    console.log(currentTime);

    const opening = 7;
    const closing = 16;
    let message = "";
    currentTime > opening && currentTime < closing ? message = " We are Open!!" : message = " Sorry we are closed"; 

    return <footer>
      
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {message}
    </footer>

}
function Pizza(){
    return <div>
        <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"></img>
            <h2 > Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>

}

