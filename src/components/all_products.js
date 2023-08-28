import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import data from '../dataForProject';
import "./style/all_products.css"
import "./style/shared_page.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function All_products({ filterInfo }) {
  const [filterData, setFilterData] = useState(data);
  const handleDeleteProduct = (productId) => {
    const index = data.findIndex(p => p.id == productId);
    data.splice(index, 1);
    setFilterData([...data])
  };
  const handleIncreaseQuantity = (productId) => {
    const index = data.findIndex(p => p.id == productId);
    data[index].quantity++;
    setFilterData([...data])
  };
  const handleDecreaseQuantity = (productId) => {
    const index = data.findIndex(p => p.id == productId);
    if (data[index].quantity != 0) {
      data[index].quantity--;
      setFilterData([...data])
    }
  };

  useEffect(() => {
    filterInfo = "";

    console.log('filterData has changed:', filterData);
  }, [filterData]);

  useEffect(() => {
    const filteredProducts = data.filter(
      (product) =>
        product.title.toLocaleLowerCase().includes(filterInfo) || filterInfo === "" || (
          product.category.toLocaleLowerCase().includes(filterInfo) && filterInfo != "men's clothing")
        || product.category === filterInfo

    );
    setFilterData([...filteredProducts]);

  }, [filterInfo]);


  function ProductCard({ product, onDelete, increase, decrease }) {
    const [quantityProduct, setQuantityProduct] = useState(product.quantity);
    const handleDelete = () => {
      onDelete(product.id);
    };
    const handleIncreaseQuaty = () => {
      increase(product.id);
    };
    const handleDecreaseQuaty = () => {
      decrease(product.id);
    };
    return (
      <div className="productCard" >
        <Link to="/product_details" state={product}>
          <div className="image-container">
            <img src={product.image} alt={product.description} />
          </div>
        </Link>
        <div className="data">{product.title}</div>
        <div className="actions quantityIcons">
          <div className="actionIcon icons quantityIcon" >
            <p className='hoverIcon' onClick={handleIncreaseQuaty}>+1</p>

          </div>
          <div className="actionIcon icons quantityIcon" >
            <p className='hoverIcon quty'> {quantityProduct}</p>
          </div>
          <div className="actionIcon icons quantityIcon" >
            <p className='hoverIcon' onClick={handleDecreaseQuaty}> -1</p>
          </div>
        </div>
        <div className="actions">
          <div className="actionIcon" onClick={handleDelete}>
            <i className="bi bi-trash3-fill icons hoverIcon"  ></i>
          </div>
          <div className="actionIcon">
            <Link to="/update_product" state={product}>
              <i className="icons bi bi-pencil-fill custom-link hoverIcon"></i>
            </Link>
          </div>
        </div>
        <div >
          <i className={`bi bi-star-fill ${product.rating.rate > 4.5 ? `` : `notRating`}`} ></i>
        </div>
      </div>
    );
  }
  return (
    <div id="allProducts" className='pageComponent withFilter'>
      <div className="titlePage">
        Products
      </div>
      <div id="container">
        {filterData.map((product) => (
          <ProductCard key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            increase={handleIncreaseQuantity}
            decrease={handleDecreaseQuantity}
          />))}
      </div>
    </div>)
}

export default All_products






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import data from '../dataForProject';
// import './style/all_products.css';
// import './style/shared_page.css';
// import 'bootstrap/dist/css/bootstrap.css';

// function All_products({ filterInfo }) {
//   const [filterData, setFilterData] = useState(data);

//   useEffect(() => {
//     const filteredProducts = data.filter(
//       (product) =>
//         product.title.toLowerCase().includes(filterInfo) ||
//         (product.category.toLowerCase().includes(filterInfo) && filterInfo !== "men's clothing") ||
//         product.category === filterInfo
//     );
//     setFilterData(filteredProducts);
//   }, [filterInfo]);

//   const handleDeleteProduct = (productId) => {
//     const updatedData = data.filter(p => p.id !== productId);
//     data = updatedData;
//     setFilterData(updatedData);
//   };

//   return (
//     <div id="allProducts" className="pageComponent withFilter">
//       <div className="titlePage">Products</div>
//       <div id="container">
//         {filterData.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onDelete={handleDeleteProduct}
//             setFilterData={setFilterData}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProductCard({ product, onDelete, setFilterData }) {
//   const [quantityProduct, setQuantityProduct] = useState(product.quantity);

//   const handleDelete = () => {
//     onDelete(product.id);
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantityProduct(prevQuantity => prevQuantity + 1);

//     const updatedData = data.map(p => {
//       if (p.id === product.id) {
//         return { ...p, quantity: p.quantity + 1 };
//       }
//       return p;
//     });

//     data = updatedData;
//     setFilterData(updatedData);
//   };

//   return (
//     <div className="productCard">
//       {/* ... other card content ... */}
//       <div className="actions quantityIcons">
//         <div className="actionIcon icons quantityIcon" >
//           <p className='hoverIcon' onClick={handleIncreaseQuantity}>+1</p>
//         </div>
//         <div className="actionIcon icons quantityIcon" >
//           <p className='hoverIcon quty'> { quantityProduct}</p>
//         </div>
//         <div className="actionIcon icons quantityIcon" >
//           <p className='hoverIcon'> -1</p>
//         </div>
//       </div>
//       <div className="actions">
//         {/* ... delete and edit icons ... */}
//       </div>
//     </div>
//   );
// }

// export default All_products;
