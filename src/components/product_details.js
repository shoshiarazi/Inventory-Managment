import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style/product_details.css'
import './style/shared_page.css'
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Product_details = () => {
    const location = useLocation();
    const propsData = location.state;
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div id="product_details_page" className="pageComponent">
            <div className="header2">
                <div className="titlePage">
                    Product page
                </div>
                <div className="icon-grid">
                    <i className="bi bi-arrow-left leftIcon" onClick={goBack}></i>
                    <Link to="/update_product" state={propsData}>
                        <i className="hoverIcon  bi bi-pencil-fill    " ></i>
                    </Link >
                    <Link to="/">
                        <i className="custom-link hoverIcon bi bi-house-door-fill " ></i>
                    </Link>
                </div>
            </div>


            <div className="card mb-3  container" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={propsData.image} className="card-img" alt={propsData.description} />
                    </div>
                    <div className="col-md-8 ProductData">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">{propsData.title}</p>
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">{propsData.description}</p>
                            <h5 className="card-title">Category</h5>
                            <p className="card-text">{propsData.category}</p>
                            <h5 className="card-title">price</h5>
                            <p className="card-text">{propsData.price}</p>
                            <h5 className="card-title">Quantity</h5>
                            <p className="card-text">{propsData.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_details;