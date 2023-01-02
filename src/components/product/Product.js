import product_1 from '../../img/5.jpg'
import './Product.css'
import { MdShoppingCart } from "react-icons/md";
import Slider from "react-slick";

const Product = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <div style={{marginBottom: '3vh'}}>
            <hr class="product-divider-top"></hr>
            
            <div class="product-title d-flex align-items-center">
                <h4>Category 1</h4>
                <a href="#" class="product-title-link-all">Lihat semua</a>
            </div>

            <Slider {...settings}>
                {/* <div class="d-flex justify-content-between"> */}
                    <div class="card product-card">
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
                    </div>
                    <div class="card product-card">
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
                    </div>
                    <div class="card product-card">
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
                    </div>
                    <div class="card product-card">
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
                    </div>
                    <div class="card product-card">
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
                    </div>
                    <div class="card product-card">
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
                    </div>
                {/* </div> */}
            </Slider>
        </div>
    )
}

export default Product