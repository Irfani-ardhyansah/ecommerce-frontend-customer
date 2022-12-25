import './Dashboard.css'
import Navbar from '../Navbar'
import Carousel from '../Carousel'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div class="dashboard">
                <div class="container">
                    <Carousel />
                </div>
            </div>
        </>
    )
}

export default Dashboard