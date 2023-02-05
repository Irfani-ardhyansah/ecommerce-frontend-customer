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

    useEffect(() => {
    }, [])

    return <>
        <Navbar />
        <div className="dashboard">
            <div className="container">
                <div className="d-flex product-detail-body">
                    <div className="image">
                        <img src={product_1} className="product-img-detail" />
                    </div>
                    <div className="summary-product">
                        <div className="title">
                            <h3>Summary Product</h3>
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
                            <h2>Rp. {priceSplitter(7000)}</h2>
                            <div className="disc">
                                <span class='badge bg-danger'> 10% </span>                         
                                Rp. {priceSplitter(10000)}
                            </div>
                        </div>
                        <hr/>
                        {/* Jenis nanti disini  */}
                        <div className="description">
                            {/* <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Detail</a>
                                </li>
                            </ul> */}
                            <div className="body">
                                <p>lorem   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>
                        </div>
                    </div>
                    <div className="summary-qty">
                        <div className="card p-3 rounded">
                            <h5>Atur Jumlah dan Catatan</h5>
                            <p>Nama Barang</p>
                            <hr style={{marginTop: 0}}/>  
                            <div className="qty-stock d-flex">
                                <div className="qty-control-detail d-flex">                                        
                                    <button className="btn-minus-detail">
                                        <HiMinus/>
                                    </button>
                                    <input type="number" readOnly className="form-qty-control" style={{width: '2rem', textAlign: 'center'}}/>
                                    <button className="btn-plus-detail">
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
                            <div className="disc">
                                Rp. {priceSplitter(10000)}
                            </div>
                            <div className="sub-total d-flex justify-content-between">
                                <p>Subtotal</p>
                                <h5 className="price">Rp. {priceSplitter(7000)}</h5>
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