import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style/form.css'
import data from '../dataForProject.js';
import { Link } from "react-router-dom";

function ProductForm({ }) {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();
  const [phTitle, setPhTitle] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvTitle, setDvTitle] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);
  const [phCategory, setPhCategory] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvCategory, setDvCategory] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);
  const [phPrice, setPhPrice] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvPrice, setDvPrice] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);
  const [phImage, setPhImage] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvImage, setDvImage] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);
  const [phQuantity, setPhQuantity] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvQuantity, setDvQuantity] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);
  const [phDescription, setPhDescription] = useState(Object.keys(product).length === 0 ? "Add Title" : product.title);
  const [dvDescription, setDvDescription] = useState(Object.keys(product).length === 0 ? "Add DEFAULT VALUE" : product.title);

  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const quantityRef = useRef();
  const descriptionRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [title, action, isNewProduct] = Object.keys(product).length === 0 ? ["Add New Product", "ADD", true] : ["Edit Product", "EDIT", false]

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setPhTitle(Object.keys(product).length === 0 ? "Add Title..." : product.title)// titleRef="Add title...";
    Object.keys(product).length === 0 ? titleRef.current.value = "" : titleRef.current.value = product.title;
    setPhCategory(Object.keys(product).length === 0 ? "Add Category..." : product.category)// titleRef="Add title...";
    Object.keys(product).length === 0 ? categoryRef.current.value = "" : categoryRef.current.value = product.category;
    setPhPrice(Object.keys(product).length === 0 ? "Add Price..." : product.price)// titleRef="Add title...";
    Object.keys(product).length === 0 ? priceRef.current.value = "" : priceRef.current.value = product.price;
    setPhImage(Object.keys(product).length === 0 ? "Add Image URL..." : product.image)// titleRef="Add title...";
    Object.keys(product).length === 0 ? imageRef.current.value = "" : imageRef.current.value = product.image;
    setPhQuantity(Object.keys(product).length === 0 ? "Add quantity" : product.quantity)// titleRef="Add title...";
    Object.keys(product).length === 0 ? quantityRef.current.value = "" : quantityRef.current.value = product.quantity;
    setPhDescription(Object.keys(product).length === 0 ? "Add Description..." : product.description)// titleRef="Add title...";
    Object.keys(product).length === 0 ? descriptionRef.current.value = "" : descriptionRef.current.value = product.description;

    console.log('filterData has changed:', product);
  }, [product, title]);
  const saveChanges = () => {
    if (titleRef.current.value && categoryRef.current.value && priceRef.current.value) {
      const newProduct = {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        price: priceRef.current.value,
        image: imageRef.current.value,
        quantity: quantityRef.current.value,
        description: descriptionRef.current.value,
      };
      console.log(newProduct);
      const index = data.findIndex(obj => obj.id === product.id);
      if (index !== -1) {
        data[index] = { ...data[index], ...newProduct };
      }
      else {
        data.push({ ...newProduct, ...{ id: data.length + 1, rating: { rate: 0, count: 0 } } })
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
          <Link to="/product_details" state={product}>
            <i className={`hoverIcon  bi bi-search  searchIcon ${action === "ADD" ? `notDisplay` : ``}`}   ></i>
          </Link >
          <Link to="/">
            <i className={`custom-link hoverIcon bi bi-house-door-fill  ${action === "ADD" ? `notDisplay` : ``}`} ></i>
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
            defaultValue={dvTitle}
            className={`form-control ${submitted && !titleRef.current?.value ? 'is-invalid' : ''}`}
            id="title"
            placeholder={phTitle}
            name="title"
          // value={vTitle}
          />
          <div className="invalid-feedback">Title cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="category">Category:</label>
          <input
            required
            ref={categoryRef}
            type="text"
            defaultValue={isNewProduct ? "" : product.category}
            className={`form-control ${submitted && !categoryRef.current?.value ? 'is-invalid' : ''}`}
            id="category"
            placeholder={isNewProduct ? "Add Category..." : product.category}
            name="category"
          />
          <div className="invalid-feedback">Category cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="price">Price:</label>
          <input
            ref={priceRef}
            type="text"
            defaultValue={isNewProduct ? "" : product.price}
            className={`form-control ${submitted && !priceRef.current?.value ? 'is-invalid' : ''}`}
            id="price"
            placeholder={isNewProduct ? "Add Price..." : product.price}
            name="price"
            required
          />
          <div className="invalid-feedback">Price cannot be empty.</div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="imgurl">Image URL:</label>
          <input ref={imageRef} type="url" defaultValue={isNewProduct ? "" : product.image} className="form-control" id="imgurl" placeholder={isNewProduct ? "Add Image URL..." : product.image} name="imgurl">
          </input>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="quantity">Quantity:</label>
          <input ref={quantityRef} type="number" defaultValue={isNewProduct ? "" : product.quantity} className="form-control" id="quantity" placeholder={isNewProduct ? "Add quantity" : product.quantity} name="quantity">
          </input>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="description">Description:</label>
          <textarea ref={descriptionRef} className="form-control" id="description" defaultValue={isNewProduct ? "" : product.description} placeholder={isNewProduct ? "Add Description..." : product.description} name="description"></textarea>
        </div>

        <button onClick={saveChanges} type="submit" className="btn btn-primary custom-button">{action}</button>
      </div>
    </div>
  )
}

export default ProductForm

