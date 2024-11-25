import React, { useState, useEffect } from "react";

const RecipeLevels = () => {
	const [recipeLevels, setRecipeLevels] = useState([]);

	useEffect(() => {
		const fetchRecipeLevels = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/recipes/getRecipeLevels",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				setRecipeLevels(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchRecipeLevels();
	}, []);

	return (
		<div className="container">
			<h2>Recipe Levels</h2>
			<table className="table table-striped table-border">
				<thead className="thead-dark">
					<tr>
						<th>#</th>
						<th>Recipe Level</th>
					</tr>
				</thead>
				<tbody>
					{recipeLevels.map((item) => {
						return (
							<tr>
								<td>{item.id}</td>
								<td>{item.level_name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default RecipeLevels;
