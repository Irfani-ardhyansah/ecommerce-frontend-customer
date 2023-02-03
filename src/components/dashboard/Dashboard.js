import './Dashboard.css'
import Navbar from '../Navbar'
import Carousel from '../Carousel'
import Category from '../category/Category'
import Product from '../product/Product'

const Dashboard = () => {
    return (
        <>
            <div class="dashboard">
                <div class="container">
                    <Carousel />
                    <Category />
                    <Product />
                </div>
            </div>
        </>
    )
}

export default Dashboard