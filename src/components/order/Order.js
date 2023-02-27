import './Order.css'
import Navbar from '../Navbar'
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import product_1 from '../../img/Product-1.png'

const Order = () => {
    return (
        <>
            <Navbar />
            <div className="order">
                <div className="container"> 
                    <div class="orderHeader">
                        <h2>Transaksi</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div className="card orderCard">
                            <div className="orderBody">
                                <div className="orderFilter d-flex">
                                    <div class="form-group search">
                                        <input type="text" className="form-control" placeholder="Search Transaction..." />
                                    </div>
                                    <div class="form-group category">
                                        <select class="form-control">
                                            <option selected>Select Category</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group date">
                                        <input type="date" className="form-control" placeholder="Search By Date..." />
                                    </div>
                                </div>
                                <div className="orderStatus d-flex align-items-center">
                                    <b>Status</b>
                                    <div className="statusBtn card active">
                                        Semua
                                    </div>
                                    <div className="statusBtn card">
                                        Proses
                                    </div>
                                    <div className="statusBtn card">
                                        Dikirim
                                    </div>
                                    <div className="statusBtn card">
                                        Selesai
                                    </div>
                                    <div className="statusBtn card">
                                        Batal
                                    </div>
                                    <div className="reset">
                                        Reset Filter
                                    </div>
                                </div>
                                <div className="orderItem card">
                                    <div className="header d-flex">
                                        <b>24 Feb 2023</b>
                                        <div className="status card"> 
                                            Selesai
                                        </div>
                                        <p className="invoice">215655202302171676645815</p>
                                    </div>
                                    <div className="body d-flex align-items-center justify-content-between">
                                        <div className="product d-flex"> 
                                            <img src={product_1} />
                                            <div className="name">
                                                <b>Product 1</b>
                                                <p>1 barang x Rp. 200.000</p>
                                            </div>
                                        </div>
                                        <div className="price d-flex flex-column">
                                            <div>Total Belanja</div>
                                            <b>Rp. 200.000</b>
                                        </div>
                                    </div>
                                    <div className="footer d-flex justify-content-end align-items-center">
                                        <div className="detail">
                                            Lihat Detail Transaksi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order