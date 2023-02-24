import './Checkout.css'
import Navbar from '../Navbar'
import { DiReact } from "react-icons/di";
import product_1 from '../../img/Product-1.png'
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {priceSplitter} from '../../Helper'
import axios from 'axios'

const Checkout = () => {
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'application/json' }
    }
    const { state }          = useLocation()
    const [dataProps]        = useState(state)
    let dataCheckout = {
        'carts': [{        
            id: null,
            qty: null,
            price: null,
            totalPrice: null,
            isDiscount: null}],
        'payment': {
            'method':  null,
            'total_price': null
        }
    }
    const [checkout, setCheckout] = useState(dataCheckout)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    let navigate = useNavigate()

    console.log(dataLogin.user)

    useEffect(() => {
        let dataCheckout = {
            carts: dataProps.cartCheckout.carts.map(({id, qty, price, total_price, is_discount}) => ({id, qty, price, total_price, is_discount})),
            payment: {
                'method':  paymentMethod,
                'total_price': dataProps.cartCheckout.payment.total_price
            }
        }
        setCheckout(dataCheckout)
    }, [paymentMethod])

    const setPayment = (e) => {
        setPaymentMethod(e.target.value)
    }

    const order = async () => {
        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/order`,
            data: checkout,
            headers: config.headers,
        })
        

        let response = result.data
        if(response.status == 200) {
            navigate('/dashboard')
        } else {
            console.log(result)
        }
    }

    console.log(dataProps.cartCheckout.carts.length)

    return (
        <>
            <Navbar checkout={true}/>
            <div className="checkout">
                <div className="container">
                    <h4>Checkout</h4>

                    <div className="address">
                        <b>Alamat Pengiriman</b>
                        <hr />
                        <p><b>{dataLogin.user.detail.name}</b> ( Rumah )</p>
                        <p>{dataLogin.user.detail.phone}</p>
                        <p>{dataLogin.user.detail.address}, 63161</p>
                    </div>
                    <hr />
                    <div className="product-section row">
                        <div className="seller col-lg-12">
                            <div className="icon-name d-flex">
                                <DiReact />
                                <b className="ms-1">TokoDing</b>
                            </div>
                            <p>Indonesia</p>
                        </div>
                        <div className="list col-lg-8">
                            {
                                (dataProps.cartCheckout.carts.length > 0) && dataProps.cartCheckout.carts.map((row, key) => {
                                    return <>
                                        <div className="product d-flex">
                                            <img src={product_1} />
                                            <div className="description d-flex flex-column ms-2">
                                                <p>{row.product.name}</p>
                                                <p>{row.qty} Barang (100 gr)</p>
                                                <p><b>Rp. {priceSplitter(row.total_price)}</b></p>
                                            </div>
                                        </div>
                                    </>
                                }) 
                            }
                        </div>
                        <div className="payment col-lg-4">
                            <label>Pilih Pembayaran</label>
                            <select class="form-control" onChange={setPayment}>
                                <option value="cod">Cod</option>
                                <option value="transfer">Bank Transfer</option>
                            </select> 
                        </div>
                    </div>
                </div>
                <div className="container divider">
                </div>
                <div className="container card-price">
                    <div className="card p-3 mb-5 bg-white rounded">
                        <h5>Ringkasan Belanja</h5>
                        <div className="d-flex justify-content-between">
                            <p>Total harga ({dataProps.cartCheckout.carts.length} Barang)</p>
                            <p>Rp. {priceSplitter(dataProps.cartCheckout.payment.total_price)}</p>
                        </div>  
                        <hr style={{marginTop: '0'}} />
                        <button onClick={order} className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout