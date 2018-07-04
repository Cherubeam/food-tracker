import { getFoods, removeFood } from './foodFunctions'
import { getDishes } from './dishFunctions'
import { getDays } from './dayFunctions'

/**
 * @description Generating the DOM structures
 */

// Generate the DOM structure for today
const generateTodayDOM = () => {
    const today = getDays()
    const todayElement = document.createElement('a')
    const todayDateElement = document.createElement('p')
    const mealElement = document.createElement('div')
    const breakfastElement = document.createElement('div')
    const lunchElement = document.createElement('div')
    const dinnerElement = document.createElement('div')
    const snackElement = document.createElement('div')

    // Display the current weekday and date
    todayDateElement.textContent = `${today[today.length-1].weekday}, ${today[today.length-1].date}`
    todayElement.appendChild(todayDateElement)

    // Display the meals of the current day
    breakfastElement.textContent = 'Breakfast'
    lunchElement.textContent = 'Lunch'
    dinnerElement.textContent = 'Dinner'
    snackElement.textContent = 'Snack'

    const breakfast = today[today.length-1].meals.breakfast
    const lunch = today[today.length - 1].meals.lunch
    const dinner = today[today.length - 1].meals.dinner
    const snack = today[today.length - 1].meals.snack

    breakfast.forEach(foodObject => {
        const foodElement = document.createElement('p')
        foodElement.textContent = foodObject._name
        breakfastElement.appendChild(foodElement)
    })

    lunch.forEach(foodObject => {
        const foodElement = document.createElement('p')
        foodElement.textContent = foodObject._name
        lunchElement.appendChild(foodElement)
    })

    dinner.forEach(foodObject => {
        const foodElement = document.createElement('p')
        foodElement.textContent = foodObject._name
        dinnerElement.appendChild(foodElement)
    })

    snack.forEach(foodObject => {
        const foodElement = document.createElement('p')
        foodElement.textContent = foodObject._name
        snackElement.appendChild(foodElement)
    })

    mealElement.appendChild(breakfastElement)
    mealElement.appendChild(lunchElement)
    mealElement.appendChild(dinnerElement)
    mealElement.appendChild(snackElement)
    todayElement.appendChild(mealElement)

    return todayElement
}

// Generate the DOM structure for a food
const generateFoodDOM = food => {
    const foodElement = document.createElement('a')
    const nameElement = document.createElement('p')
    const lastUpdatedElement = document.createElement('p')
    const macrosElement = document.createElement('ul')
    const proteinElement = document.createElement('li')
    const carbohydrateElement = document.createElement('li')
    const fatElement = document.createElement('li')

    // Display the food name
    nameElement.textContent = food._name
    foodElement.appendChild(nameElement)

    // Display the last update
    lastUpdatedElement.textContent = food.fromNow
    foodElement.appendChild(lastUpdatedElement)

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
    const selectElement = document.querySelector(querySelector)
    selectElement.innerHTML = ''

    foods.forEach(food => {
        const optionElement = document.createElement('option')

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
        dish._foodIds.forEach(foodId => { // !!! _foodIds etc. has to be changed to foodIds after Getters / Setters are working !!!
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

/**
 * @description Rendering
 */

// Render today
const renderToday = () => {
    const todayElement = document.querySelector('#today-list-food')
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

        // Render a delete button for each food
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