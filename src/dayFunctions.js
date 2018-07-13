import Day from './day'

let days = []

/**
 * @description CRUD days
 */

// Load days from localStorage
const loadDays = () => {
    const daysJSON = localStorage.getItem('days')

    /**
     * @description The data loaded from localStorage have to be parsed again through the class constructor function to restore the Getters / Setters – all the logic – for each day instance.
     */
    try {
        if (daysJSON) {
            const parsedJSON = JSON.parse(daysJSON)
            let days = []

            parsedJSON.forEach(dayObject => {
                let { _timestamp, _day, _weekday, _week, _month, _year, _date, _meals: { breakfast, lunch, dinner, snack } } = dayObject

                console.log(_timestamp, _day, _weekday, _week, _month, _year, _date, breakfast, lunch, dinner, snack)

                const day = new Day(_timestamp, _day, _weekday, _week, _month, _year, _date, breakfast, lunch, dinner, snack)

                // BUG: Now my avoid logic (duplicate creation of the same day within days array) will be triggered...

                days.push(day)
            })

            return days

        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

// Save a day into localStorage
const saveDays = () => {
    localStorage.setItem('days', JSON.stringify(days))
}

// Create a day instance and save it into days array
const createDay = today => {
    if (today) {

        /**
         * @description Check days array for an object with date of today. If object with date of today exists, do nothing. If not, push current day (today) to days array. The check for days.length is needed since forEach doesn't work for an empty array.
         */
        if (days.length > 0) {
            days.forEach(dayObject => {
                if (dayObject.date === today.date) {
                    console.log('Day object already exists within days array!')
                    console.log('++++++++++++++++++')
                    console.log(dayObject.date)
                } else {
                    days.push(today)
                    console.log('dayObject.date === today.date (inner else) loop')
                }
            })
        } else {
            days.push(today)
            console.log('days.length (outer else) loop')
        }
    } 

    saveDays()
}

// Update a day instance
const updateDay = (date, food, meal) => {
    // !!! TODO: Currently I want to check if a given date argument has a respective day object within days array. If yes, go on with the update process. If not we have to create a new date object for the given date via Day class. But currently this class is not able to add a day for a specific date. This has to be adapted in future. For now, I just gonna write the if statement. The else statement has to have the adaptions mentioned above, but later. !!!
    
    days.forEach(dayObject => {
        if (dayObject.date === date) {
            dayObject.setMeal(food, meal)
        } else {
            console.log('dayObject not found') // TODO: Has to be adapted like mentioned above.
        }
    })

    saveDays()
}

// !!! TODO: Has to be tested !!!
// Remove an entire day object
const removeDay = date => {
    days.forEach((dayObject, index) => {
        if (dayObject.date === date) {
            days.splice(index, 1)
        } else {
            console.log('dayObject not found') // TODO: Has to be adapted / replaced through a proper error message.
        }
    })
}

// !!! TODO: Has to be tested !!!
// Remove a food from a meal from day object
const removeFoodFromMeal = (date, meal, foodId) => {
    days.forEach(dayObject => {
        if (dayObject.date === date) {
            ///
        }
    })
}

// Expose days from module
const getDays = () => days

days = loadDays()

export { createDay, updateDay, getDays }