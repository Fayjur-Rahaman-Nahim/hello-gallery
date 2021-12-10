import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import "./Image.css"
const Image = (props) => {
    const { id, img, category } = props.image;
    const [images, setImages] = useState([])
    const [modalImg, setModalImg] = useState([])
    const handleImg = category => {

        const dataModal = images.filter(image => image.category === category)
        setModalImg(dataModal);
    }
    useEffect(() => {
        fetch("/img.json")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    console.log(modalImg, "modalImg")

    return (
        <>
            <div>
                {/* <button hidden id="modal-btn" type="button" class="btn btn-primary"> */}

                {/* </button> */}
                <div className="col aspect">

                    <div className="card card-div "  >

                        <img src={img} className="card-img-top " onClick={() => handleImg(category)} data-bs-toggle="modal" data-bs-target="#exampleModal" alt="..." style={{ height: "300px", width: "1000" }} />
                    </div>

                </div>
                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content bg-transparent">
                            <div class="modal-header">

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 p-4">
                                {
                                    modalImg.map(data => <Modal
                                        key={data.id}
                                        image={data.img}></Modal>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default Image;