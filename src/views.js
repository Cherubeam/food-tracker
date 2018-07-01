import { getFoods, removeFood } from './foodFunctions'
import { getDishes } from './dishFunctions'
import { getDays } from './dayFunctions'

// Generate the DOM structure for today
const generateTodayDOM = () => {
    const today = getDays()
    const todayElement = document.createElement('a')
    const todayDateElement = document.createElement('p') 
    todayDateElement.textContent = `${today[0]._weekday}, ${today[0]._date}` // Adapt to .weekday, .date after implementing the parsing into the class constructure function

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
    nameElement.textContent = food._name
    foodElement.appendChild(nameElement)

    // Display the macronutrients
    proteinElement.textContent = `Protein: ${food.protein}g`
    carbohydrateElement.textContent = `Carbohydrate: ${food.carbohydrate}g`
    fatElement.textContent = `Fat: ${food.fat}g`
    macrosElement.appendChild(proteinElement)
    macrosElement.appendChild(carbohydrateElement)
    macrosElement.appendChild(fatElement)
    foodElement.appendChild(macrosElement)

    // Setup the link for the food edit page
    foodElement.setAttribute('href', `/edit-food.html#${food._id}`)

    return foodElement
}

// Generate the DOM structure for the dish dropdown menu
const generateFoodDropdownDOM = (foods, querySelector) => {
    foods.forEach(food => {
        const optionElement = document.createElement('option')
        const selectElement = document.querySelector(querySelector)

        optionElement.textContent = food.name
        optionElement.value = food.id

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
            if (foodId === food._id) {
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
    // getDays()

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
    const foodIndex = foods.findIndex(food => foodId === food.id)

    document.getElementById('edit-ean').value = foods[foodIndex].ean
    document.getElementById('edit-brand-name').value = foods[foodIndex].brand
    document.getElementById('edit-food-name').value = foods[foodIndex].name
    document.getElementById('edit-calories').value = foods[foodIndex].calories
    document.getElementById('edit-protein').value = foods[foodIndex].protein
    document.getElementById('edit-carbohydrate').value = foods[foodIndex].carbohydrate
    document.getElementById('edit-fat').value = foods[foodIndex].fat
    document.getElementById('edit-saturated-fat').value = foods[foodIndex].saturatedFat
    document.getElementById('edit-multiple-unsaturated-fat').value = foods[foodIndex].multipleUnsaturatedFat
    document.getElementById('edit-basic-unsaturated-fat').value = foods[foodIndex].basicUnsaturatedFat
    document.getElementById('edit-trans-fat').value = foods[foodIndex].transFat
    document.getElementById('edit-cholesterol').value = foods[foodIndex].cholesterol
    document.getElementById('edit-natrium').value = foods[foodIndex].natrium
    document.getElementById('edit-potassium').value = foods[foodIndex].potassium
    document.getElementById('edit-fibers').value = foods[foodIndex].fibers
    document.getElementById('edit-sugar').value = foods[foodIndex].sugar
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