import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import './List.css'
import Navbar from '../Navbar'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import {priceSplitter} from '../../Helper'

const List = () => {
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
    }
    const { state }     = useLocation()
    const [category]     = useState(state)
    // const [products, setProducts] = useState(Array.from({length: 10}))
    const [products, setProducts] = useState({data: []})
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/product?category_id=${category.data.id}`, config)
        if(result.data.status == 200) {
            setProducts(result.data.data)
        }
    }

    const nextPageProduct = async (nextPageUrl) => {
        try {
            const result = await axios.get(`${nextPageUrl}`, config)
            if(result.data.status == 200) {
                if(products.data.length > 0) {
                    updateStateProduct(result.data.data)
                }
                return result.data.data
            }
        } catch(err) {
            console.log(err)
        }
    }

    const updateStateProduct = (result) => {
        setProducts({
            ...products,
            data: [...products.data, ...result.data ],
            current_page: result.current_page,
            links: result.links,
            next_page_url: result.next_page_url
        })
    }

    const fetchMoreData = () => {
        if(products.data.length > 0) {
            if(products.data.length < products.total) {
                // Make Api Call
                setTimeout(() => {
                    // setProducts(products.data.concat(Array.from({length: 10})))
                    nextPageProduct(products.next_page_url)
                    .then(result => {
                        console.log('result')
                        console.log(result)
                    })   
                }, 1000)
            } else {
                setHasMore(false)
            }
        }
    }

    console.log(products)

    return (<>
      <Navbar />
        <div className="dashboard">
            <div className="container">
                <div>
                    <div className="product-title d-flex align-items-center">
                        <h4>{category.data.name}</h4>
                    </div>
                    {/* coba pakai ul li https://codepen.io/mahmudulhrabby/pen/GGqdvr */}
                    {
                        products.data.length > 0 &&
                            <InfiniteScroll 
                            dataLength={products.data.length} 
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
                                (products.data.length > 0) && products.data.map((row, key) => {
                                    return <>
                                        <div className="card product-card me-2 mb-3">
                                                    <Link to="/product/detail" state={row}>
                                                        <img class="product-img" src={
                                                            row.image 
                                                                ? `${process.env.REACT_APP_DOMAIN}${row.image}?${new Date().getTime()}` 
                                                                : `${process.env.REACT_APP_DOMAIN}/products/no_image.jpg?${new Date().getTime()}`
                                                            } />
                                                    </Link>
                                            <div className="product-card-body">
                                                <div className="product-card-description">
                                                    <p>{row.name}</p>
                                                    <div className="productb-qty">
                                                        {row.stock}
                                                    </div>
                                                </div>
                                                <div className="product-card-price d-flex justify-content-between align-items-center">
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
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default List