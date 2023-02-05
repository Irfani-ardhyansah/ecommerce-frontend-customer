import Navbar from '../Navbar'
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Detail.css'
import product_1 from '../../img/5.jpg'
import { HiMinus, HiPlus, HiPencil, HiStar } from "react-icons/hi2"
import {priceSplitter} from '../../Helper'

const Detail = () => {
    const { state }     = useLocation()
    const [product]     = useState(state)
    const [statusNotes, setStatusNotes] = useState(false)
    const [qty, setQty] = useState(1)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        if(product.discount != null) {
            const total = product.discount.price * qty
            setSubTotal(total)
        } else {
            const total = product.price * qty
            setSubTotal(total)
        }
    }, [qty])

    const handleIncrementQty = async() => {
        setQty(qty + 1)
    }

    const handleDecrementQty = async() => {
        if(qty > 0) {
            setQty(qty - 1)
        }
    }

    return <>
        <Navbar />
        <div className="dashboard">
            <div className="container">
                <div className="d-flex product-detail-body">
                    <div className="image">
                        <img className="product-img-detail"  src={
                                                            product.image 
                                                                ? `${process.env.REACT_APP_DOMAIN}${product.image}` 
                                                                : `${process.env.REACT_APP_DOMAIN}/products/no_image.jpg`
                                                            } />
                    </div>
                    <div className="summary-product">
                        <div className="title">
                            <h3>{product.name}</h3>
                            <div className="sell-rating d-flex">
                                <div className="sell">
                                    Terjual <p>10+</p>
                                </div>
                                <div className="divider">
                                    |
                                </div>
                                <div className="rating">
                                    <HiStar />5 <p>(10 Rating)</p>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            {
                                product.discount == null 
                                ? <h2>Rp. {priceSplitter(product.price)}</h2>
                                : <h2>Rp. {priceSplitter(product.discount.price)}</h2>
                            }
                            {
                                product.discount != null &&
                                <div className="disc">
                                    <span class='badge bg-danger'> 10% </span>                         
                                    Rp. {priceSplitter(product.price)}
                                </div>
                            }
                        </div>
                        <hr/>
                        {/* Jenis nanti disini  */}
                        <div className="description">
                            <div className="body">
                                {product.description}
                            </div>
                        </div>
                    </div>
                    <div className="summary-qty">
                        <div className="card p-3 rounded">
                            <h5>Atur Jumlah dan Catatan</h5>
                            <div className="qty-stock d-flex">
                                <div className="qty-control-detail d-flex">                                        
                                    <button className="btn-minus-detail" disabled={qty == 1} onClick={handleDecrementQty} >
                                        <HiMinus/>
                                    </button>
                                    <input type="number" readOnly className="form-qty-control" value={qty} />
                                    <button className="btn-plus-detail" onClick={handleIncrementQty}>
                                        <HiPlus/>
                                    </button>
                                </div> 
                                <div className="stock-detail">
                                    <p>Stock: <b>20</b></p>
                                </div>
                            </div>
                            <div className="notes mt-1">
                            {
                                !statusNotes 
                                ?
                                <a onClick={() => {
                                                    setStatusNotes(!statusNotes)
                                                }}>
                                    <HiPencil /> Tambah Catatan
                                </a>
                                : <>
                                <input className="form-control mb-1" placeholder='Contoh: Size M, Warna Abu'></input>
                                <a onClick={() => {
                                            setStatusNotes(!statusNotes)
                                        }}>
                                    Batalkan Catatan
                                </a>
                                </>
                                }
                            </div>
                            {
                                product.discount != null &&
                                <div className="disc">
                                    Rp. {priceSplitter(product.price)}
                                </div>
                            }
                            <div className="sub-total d-flex justify-content-between">
                                <p>Subtotal</p>
                                <h5 className="price">Rp. {priceSplitter(subTotal)}</h5>
                            </div>
                            <button className="btn btn-secondary" >Beli</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Detail