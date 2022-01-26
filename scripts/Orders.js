import { getOrders, getMetals, getStyles, getSizes, getTypes } from "./dataAccess.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getTypes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    const totalCost = ( foundMetal.price + foundStyle.price + foundSize.price ) * foundType.multiple

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const date = new Date(order.timestamp).toDateString()

    return `<li>
        Order #${order.id} was placed on ${date} and cost ${costString}
    </li>`
}

// const orders = getOrders()



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()


    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



