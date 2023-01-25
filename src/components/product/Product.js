import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react"
import axios from 'axios'

const Product = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
    }
    const [product, setProduct]             = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/product`, config)

        if(result.data.status == 200) {
            setProduct(result.data.data)
        }
    }

    const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));

    return (
        <div style={{marginBottom: '3vh'}}>
            <hr class="product-divider-top"></hr>
            
            <div class="product-title d-flex align-items-center">
                <h4>Category 1</h4>
                <a href="#" class="product-title-link-all">Lihat semua</a>
            </div>

            <Slider {...settings}>
                {
                    (product.length > 0) && product.map((row, key) => {
                        return <>
                            <div class="card product-card">
                                <img class="product-img" src={
                                                        row.image 
                                                            ? `${process.env.REACT_APP_DOMAIN}${row.image}?${new Date().getTime()}` 
                                                            : `${process.env.REACT_APP_DOMAIN}/products/no_image.jpg?${new Date().getTime()}`
                                                        } />
                                <div class="product-card-body">
                                    <div class="product-card-description">
                                        <p>{row.name}</p>
                                        <div class="product-qty">
                                            {row.stock}
                                        </div>
                                    </div>
                                    <div class="product-card-price d-flex justify-content-between align-items-center">
                                        <h5>
                                            {
                                                row.discount == null 
                                                ? `Rp. ${priceSplitter(row.price)}`
                                                : <span style={{textDecoration:'line-through'}}>Rp. {priceSplitter(row.price)}</span>
                                            }
                                        </h5>
                                        {row.discount && (
                                            <h6><span style={{color: 'red'}}>Rp. {priceSplitter(row.discount.price)}</span></h6>
                                        )}
                                    </div>
                                </div>
                                <div class="product-card-footer">
                                    <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                                        <MdShoppingCart />
                                    </button>
                                </div>
                            </div>
                        </>
                    })
                }
                {/* <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price d-flex justify-content-between align-items-center">
                            <h5><span style={{textDecoration:'line-through'}}>Rp. 100.000 </span></h5>
                            <h6><span style={{color: 'red'}}>Rp. 100.000</span></h6>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div>
                <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price">
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div>
                <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price">
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div>
                <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price">
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div>
                <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price">
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div>
                <div class="card product-card">
                    <img src={product_1} class="product-img" />
                    <div class="product-card-body">
                        <div class="product-card-description">
                            <p>Product 1 ini</p>
                            <div class="product-qty">
                                50
                            </div>
                        </div>
                        <div class="product-card-price">
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <button class="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                            <MdShoppingCart />
                        </button>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default Product