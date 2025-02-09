
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductList(){

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/products/')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/products/'+id);
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
         <div className="card shadow border-0 p-3 mt-4">
                    <div class="row">
                        <div class="col-sm-10">
                            <h3 className="hd">Product List</h3>
                            </div>
                        <div class="col-sm-2">
                            <Link to="/productupload" className="btn btn-success float-right">
                            <span className="btn-text">Add Product</span></Link>
                            </div>
                    </div>
                    
                    
                   <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>SR. NO.</th>
                                        <th>PRODUCT</th>
                                        <th>DETAILS</th>
                                        <th>CATEGORY</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        product.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.id}</td>
                                            <td>{data.product}</td>
                                            <td>{data.details}</td>
                                            <td>{data.category}</td>
                                            <td>{data.price}</td>
                                            <td>
                                                <div className="actions d-flex align-items-center">
                                                    <Link to={`/updateproduct/${data.id}`} className="success" color="success"><FaPencilAlt /></Link>
                                                    <Button className="error" color="error" onClick={e => handleDelete(data.id)}><MdDelete /></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        )) 
                                    }
                                </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
                        </div>

                   </div>


                </div>
                {/* 
                
                    <td>1</td>
                    <td>Smooth Starter GSM</td>
                    <td>Agriculture Product</td>
                    <td>10,000</td>
                    <td>
                        <div className="actions d-flex align-items-center">
                            <Button className="success" color="success"><FaPencilAlt /></Button>
                            <Button className="error" color="error"><MdDelete /></Button>
                        </div>
                    </td>
                */}
        </>
    )
}

export default ProductList;