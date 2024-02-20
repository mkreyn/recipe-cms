import React, {useState, useEffect} from 'react'
import { Pagination } from '../../System/Pagination/Pagination';
import './Cuisines.css'


const Cuisines = () => {

    const [cuisines, setCuisines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        const fetchCuisines = async () => {
            try {
                const response = await fetch("http://localhost:3000/cuisines/getCuisines", {
                   method: "GET"
                });
                const data = await response.json();
                setCuisines(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCuisines();
    }, []);

    let temp = cuisines.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(cuisines.length / recordsPerPage)
    return (
        <div className="container">
            <h2>Cuisines</h2>
            <table className="table table-striped table-border">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Cuisine</th>
                    </tr>    
                </thead>
                <tbody>
            
            {
                
                temp.map((item) => {
                   return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.cuisine_name}</td>
                    </tr>
                   )
                })
            }
            </tbody>
            </table>

            <Pagination 
            pagesNumber={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />

        </div>
    );
}

export default Cuisines