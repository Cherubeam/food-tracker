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

                // BUG?: Now my avoid logic (duplicate creation of the same day within days array) will be triggered...

                days.push(day)
            })

            return days
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
                if (dayObject._date === today.date) { // !!! TODO: Adapt dayObject._date to dayObject.date after implementing parsing days objects through Day class again !!!
                    console.log('Day object already exists within days array!')
                } else {
                    days.push(today)
                }
            })
        } else {
            days.push(today)
        }

    } 

    saveDays()
}

// Update a day instance
const updateDay = (food, meal) => {
    // BAUSTELLE
    days.setMeal(food, meal)

    // TEST
    console.log('+++ updateDay +++')
    console.log(day)

    //saveDays()
}

// Expose days from module
const getDays = () => days

days = loadDays()

export { createDay, updateDay, getDays }