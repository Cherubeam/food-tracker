// Count all calories
const countCaloriesTotal = (breakfast, lunch, dinner, snack) => {
    let breakfastCalories = 0;
    breakfast.forEach(food => {
        breakfastCalories = breakfastCalories + food.calories;
    });

    let lunchCalories = 0;
    lunch.forEach(food => {
        lunchCalories = lunchCalories + food.calories;
    });

    let dinnerCalories = 0;
    dinner.forEach(food => {
        dinnerCalories = dinnerCalories + food.calories;
    });

    let snackCalories = 0;
    snack.forEach(food => {
        snackCalories = snackCalories + food.calories;
    });

    return {
        breakfast: breakfastCalories,
        lunch: lunchCalories,
        dinner: dinnerCalories,
        snacks: snackCalories,
        total: breakfastCalories + lunchCalories + dinnerCalories + snackCalories
    }
}

export { countCaloriesTotal }