import product_1 from '../../img/Product-1.png'

const OrderModal = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-order">
                    <div class="modal-content modal-order">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Detail Transaksi</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal-order">
                            <div className="product">
                                <div className="orderItemModal card">
                                    <div className="body d-flex align-items-center justify-content-between">
                                        <div className="product d-flex"> 
                                            <img src={product_1} />
                                            <div className="name">
                                                <b>Product 1</b>
                                                <p>1 barang x Rp. 200.000</p>
                                            </div>
                                        </div>
                                        <div className="price d-flex flex-column">
                                            <b>Rp. 200.000</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="orderItemModal card">
                                    <div className="body d-flex align-items-center justify-content-between">
                                        <div className="product d-flex"> 
                                            <img src={product_1} />
                                            <div className="name">
                                                <b>Product 1</b>
                                                <p>1 barang x Rp. 200.000</p>
                                            </div>
                                        </div>
                                        <div className="price d-flex flex-column">
                                            <b>Rp. 200.000</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="orderItemModal card">
                                    <div className="body d-flex align-items-center justify-content-between">
                                        <div className="product d-flex"> 
                                            <img src={product_1} />
                                            <div className="name">
                                                <b>Product 1</b>
                                                <p>1 barang x Rp. 200.000</p>
                                            </div>
                                        </div>
                                        <div className="price d-flex flex-column">
                                            <b>Rp. 200.000</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="orderItemModal card">
                                    <div className="body d-flex align-items-center justify-content-between">
                                        <div className="product d-flex"> 
                                            <img src={product_1} />
                                            <div className="name">
                                                <b>Product 1</b>
                                                <p>1 barang x Rp. 200.000</p>
                                            </div>
                                        </div>
                                        <div className="price d-flex flex-column">
                                            <b>Rp. 200.000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="payment-details">
                                <b>Rincian Pembayaran</b>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>Metode Pembayaran</div>
                                    <div>COD</div>
                                </div>
                                <hr style={{borderTop: 'dotted 1px', marginTop: '0', marginBottom: '0'}} />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>Total Harga (1 Barang)</div>
                                    <div>Rp. 280.000</div>
                                </div>
                                <hr style={{borderTop: 'dotted 1px', marginTop: '0', marginBottom: '0'}} />
                                <div className="d-flex justify-content-between align-items-center">
                                    <b>Total Belanja</b>
                                    <b>Rp. 280.000</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderModal