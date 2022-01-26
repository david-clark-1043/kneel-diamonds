import { getSizes, setSize, getState } from "./dataAccess.js"

const sizes = getSizes()



export const DiamondSizes = () => {
    let html = "<ul>"
    const state = getState()
    let presetId = ""

    if(state.sizeId) {
        presetId = state.sizeId
    }
    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if(size.id === presetId) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked /> ${size.carets}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

