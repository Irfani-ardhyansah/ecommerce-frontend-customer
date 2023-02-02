import './Cart.css'
import Navbar from '../Navbar'
import product_1 from '../../img/5.jpg'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import {priceSplitter} from '../../Helper'
import {useDispatch} from 'react-redux'
import {increment, decrement} from '../../actions'

const Cart = () => {
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
    }
    const dispatch                          = useDispatch()
    const [cart, setCart]   = useState({})
    const [carts, setCarts] = useState([])
    const [counter, setCounter]             = useState(null)
    const [reload, setReload]               = useState(false)
    const [checkQty, setCheckQty]           = useState(0)
    const [productId, setProductId]         = useState(null)
    const [cartId, setCartId]               = useState(null)
    const [selected, setSelected]           = useState([])
    const [summary, setSummary]             = useState({
        qty: 0, total_price: 0
    })  

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        if(Object.keys(cart).length > 0 && cart.data.length > 0) {
            let data = cart.data.map((o, item) => ({ ...o, selected: false}))
            setCarts([...data])
        }
    }, [cart])

    useEffect(() => {
        const timer =
        counter >= 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer)
    }, [carts])


    useEffect(() => {
        if(counter == 0) {
            if(checkQty != 0) {
                sendApiStore()
            } else {
                sendApiDelete()
            }
        }
    }, [counter])

    useEffect(() => {
        getCart()
    }, [reload])


    useEffect(() => {
        let summaryTotalPrice = selected.reduce((prev, current) => {
            return prev + +current.total_price
        }, 0);
        let summaryQty = selected.length
        setSummary({qty: summaryQty, total_price: summaryTotalPrice})
    }, [selected])

    const sendApiDelete = async (id = null) => {
        let cartIdDelete = id ? id : cartId
        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/cart/${cartIdDelete}`,
            params: {'_method': 'DELETE'}  ,
            headers: config.headers,
        })

        dispatch(decrement(1))
        checkReload(result)
    }

    const sendApiStore = async () => {
        const formData = new FormData()   
        formData.append("product_id", productId)
        formData.append("qty", checkQty)
            
        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/cart`,
            data: formData,
            headers: config.headers,
        })

        checkReload(result)
    }

    const getCart = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/cart`, config)
        if(result.data.status == 200) {
            setCart(result.data.data)
        }
    }

    const handleIncrementQty = async(value, id) => {
        let qty = value.qty
        qty += 1
        setCheckQty(qty)
        setProductId(value.product_id)
        setCartId(value.id)
        setCounter(1)
        carts.length > 0 &&
            setCarts((cart) =>
                cart?.map((list, index) =>
                    index === id ? { ...list, qty: qty } : list
                )
            );
    }

    const handleDecrementQty = async(value, id) => {
        let qty = value.qty
        if(qty > 0) {
            qty -= 1
            setCheckQty(qty)
            setProductId(value.product_id)
            setCartId(value.id)
            setCounter(1)
            carts.length > 0 &&
                setCarts((cart) =>
                    cart?.map((list, index) =>
                        index === id ? { ...list, qty: qty } : list
                    )
                );
        }
    }

    const checkReload = (result) => {
        if(result.data.status == 200) {
            setReload(!reload)
        } else {
            console.log(result)
        }
    }

    const handleChecked = async(event, item) => {
        if (event.target.checked) {
            setCartsChecked(item, true)

            let data = {id: item.id, total_price: item.total_price}
            setSelected([...selected, data])
        } else {
            setCartsChecked(item, false)

            setSelected((prev) =>
                prev.filter((currItem) => currItem.id !== item.id)
            )
        }
    }

    const handleCheckedAll = async (event) => {
        if (event.target.checked) {
            let data = cart.data.map((o, item) => ({ ...o, selected: true}))
            setCarts([...data])

            let summaryTotalPrice = cart.data.reduce((prev, current) => {
                return prev + +current.total_price
            }, 0);
            let summaryQty = cart.data.length
            setSummary({qty: summaryQty, total_price: summaryTotalPrice})
        } else {
            let data = cart.data.map((o, item) => ({ ...o, selected: false}))
            setCarts([...data])
            setSummary({qty: 0, total_price: 0})
        }
    }

    const handleDelete = async (id) => {
        sendApiDelete(id)
    }

    const setCartsChecked = (item, status) => {
        setCarts((cart) =>
            cart?.map((list, index) =>
                list.id === item.id ? { ...list, selected: status } : list
            )
        );
    }
    
    return (
        <>
            <Navbar />

            <div className="cart">
                <div className="container">
                    <h5>Keranjang</h5>
                    <div className="form-cart">
                        <input type="checkbox" onChange={(event) => handleCheckedAll(event)} />
                        <label className="label-all">Pilih Semua</label>
                    </div>
                    <hr />

                    {
                            (carts.length > 0) && carts.map((row, key) => {
                                return <>
                                    <div className="form-cart d-flex">
                                        <input type="checkbox" checked={row.selected} onChange={(event) => handleChecked(event, row)} />
                                        <img className="product-img" src={
                                                        row.product.image 
                                                            ? `${process.env.REACT_APP_DOMAIN}${row.product.image}?${new Date().getTime()}` 
                                                            : `${process.env.REACT_APP_DOMAIN}/products/no_image.jpg?${new Date().getTime()}`
                                                        } />
                                        <div className="d-flex flex-column ms-2">
                                            <p>{row.product.name}
                                                {(row.is_discount === 1) && <span class='badge bg-danger badge-cart-disc' id='lblCartDisc'>Disc</span>}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <a onClick={() => handleDelete(row.id)}>
                                                    <MdOutlineRemoveShoppingCart />
                                                </a>
                                                <div className="qty-control d-flex justify-content-end">
                                                    <a onClick={() => handleDecrementQty(row, key)}>
                                                        <AiOutlineMinusCircle className="btn-minus" />
                                                    </a>
                                                    <input type="number" className="form-qty-control" style={{width: '5%'}} value={row.qty}/>
                                                    <a onClick={() => handleIncrementQty(row, key)}>
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
                            <p>Total harga ({summary.qty} Barang)</p>
                            <p>Rp. {priceSplitter(summary.total_price)}</p>
                        </div>  
                        <hr style={{marginTop: '0'}} />
                        <button className="btn btn-secondary" disabled={summary.qty == 0 && true}>Beli</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart