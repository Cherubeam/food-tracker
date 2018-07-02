import Food from './food'
import Dish from './dish'
import Day from './day'
import { createFood, getFoods, resetFoodForm } from './foodFunctions'
import { createDish, resetDishForm } from './dishFunctions'
import { createDay, updateDay } from './dayFunctions'
import { renderToday, renderFoods, renderDishes } from './views'
import { throwIfFoodNameMissing, throwIfDishNameMissing, throwIfCaloriesMissing, throwIfProteinMissing, throwIfCarbohydrateMissing, throwIfFatMissing } from './errorMessages'

/**
 * @description Rendering
 */

// Create today instance as starting point
const today = new Day()
createDay(today)

// Render today intially
renderToday()

// Render foods initially
renderFoods()

// Render dished initially
renderDishes()

/**
 * @description Event listener 
 */

// Add food and save it
document.querySelector('#add-food').addEventListener('submit', e => {

	e.preventDefault()

	// Getting the values of the input field
	const brandName = e.target.elements.brandName.value
	const foodName = e.target.elements.foodName.value
	const calories = parseFloat(e.target.elements.calories.value)
	const protein = parseFloat(e.target.elements.protein.value)
	const carbohydrate = parseFloat(e.target.elements.carbohydrate.value)
	const fat = parseFloat(e.target.elements.fat.value)
	
	// Throw an error if food name is missing
	if (foodName === '') {
		throwIfFoodNameMissing()
	}

	// Throw an error if calories is missing
	if (calories === '') {
		throwIfCaloriesMissing()
	}

	// Throw an error if protein is missing
	if (protein === '') {
		throwIfProteinMissing()
	}

	// Throw an error if carbohydrate is missing
	if (carbohydrate === '') {
		throwIfCarbohydrateMissing()
	}

	// Throw an error if fat is missing
	if (fat === '') {
		throwIfFatMissing()
	}

	// Create a new instance of Food
	const food = new Food(null, null, null, null, brandName, foodName, calories, protein, carbohydrate, fat)

	createFood(food)
	resetFoodForm(e)
	renderFoods()
	renderDishes()
})

// Add dish and save it
document.querySelector('#add-dish').addEventListener('submit', e => {

	e.preventDefault()

	// Getting the values of the input and select fields
	const dishName = e.target.elements.dishName.value
	const selectedFood = document.getElementById('select-food-dish')
	const selectedFoodText = selectedFood.options[selectedFood.selectedIndex].text
	const foods = getFoods()
	let foodId

	foods.forEach(food => {
		if (selectedFoodText === food._name) {
			foodId = food._id
		}
	})

	// Throw an error if dish name is missing
	if (dishName === '') {
		throwIfDishNameMissing()
	}

	// Create a new instance of Dish
	const dish = new Dish(dishName, foodId)
	
	createDish(dish)
	resetDishForm(e)
	renderDishes()
})

// Add food to today object and save it
document.querySelector('#add-food-today').addEventListener('submit', e => {

	e.preventDefault()

	// Getting the values of the select fields
	const selectedMeal = document.getElementById('select-meal')
	const selectedMealText = selectedMeal.options[selectedMeal.selectedIndex].text
	const selectedFood = document.getElementById('select-food-today')
	const selectedFoodText = selectedFood.options[selectedFood.selectedIndex].text
	const foods = getFoods()
	let foodObject

	foods.forEach(food => {
		if (selectedFoodText === food.name) {
			foodObject = food
		}
	})

	console.log('++ Food Object ++')
	console.log(foodObject)

	console.log('+++++++++++')
	console.log(foods)

	updateDay('02.07.2018', foodObject, selectedMealText)
	renderToday()
})