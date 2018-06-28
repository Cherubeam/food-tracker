let day

const createDay = today => day = today

const updateDay = (food, meal) => {
    day.setMeal(food, meal)
    // TEST
    console.log(day)
}

const getDay = () => day

export { createDay, updateDay, getDay }