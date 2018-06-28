import uuidv4 from 'uuid/v4'
import moment from 'moment'

class Dish {
    constructor(name, foodId) {
        const timestamp = moment().valueOf()
        this._id = uuidv4()
        this.createdAt = timestamp
        this.updatedAt = timestamp
        this._name = name.trim()
        this._foodIds = []
        this._foodIds.push(foodId)
    }

    get foodIds() {
        return this._foodIds
    }

    set foodIds(value) {
        this._foodIds.push(value)
        this.updatedAt = moment().valueOf()
    }
}

export { Dish as default }