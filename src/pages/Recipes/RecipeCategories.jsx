import React, { useState, useEffect } from "react";
import "./RecipeCategories.css";

export const RecipeCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/recipes/getRecipeCategories",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				console.log(data);
				setCategories(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchCategories();
	}, []);
	return (
		<>
			<h2>Recipe Categories</h2>
			<div className="categories">
				<ul>
					{categories.map((category) => (
						<li key={category.id}>
							<span className="category-title">{category.category_name}</span>
							<ul>
								{category.children.map((child) => (
									<li key={child.id}>{child.category_name}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
