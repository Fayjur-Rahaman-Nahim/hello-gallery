import React from 'react';

const Modal = ({ image }) => {
    console.log(image)
    return (
        <div className="col modal-div ">
            <img src={image} alt="" className="img-fluid" />
        </div>
    );
};

export default Modal;
