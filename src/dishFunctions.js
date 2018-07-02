let dishes = []

/**
 * @description CRUD dishes
 */

// Load dishes from localStorage
const loadDishes = () => {
    const dishesJSON = localStorage.getItem('dishes')

    try {
        return dishesJSON ? JSON.parse(dishesJSON) : []
    } catch (e) {
        return []
    }
}

// Save dishes into localStorage
const saveDishes = () => {
    localStorage.setItem('dishes', JSON.stringify(dishes))
}

// Add meal to the deals object
const createDish = (dish) => {
    dishes.push(dish)
    saveDishes()
    console.log(dish)
}

// Update a dish
const updateDish = (dishId, update) => {

}

// Remove a dish
const removeDish = dishId => {

}

// Expose dishes from module
const getDishes = () => dishes

// Reset dish input form
const resetDishForm = (e) => {
    e.target.elements.dishName.value = ''
}

dishes = loadDishes()

export { createDish, updateDish, removeDish, getDishes, resetDishForm }