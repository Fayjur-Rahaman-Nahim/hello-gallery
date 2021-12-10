import React, { useState, useEffect } from 'react';
import Image from '../Image/Image';
import "./Images.css"
const Images = () => {
    const [images, setImages] = useState([]);


    useEffect(() => {
        fetch("/img.json")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    console.log(images, "images all object")
    return (
        <div>
            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-1 ">
                {
                    images?.slice(0, 8)?.map(image => <Image
                        key={image.id}
                        image={image}></Image>)
                }
            </div>
        </div>
    );
};

export default Images;