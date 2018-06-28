import Day from './day'
import { getFoods, removeFood } from './foodFunctions'
import { getDishes } from './dishFunctions'
import { getDay } from './dayFunctions'

// Generate the DOM structure for today
const generateTodayDOM = () => {
    const today = getDay()
    const todayElement = document.createElement('a')
    const todayDateElement = document.createElement('p') 
    todayDateElement.textContent = `${today.weekday}, ${today.date}`

    todayElement.appendChild(todayDateElement)

    return todayElement
}

// Generate the DOM structure for a food
const generateFoodDOM = food => {
    const foodElement = document.createElement('a')
    const nameElement = document.createElement('p')
    const macrosElement = document.createElement('ul')
    const proteinElement = document.createElement('li')
    const carbohydrateElement = document.createElement('li')
    const fatElement = document.createElement('li')

    // Display the food name
    nameElement.textContent = food.food._name
    foodElement.appendChild(nameElement)

    // Display the macronutrients
    proteinElement.textContent = `Protein: ${food.food._protein}g` // food.food.protein
    carbohydrateElement.textContent = `Carbohydrate: ${food.food._carbohydrate}g`
    fatElement.textContent = `Fat: ${food.food._fat}g`
    macrosElement.appendChild(proteinElement)
    macrosElement.appendChild(carbohydrateElement)
    macrosElement.appendChild(fatElement)
    foodElement.appendChild(macrosElement)

    // Setup the link for the food edit page
    foodElement.setAttribute('href', `/edit-food.html#${food.food._id}`)

    return foodElement
}

// Generate the DOM structure for the dish dropdown menu
const generateFoodDropdownDOM = (foods, querySelector) => {
    foods.forEach(food => {
        const optionElement = document.createElement('option')
        const selectElement = document.querySelector(querySelector)

        optionElement.textContent = food.food._name
        optionElement.value = food.food._id

        selectElement.appendChild(optionElement)
    })
}

// Generate the DOM structure for a dish
const generateDishDOM = (dish, foods) => {
    const dishElement = document.createElement('a')
    const dishNameElement = document.createElement('p')
    const foodsListElement = document.createElement('ul')
    const foodListElement = document.createElement('li')

    // Get every food added to the dish and add it to the DOM
    foods.forEach(food => {
        dish._foodIds.forEach(foodId => { // !!! _foodIds has to be changed to foodIds after Getters / Setters are working !!!
            if (foodId === food.food._id) {
                const foodElement = generateFoodDOM(food)
                foodListElement.appendChild(foodElement)
                foodsListElement.appendChild(foodListElement)
            }
        })
    })

    // Display the dish name
    dishNameElement.textContent = dish._name
    dishElement.appendChild(dishNameElement)
    
    // Display the foods added to the meal
    dishElement.appendChild(foodsListElement)

    // Setup the link for the dish edit page
    dishElement.setAttribute('href', `/edit-dish.html#${dish._id}`)

    return dishElement
}

// Render today
const renderToday = () => {
    const todayElement = document.querySelector('#today')
    const foods = getFoods()

    todayElement.innerHTML = ''
    const todayDOMElement = generateTodayDOM()
    todayElement.appendChild(todayDOMElement)

    generateFoodDropdownDOM(foods, '#select-food-today')
}

// Render the foods
const renderFoods = () => {
    const groceriesElement = document.querySelector('#groceries')
    const foods = getFoods()

    groceriesElement.innerHTML = ''

    foods.forEach(food => {
        const foodElement = generateFoodDOM(food)
        groceriesElement.appendChild(foodElement)

        const deleteButtonElement = deleteButton(food)
        groceriesElement.appendChild(deleteButtonElement)
    })
}

// Render the dishes
const renderDishes = () => {
    const dishesElement = document.querySelector('#dishes')
    const foods = getFoods()
    const dishes = getDishes()

    dishesElement.innerHTML = ''

    dishes.forEach(dish => {
        const dishElement = generateDishDOM(dish, foods)
        dishesElement.appendChild(dishElement)
    })

    generateFoodDropdownDOM(foods, '#select-food-dish')
}

// Initialize the food edit page
const initializeFoodEditPage = foodId => {
    const foods = getFoods()
    const foodIndex = foods.findIndex(index => foodId === index.food._id)

    document.getElementById('edit-ean').value = foods[foodIndex].food.ean
    document.getElementById('edit-brand-name').value = foods[foodIndex].food.brand
    document.getElementById('edit-food-name').value = foods[foodIndex].food.name
    document.getElementById('edit-calories').value = foods[foodIndex].food.calories
    document.getElementById('edit-protein').value = foods[foodIndex].food.protein
    document.getElementById('edit-carbohydrate').value = foods[foodIndex].food.carbohydrate
    document.getElementById('edit-fat').value = foods[foodIndex].food.fat

    document.getElementById('edit-saturated-fat').value = foods[foodIndex].food.saturatedFat
    document.getElementById('edit-multiple-unsaturated-fat').value = foods[foodIndex].food.multipleUnsaturatedFat
    document.getElementById('edit-basic-unsaturated-fat').value = foods[foodIndex].food.basicUnsaturatedFat
    document.getElementById('edit-trans-fat').value = foods[foodIndex].food.transFat
    document.getElementById('edit-cholesterol').value = foods[foodIndex].food.cholesterol
    document.getElementById('edit-natrium').value = foods[foodIndex].food.natrium
    document.getElementById('edit-potassium').value = foods[foodIndex].food.potassium
    document.getElementById('edit-fibers').value = foods[foodIndex].food.fibers
    document.getElementById('edit-sugar').value = foods[foodIndex].food.sugar
}

// Initialize the dish edit page
const initializeDishEditPage = dishId => {

}

// Display the delete button
const deleteButton = (food) => { 
    const deleteButtonElement = document.createElement('button')
    deleteButtonElement.textContent = 'Delete'
    deleteButtonElement.addEventListener('click', e => {
        removeFood(food.food._id)
        location.assign('/index.html')
    })

    return deleteButtonElement
}

export { renderToday, renderFoods, renderDishes, initializeFoodEditPage, initializeDishEditPage }