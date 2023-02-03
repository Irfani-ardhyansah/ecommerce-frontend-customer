import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react"

const List = () => {
    const [products, setProducts] = useState([])


useEffect(() => {
    const rows = [];
    for (let i = 0; i < 50; i++) {
        rows.push(i);
    }

    setProducts(rows)
}, [])
    return (

        <div class="dashboard">
            <div class="container">
                <div>
                    <div class="product-title d-flex align-items-center">
                        <h4>Category 1</h4>
                    </div>

                    {
                        (products.length > 0) && products.map((row, key) => {
                            console.log(row)
                            return <>
                                <div class="card product-card me-2 mb-3">
                                    <img src={product_1} class="product-img" />
                                    <div class="product-card-body">
                                        <div class="product-card-description">
                                            <p>Product 1 ini</p>
                                            <div class="productb-qty">
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
                            </>
                        })
                    }
                    {/* <div class="card product-card me-2 mb-3">
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
                </div>
            </div>
        </div>
    )
}

export default List