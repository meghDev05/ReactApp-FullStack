import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useState } from 'react';
import Validation from './ProductValidation';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductUpload = () => {

    const [values, setValues] = useState({
        product: '',
        details: '',
        category: '',
        price: ''
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();    

    const handleInput = (event) => {
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.product === "" && errors.details === "" && errors.category === "" && errors.price === ""){
            axios.post('http://localhost:8081/products', values)
            .then(res => { 
                navigate('/products');
            })
        }
    }

    return(
        <>
        <div className="right-content w-100">

            <form className="form" action="" onSubmit={handleSubmit}>
                <div className="row">

                    <div className="col-sm-9">
                        <div className="card p-4">
                            <h5 className="mb-4">PRODUCTS UPLOAD</h5>

                            <div className="form-group mb-4">
                            <h6>Product</h6>
                                <input type="text" name='product' className='form-control' placeholder='Enter your name' onChange={handleInput}/>
                                {errors.product && <span className='text-danger'>{errors.product}</span>}
                            </div>


                            <div className="form-group mb-4">
                                <h6>Details</h6>
                                <input type="text" name="details" onChange={handleInput} />
                                {errors.details && <span className='text-danger'>{errors.details}</span>}
                            </div>

                            <div className="form-group mb-4">
                                <h6>Category</h6>
                                <input type="text" name="category" onChange={handleInput} />
                                {errors.category && <span className='text-danger'>{errors.category}</span>}
                            </div>

                            <div className="form-group mb-4">
                                <h6>Price</h6>
                                <input type="text" name="price" onChange={handleInput} />
                                {errors.price && <span className='text-danger'>{errors.price}</span>}
                            </div>


                            <br />
                            <Button type="submit" className="btn-blue btn-lg btn-big"><FaCloudUploadAlt /> &nbsp; Submit</Button>

                        </div>
                    </div>

                   

                </div>
            </form>
        </div>
        </>
    )
}

export default ProductUpload;