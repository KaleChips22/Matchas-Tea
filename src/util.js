export function randomN(n, arr) {
    let results = []

    while (results.length < n) {
        let choices = arr.filter(x => !results.includes(x))

        let i = Math.floor(Math.random() * choices.length)

        results.push(choices[i])
    }

    return results
}

export function getMenuItems(menu) {
    let results = []

    menu.categories.forEach(category => {
        results = results.concat(category.items.map(n => ({...n, category: category.name})))
    })

    return results
}

const priceFormatter = Intl.NumberFormat(undefined, {
    currency: 'usd',
    style: 'currency'
})

export function formatPrice(num) {
    return priceFormatter.format(num)
}