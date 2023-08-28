import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style/footer.css'
const footer = () => {

    return (
        <div id="footer" className="navbar navbar-fixed-bottom">
            Technical Support
            <span>
                <i className="bi bi-telephone-fill"></i>
            </span>
            +1.555.555.555
        </div>

    );
}

export default footer;