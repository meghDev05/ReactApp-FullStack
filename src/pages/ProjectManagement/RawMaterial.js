// import { FaPencilAlt } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import Button from '@mui/material/Button';
// import Pagination from '@mui/material/Pagination';
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";

// function RawMaterial(){

//     const [rawMaterial, setRawMaterial] = useState([]);

//     useEffect(()=>{
//         axios.get('http://localhost:8081/rawmaterial/')
//         .then(res => setRawMaterial(res.data))
//         .catch(err => console.log(err));
//     },[])

//     const handleDeleteRM = async (id) => {
//         try {
//             await axios.delete('http://localhost:8081/rawmaterial/'+id);
//             window.location.reload();
//         } catch(err) {
//             console.log(err);
//         }
//     }

//     return(
//         <>
//          <div className="card shadow border-0 p-3 mt-4">
//                     <div class="row">
//                         <div class="col-sm-9">
//                             <h3 className="hd">Raw Material List</h3>
//                             </div>
//                         <div class="col-sm-3">
//                             <Link to="/rawmaterial" className="btn btn-success float-right">
//                             <span className="btn-text">Add Raw Material</span></Link>
//                             </div>
//                     </div>
                    
                    
//                    <div className="table-responsive mt-3">
//                         <table className="table table-bordered v-align">
//                                 <thead className="thead-dark">
//                                     <tr>
//                                         <th>Sr. No.</th>
//                                         <th>Component</th>
//                                         <th>Manufacturer</th>
//                                         <th>Manufacturer Part Number</th>
//                                         <th>Detailed Description</th>
//                                         <th>Package / Case</th>
//                                         <th>Mounting Type</th>
//                                         <th>Quantity</th>
//                                         <th>Pieces(MOQ)</th>
//                                         <th>Unit Price</th>
//                                         <th>ACTION</th>
//                                     </tr>
//                                 </thead>

//                                 <tbody>
//                                     {
//                                         rawMaterial.map((data, i) => (
//                                         <tr key={i}>
//                                             <td>{data.id}</td>
//                                             <td>{data.Component}</td>
//                                             <td>{data.Manufacturer}</td>
//                                             <td>{data.Manufacturer_Part_Number}</td>
//                                             <td>{data.Detailed_Description}</td>
//                                             <td>{data.Package_Case}</td>
//                                             <td>{data.Mounting_Type}</td>
//                                             <td>{data.Quantity}</td>
//                                             <td>{data.Pieces_MOQ}</td>
//                                             <td>{data.Unit_Price}</td>
//                                             <td>
//                                                 <div className="actions d-flex align-items-center">
//                                                     <Link to={`/------/${data.id}`} className="success" color="success"><FaPencilAlt /></Link>
//                                                     <Button className="error" color="error" onClick={e => handleDeleteRM(data.id)}><MdDelete /></Button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                         )) 
//                                     }
//                                 </tbody>
//                         </table>

//                         <div className="d-flex tableFooter">
//                             <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
//                         </div>

//                    </div>

//                 </div>
//         </>
//     )
// }

// export default RawMaterial;