import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style/site_header.css'
const SiteHeader = () => {

    const product = {
    }
    return (
        <div id="header">
            <div id="iconsDiv">
                <Link to="/new_product" state={product} className="custom-link">
                    <i className="bi bi-plus-circle"></i>
                </Link>
                <Link to="/" className="custom-link">
                    <i className="bi bi-house-door-fill" ></i>
                </Link>
            </div>
            <div id="titleDiv">
                Inventory Managment</div>
        </div>
    );
}

export default SiteHeader;