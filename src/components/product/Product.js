import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react"
import {priceSplitter} from '../../Helper'
import axios from 'axios'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
    
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
    const [inputQty, setInputQty]           = useState(null)
    const [qty, setQty]                     = useState(0)
    const [count, setCount]                 = useState(0)
    const refOne                            = useRef(null)
    const [productId, setProductId]         = useState(null)
    
    useEffect(() => {
        getProduct()
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const handleClickOutside = async (e) => {
        let qtySend         = qty
        let productIdSend   = productId
        if(!refOne.current.contains(e.target)) {
            // clicked outside
            setInputQty(!inputQty)
            console.log(qtySend)
            console.log(productIdSend)
        } else {
            // clicked inside
        }
    }

    const getProduct = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/product`, config)

        if(result.data.status == 200) {
            setProduct(result.data.data)
        }
    }

    const handleQty = async (key, data) => {
        setInputQty(key)
        const cartQty = data.carts[0].qty
        setQty(cartQty)
        const id = data.id
        setProductId(id)
    }

    const handleKeyDownQty = async(event) => {
        let value = event.target.value
        setQty(value)
    }

    const handleIncrementQty = async() => {
        setQty(qty + 1)
    }

    const handleDecrementQty = async() => {
        if(qty > 0) {
            setQty(qty - 1)
        }
    }

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
                                    {
                                        (inputQty !== key) 
                                        ? 
                                        <button class="btn btn-secondary btn-sm btn-cart" onClick={() => handleQty(key, row)} style={{width: '100%'}}>
                                            <MdShoppingCart />
                                            {(row.carts.length > 0) && row.carts[0].qty}
                                        </button> 
                                        : 
                                        <div className="qty-control d-flex justify-content-center" ref={refOne}>                                        
                                            <a onClick={handleDecrementQty}>
                                                <AiOutlineMinusCircle className="btn-minus" />
                                            </a>
                                            <input type="number" readOnly className="form-qty-control" style={{width: '2rem', textAlign: 'center'}} value={qty} onChange={(e) => handleKeyDownQty(e)}/>
                                            <a onClick={handleIncrementQty}>
                                                <AiOutlinePlusCircle className="btn-plus"/>
                                            </a>
                                        </div> 
                                    }
                                </div>
                            </div>
                        </>
                    })
                }
            </Slider>
        </div>
    )
}

export default Product