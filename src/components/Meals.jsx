import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
    const [loadMeals, setLoadMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch('http://localhost:3000/meals');

                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }

                const meals = await response.json();
                setLoadMeals(meals);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {loadMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
