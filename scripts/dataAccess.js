import { database } from "./database.js"

/*

create objects for custom events here

*/

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

//add getSizes()
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

// add getStyles()
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}
// add getOrders()

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

// add set states
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}

export const getState = () => {
    return {...database.orderBuilder}
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}
    // Checks if order is set - prevent pushing empty data to customOrder list
    if(newOrder.typeId && newOrder.styleId && newOrder.sizeId && newOrder.metalId) {
        // Add a new primary key to the object
        const numOrders = database.customOrders.length
        if(numOrders === 0) {
            newOrder.id = 1
        } else {
            const lastIndex = numOrders - 1
            newOrder.id = database.customOrders[lastIndex].id + 1
        }
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)
    
        // Reset the temporary state for user choices
        database.orderBuilder = {}
    
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    } else {
        window.alert("Please Enter Order Values")
    }
}