import React from 'react'

const Pcard = (props) => {

    let starArray = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(props.rate)) {
            starArray.push(<i className="ri-star-s-fill text-warning"></i>);
        }
        else{
            starArray.push(<i className="ri-star-half-s-line text-warning"></i>);
        }

    }
    console.log(starArray);
    return (
        <>
            <div className="product-card border px-3">
                <div className="pcard-image py-4 d-flex justify-content-center">
                    <img src={props.image} alt="product-image" className='img-fluid' />
                </div>
                <p className='price-title text-center'>{props.title}</p>
                <div className="title-price-ratings d-flex justify-content-between gap-3">
                    <div className="price">
                        <h4>${props.price}</h4>
                    </div>
                    <div className="price-rating">
                        <figure>{starArray}</figure>
                    </div>
                </div>
                <p className='text-center'>{props.count} left</p>
            </div>
        </>
    )
}

export default Pcard
