import './Checkout.css'
import Navbar from '../Navbar'
import { DiReact } from "react-icons/di";
import product_1 from '../../img/Product-1.png'
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {priceSplitter} from '../../Helper'

const Checkout = () => {
    const { state }             = useLocation()
    const [dataProps]        = useState(state)

    useEffect(() => {
        console.log(dataProps.cartCheckout)
    }, [])
    return (
        <>
            <Navbar checkout={true}/>
            <div className="checkout">
                <div className="container">
                    <h4>Checkout</h4>

                    <div className="address">
                        <b>Alamat Pengiriman</b>
                        <hr />
                        <p><b>Irfani Ardhyansah</b> ( Rumah )</p>
                        <p>6281237124</p>
                        <p>Ds bukur Rt1 Rw1 Jiwan, Kab. Madiun, 63161</p>
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
                            <div className="product d-flex">
                                <img src={product_1} />
                                <div className="description d-flex flex-column ms-2">
                                    <p>Pelindung Layar Tempered Glass Samsung Galaxy Z Flip 3</p>
                                    <p>1 Barang (100 gr)</p>
                                    <p><b>Rp. 35.000</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="payment col-lg-4">
                            <label>Pilih Pembayaran</label>
                            <select class="form-control">
                                <option value="male">Cod</option>
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
                            <p>Total harga ({dataProps.cartCheckout.cart.length} Barang)</p>
                            <p>Rp. {priceSplitter(dataProps.cartCheckout.payment.total_price)}</p>
                        </div>  
                        <hr style={{marginTop: '0'}} />
                        <button className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout