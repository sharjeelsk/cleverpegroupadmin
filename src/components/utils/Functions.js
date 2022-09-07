import _ from 'lodash'

export function formatMoney(n) {
    return "₹" + (Math.round(parseInt(n) * 100) / 100).toLocaleString();
}

export function percentage(mrp,price){
    return Math.ceil(((parseInt(mrp)-parseInt(price))/parseInt(mrp))*100)
}

export const renderName = (details)=>{
    let name = details.name
    _.map(details.variations.options,(value,key)=>{
        if(key!=="_id" && key!=="mrp" && key!=="price" && key!=="imgs"){
            name = name + " " + `(${value})`
        }
    })
    return name
}
export const renderName2 = (product,options)=>{
    let name = product.name
    _.map(options,(value,key)=>{
        if(key!=="_id" && key!=="mrp" && key!=="price" && key!=="imgs"){
            name = name + " " + `(${value})`
        }
    })
    return name
}
export const cartTotal = (cart)=>{
    let total = 0
    cart.map(item=>{
        total = total + (parseInt(item.variations.item.options.price) * item.variations.quantity)
    })
    return formatMoney(total);
}

export const cartMrpTotal = (cart)=>{
    let total = 0
    cart.map(item=>{
        total = total + (parseInt(item.variations.item.options.mrp) * item.variations.quantity)
    })
    return formatMoney(total);
}

export const cartDiscountTotal = (cart)=>{
    let total = 0
    let mrptotal = 0
    cart.map(item=>{
        total = total + (parseInt(item.variations.item.options.price)* item.variations.quantity)
    })
    cart.map(item=>{
        mrptotal = mrptotal + (parseInt(item.variations.item.options.mrp)* item.variations.quantity)
    })
    return formatMoney(mrptotal-total);
}

export const cartDiscountPercantage = (cart)=>{
    let total = 0
    let mrptotal = 0
    cart.map(item=>{
        total = total + (parseInt(item.variations.item.options.price) * item.variations.quantity)
    })
    cart.map(item=>{
        mrptotal = mrptotal + (parseInt(item.variations.item.options.mrp)* item.variations.quantity)
    })
    return percentage(mrptotal,total);
}


export const orderSubTotal = (items)=>{
    let subTotal = 0;
    items.map(item=>{
        subTotal =subTotal + item.quantity * parseInt(item.details.options.mrp)
    })
    return formatMoney(subTotal)
}

export const orderTotal = (items)=>{
    let total = 0;
    items.map(item=>{
        total =total + item.quantity * parseInt(item.details.options.price)
    })
    return formatMoney(total)
}

export const orderDiscount = (items)=>{
    let total = 0;
    let subTotal = 0
    items.map(item=>{
        total =total + item.quantity * parseInt(item.details.options.price)
        subTotal =subTotal + item.quantity * parseInt(item.details.options.mrp)
    })
    return formatMoney(subTotal - total)
}