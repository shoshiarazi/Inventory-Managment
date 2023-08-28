import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style/form.css'
import data from '../dataForProject.js';
import { Link } from "react-router-dom";

function ProductForm() {
  const location = useLocation();
  const propsData = location.state;
  const navigate = useNavigate();
  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const quantityRef = useRef();
  const descriptionRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [title, action, isNewProduct] = Object.keys(propsData).length === 0 ? ["Add New Product", "ADD", true] : ["Edit Product", "EDIT", false]

  const goBack = () => {
    navigate(-1); 
  };

  const saveChanges = () => {
    if (titleRef.current.value && categoryRef.current.value && priceRef.current.value) {
      const product = {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        price: priceRef.current.value,
        image: imageRef.current.value,
        quantity: quantityRef.current.value,
        description: descriptionRef.current.value,
      };
      console.log(product);
      const index = data.findIndex(obj => obj.id === propsData.id);
      if (index !== -1) {
        data[index] = { ...data[index], ...product };
      }
      else {
        data.push({ ...product, ...{ id: data.length + 1, rating: { rate: 0, count: 0 } } })
      }
      navigate('/')
    }
    setSubmitted(true);
    console.log(data);
  }
  return (

    <div className="pageComponent">
      <div className="header2">
        <div className="titlePage">
          {title}
        </div>

        <div className="icon-grid">
          <i className="bi bi-arrow-left leftIcon" onClick={goBack}></i>
          <Link to="/product_details" state={propsData}>
            <i className={`hoverIcon  bi bi-search  searchIcon ${action == "ADD" ? `notDisplay` : ``}`}   ></i>
          </Link >
          <Link to="/">
            <i className={`custom-link hoverIcon bi bi-house-door-fill  ${action == "ADD" ? `notDisplay` : ``}`} ></i>
          </Link>


        </div>
      </div>
      <div className="container mt-3">
        <div className="mb-3 mt-3">
          <label htmlFor="title">Title:</label>
          <input
            required
            ref={titleRef}
            type="text"
            defaultValue={isNewProduct ? "" : propsData.title}
            className={`form-control ${submitted && !titleRef.current?.value ? 'is-invalid' : ''}`}
            id="title"
            placeholder={isNewProduct ? "Add title..." : propsData.title}
            name="title"
          />
          <div className="invalid-feedback">Title cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="category">Category:</label>
          <input
            required
            ref={categoryRef}
            type="text"
            defaultValue={isNewProduct ? "" : propsData.category}
            className={`form-control ${submitted && !categoryRef.current?.value ? 'is-invalid' : ''}`}
            id="category"
            placeholder={isNewProduct ? "Add Category..." : propsData.category}
            name="category"
          />
          <div className="invalid-feedback">Category cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="price">Price:</label>
          <input
            ref={priceRef}
            type="text"
            defaultValue={isNewProduct ? "" : propsData.price}
            className={`form-control ${submitted && !priceRef.current?.value ? 'is-invalid' : ''}`}
            id="price"
            placeholder={isNewProduct ? "Add Price..." : propsData.price}
            name="price"
            required
          />
          <div className="invalid-feedback">Price cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="imgurl">Image URL:</label>
          <input ref={imageRef} type="url" defaultValue={isNewProduct ? "" : propsData.image} className="form-control" id="imgurl" placeholder={isNewProduct ? "Add Image URL..." : propsData.image} name="imgurl">
          </input>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="quantity">Quantity:</label>
          <input ref={quantityRef} type="number" defaultValue={isNewProduct ? "" : propsData.quantity} className="form-control" id="quantity" placeholder={isNewProduct ? "Add quantity" : propsData.quantity} name="quantity">
          </input>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="description">Description:</label>
          <textarea ref={descriptionRef} className="form-control" id="description" defaultValue={isNewProduct ? "" : propsData.description} placeholder={isNewProduct ? "Add Description..." : propsData.description} name="description"></textarea>
        </div>

        <button onClick={saveChanges} type="submit" className="btn btn-primary custom-button">{action}</button>
      </div>
    </div>
  )
}

export default ProductForm

