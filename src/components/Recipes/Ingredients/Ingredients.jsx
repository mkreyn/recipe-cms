import React, {useState, useEffect} from 'react'
import './Ingredients.css'
import { Pagination } from '../../System/Pagination/Pagination';


const Ingredients = () => {

    const [ingredients, setIngredients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch("http://localhost:3000/ingredients/getIngredients", {
                   method: "GET"
                });
                const data = await response.json();
                setIngredients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchIngredients();
    }, []);

    let temp = ingredients.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(ingredients.length / recordsPerPage)
    return (
        <div className="container">
            <h2>Ingredients</h2>
            <table className="table table-striped table-border">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Ingredient</th>
                    </tr>    
                </thead>
                <tbody>
            
            {
                
                temp.map((item) => {
                   return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.ingredient}</td>
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

export default Ingredients