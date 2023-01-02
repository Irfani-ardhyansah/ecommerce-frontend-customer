import hanger from '../../img/hanger.png'
import './Category.css'

const Category = () => {
    return (
        <div class="mt-4 mb-4">
            <div class="d-flex flex-row justify-content-around">
                <div class="card category-card" style={{borderRadius: '10px'}}>
                    <div class="card-body d-flex flex-column align-items-center">
                        <img src={hanger} class="category-img" />
                        <h5>Category 1</h5>
                    </div>
                </div>
                <div class="card category-card" style={{borderRadius: '10px'}}>
                    <div class="card-body d-flex flex-column align-items-center">
                        <img src={hanger} class="category-img" />
                        <h5>Category 2</h5>
                    </div>
                </div>
                <div class="card category-card" style={{borderRadius: '10px'}}>
                    <div class="card-body d-flex flex-column align-items-center">
                        <img src={hanger} class="category-img" />
                        <h5>Category 3</h5>
                    </div>
                </div>
                <div class="card category-card" style={{borderRadius: '10px'}}>
                    <div class="card-body d-flex flex-column align-items-center">
                        <img src={hanger} class="category-img" />
                        <h5>Category 4</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category