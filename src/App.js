import React from 'react'
import Button from './Button'
import Products from './Products';



function App() {
  
  function alertedit(){
    alert("edit success")
  }
  function alertdelete(){
    alert("delete success")
  }
  let products=[
    {
        "id": 1,
  "title": "Hieu",
  "name": "Hieu",
  "description": "aaaaa",
  "price": 30,
  "discountPercentage": 2.92,
  "rating": 4.92,
  "stock": 54,
  "brand": "Golden",
  "category": "home-decoration",
  "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
  "image": 
    "https://dummyjson.com/image/i/products/30/1.jpg",
    },
    {
      "id": 2,
"title": "Hieuxxx",
"name": "Hieuaa",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
  "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 3,
"title": "Hieus",
"name": "Hieuc",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 4,
"title": "Hieuxzczx",
"name": "Hieuaaa",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 5,
"title": "Hieucccc",
"name": "Hieuxxx",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 6,
"title": "Hieuxxx",
"name": "Hieuaa",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 7,
"title": "Hieuzxc",
"name": "Hieuaâ",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 8,
"title": "Hieuzxcxz",
"name": "Hieuzxcxzc",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 1,
"title": "Hieu",
"name": "Hieu",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 1,
"title": "Hieu",
"name": "Hieu",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},
{
  "id": 1,
"title": "Hieu",
"name": "Hieu",
"description": "aaaaa",
"price": 30,
"discountPercentage": 2.92,
"rating": 4.92,
"stock": 54,
"brand": "Golden",
"category": "home-decoration",
"thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
"image": 
"https://dummyjson.com/image/i/products/30/1.jpg",
},

]
  const styles ={
    'color':'blue'
  }
  return (
    <div className='App'>
      {/* <Button icon="edit" text="aâ"></Button> */}
      <Products products={products} rowclicks={alertedit} rowclickss={alertdelete} ></Products>
    </div>
  );
}

export default App