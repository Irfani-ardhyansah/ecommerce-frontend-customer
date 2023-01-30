import './Cart.css'
import Navbar from '../Navbar'
import product_1 from '../../img/5.jpg'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import {priceSplitter} from '../../Helper'

const Cart = () => {
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
    }
    const [cart, setCart]   = useState({})
    
    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/cart`, config)
        if(result.data.status == 200) {
            setCart(result.data.data)
        }
    }


    const handleIncrementQty = async(qty) => {
        // setQty(qty + 1)
        // setCounter(1)
        console.log('increment')
        console.log(qty)
    }

    const handleDecrementQty = async(qty) => {
        // if(qty > 0) {
        //     setQty(qty - 1)
        //     setCounter(1)
        // }

        console.log('decrement')
        console.log(qty)
    }

    return (
        <>
            <Navbar />

            <div className="cart">
                <div className="container">
                    <h5>Keranjang</h5>
                    <div className="form-cart">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label className="label-all">Pilih Semua</label>
                    </div>
                    <hr />

                    {/* product start */}
                    {
                        Object.keys(cart).length > 0 &&
                            (cart.data.length > 0) && cart.data.map((row, key) => {
                                return <>
                                    <div className="form-cart d-flex">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <img className="product-img" src={
                                                        row.product.image 
                                                            ? `${process.env.REACT_APP_DOMAIN}${row.product.image}?${new Date().getTime()}` 
                                                            : `${process.env.REACT_APP_DOMAIN}/products/no_image.jpg?${new Date().getTime()}`
                                                        } />
                                        <div className="d-flex flex-column ms-2">
                                            <p>{row.product.name}
                                                {(row.is_discount === 1) && <span className="badge bg-danger ms-2">Disc</span>}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <a href="#">
                                                    <MdOutlineRemoveShoppingCart />
                                                </a>
                                                <div className="qty-control d-flex justify-content-end">
                                                    <a onClick={() => handleDecrementQty(row.qty)}>
                                                        <AiOutlineMinusCircle className="btn-minus" />
                                                    </a>
                                                    <input type="number" className="form-qty-control" style={{width: '5%'}} value={row.qty}/>
                                                    <a onClick={() => handleIncrementQty(row.qty)}>
                                                        <AiOutlinePlusCircle className="btn-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                            <h5>Rp. {priceSplitter(row.total_price)}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            })
                    }
                </div>
                <div className="container">
                </div>
                <div className="container card-price">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                        <h5>Ringkasan Belanja</h5>
                        <div className="d-flex justify-content-between">
                            <p>Total harga (0 Barang)</p>
                            <p>Rp0</p>
                        </div>  
                        <hr style={{marginTop: '0'}} />
                        <button className="btn btn-secondary*">Beli</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart