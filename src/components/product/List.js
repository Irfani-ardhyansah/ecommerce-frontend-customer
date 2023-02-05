import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import './List.css'
import Navbar from '../Navbar'

const List = () => {
    const [products, setProducts] = useState(Array.from({length: 10}))
    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        if(products.length < 30) {
            // Make Api Call
            setTimeout(() => {
                setProducts(products.concat(Array.from({length: 10})))
            }, 1000)
        } else {
            setHasMore(false)
        }
    }


    return (<>
      <Navbar />
        <div className="dashboard">
            <div className="container">
                <div>
                    <div className="product-title d-flex align-items-center">
                        <h4>Category 1</h4>
                    </div>
                    <InfiniteScroll 
                        dataLength={products.length} 
                        next={fetchMoreData} 
                        hasMore={hasMore}
                        loader={
                                <div className="d-flex align-items-center justify-content-center mt-2 mb-2">
                                    <div className="loader"></div>
                                </div>
                                }
                        endMessage={
                                    <div className="d-flex align-items-center justify-content-center mt-2 mb-2">
                                        <p>You are all set!</p>
                                    </div>
                                    }
                    >
                    {
                        (products.length > 0) && products.map((row, key) => {
                            console.log(row)
                            return <>
                                <div className="card product-card me-2 mb-3">
                                    <img src={product_1} className="product-img" />
                                    <div className="product-card-body">
                                        <div className="product-card-description">
                                            <p>Product 1 ini</p>
                                            <div className="productb-qty">
                                                50
                                            </div>
                                        </div>
                                        <div className="product-card-price">
                                            <h5>Rp. 100.000</h5>
                                        </div>
                                    </div>
                                    <div className="product-card-footer">
                                        <button className="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                                            <MdShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </>
                        })
                    }
                    </InfiniteScroll>
                    {/* <div className="card product-card me-2 mb-3">
                        <img src={product_1} className="product-img" />
                        <div className="product-card-body">
                            <div className="product-card-description">
                                <p>Product 1 ini</p>
                                <div className="product-qty">
                                    50
                                </div>
                            </div>
                            <div className="product-card-price">
                                <h5>Rp. 100.000</h5>
                            </div>
                        </div>
                        <div className="product-card-footer">
                            <button className="btn btn-secondary btn-sm btn-cart" style={{width: '100%'}}>
                                <MdShoppingCart />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
    )
}

export default List