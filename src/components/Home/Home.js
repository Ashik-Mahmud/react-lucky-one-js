import React, { useEffect, useState } from 'react';
import Header from "./../Header/Header";
import Shop from "./../Shop/Shop";


const Home = () => {

 const [products, setProducts] = useState([])
 
 useEffect(()=>{
    fetch("./data.json")
    .then(response => response.json())
    .then(data => setProducts(data))
 }, [])

  return (
    <>
     <Header />
     <Shop products={products} />
    </>
  )
}

export default Home