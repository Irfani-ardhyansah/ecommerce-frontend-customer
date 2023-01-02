import './Cart.css'
import Navbar from '../Navbar'
import product_1 from '../../img/5.jpg'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Cart = () => {
    return (
        <>
            <Navbar />

            <div class="cart">
                <div class="container">
                    <h5>Keranjang</h5>
                    <div class="form-cart">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label class="label-all">Pilih Semua</label>
                    </div>
                    <hr />

                    {/* product start */}
                    <div class="form-cart d-flex">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <img src={product_1} class="product-img" />
                        <div class="d-flex flex-column ms-2">
                            <p>Product 1 ini</p>
                            <div class="d-flex justify-content-between">
                                <a href="#">
                                    <MdOutlineRemoveShoppingCart />
                                </a>
                                <div class="qty-control d-flex justify-content-end">
                                    <a href="#">
                                        <AiOutlineMinusCircle />
                                    </a>
                                    <input type="number" class="form-qty-control" style={{width: '5%'}}/>
                                    <a href="#">
                                        <AiOutlinePlusCircle />
                                    </a>
                                </div>
                            </div>
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <hr />

                    <div class="form-cart d-flex">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <img src={product_1} class="product-img" />
                        <div class="d-flex flex-column ms-2">
                            <p>Product 1 ini</p>
                            <div class="d-flex justify-content-between">
                                <a href="#">
                                    <MdOutlineRemoveShoppingCart />
                                </a>
                                <div class="qty-control d-flex justify-content-end">
                                    <a href="#">
                                        <AiOutlineMinusCircle />
                                    </a>
                                    <input type="number" class="form-qty-control" style={{width: '5%'}}/>
                                    <a href="#">
                                        <AiOutlinePlusCircle />
                                    </a>
                                </div>
                            </div>
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <hr />

                    <div class="form-cart d-flex">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <img src={product_1} class="product-img" />
                        <div class="d-flex flex-column ms-2">
                            <p>Product 1 ini</p>
                            <div class="d-flex justify-content-between">
                                <a href="#">
                                    <MdOutlineRemoveShoppingCart />
                                </a>
                                <div class="qty-control d-flex justify-content-end">
                                    <a href="#">
                                        <AiOutlineMinusCircle />
                                    </a>
                                    <input type="number" class="form-qty-control" style={{width: '5%'}}/>
                                    <a href="#">
                                        <AiOutlinePlusCircle />
                                    </a>
                                </div>
                            </div>
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <hr />

                    <div class="form-cart d-flex">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <img src={product_1} class="product-img" />
                        <div class="d-flex flex-column ms-2">
                            <p>Product 1 ini</p>
                            <div class="d-flex justify-content-between">
                                <a href="#">
                                    <MdOutlineRemoveShoppingCart />
                                </a>
                                <div class="qty-control d-flex justify-content-end">
                                    <a href="#">
                                        <AiOutlineMinusCircle />
                                    </a>
                                    <input type="number" class="form-qty-control" style={{width: '5%'}}/>
                                    <a href="#">
                                        <AiOutlinePlusCircle />
                                    </a>
                                </div>
                            </div>
                            <h5>Rp. 100.000</h5>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container card-price">
                    <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                        <h5>Ringkasan Belanja</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart