import './Category.css'
import { useState, useEffect, useRef } from "react"
import axios from 'axios'

const Category = () => {
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
        headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
    }
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/category`, config)

        if(result.data.status == 200) {
            setCategory(result.data.data)
        }
    }

    return (
        <div class="mt-4 mb-4">
            <div class="d-flex flex-row justify-content-around">
                {
                    (category.length > 0) && category.map((row, key) => {
                        return <>
                            <div class="card category-card" style={{borderRadius: '10px'}}>
                                <div class="card-body d-flex flex-column align-items-center">
                                    <img class="category-img" src={
                                        row.image 
                                        ? `${process.env.REACT_APP_DOMAIN}${row.image}`
                                        : `${process.env.REACT_APP_DOMAIN}/categories/no_image.jpg`
                                            } />
                                    <h5>{row.name}</h5>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Category