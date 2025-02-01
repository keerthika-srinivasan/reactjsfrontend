const ENDPOINT = process.env.ENDPOINT || 'https://fakestoreapi.com'

async function retrieveProducts() {
    try {
        const response = await fetch(`${ENDPOINT}/products`)
        const jsonBody = await response.json()
        return jsonBody
    } catch (error) {
        return [{
            'error': 'Unable to retrieve products',
            'more': JSON.stringify(error)
        }]
    }
}

async function retrieveProduct(id) {
    try {
        const response = await fetch(`${ENDPOINT}/products/${id}`)
        const jsonBody = await response.json()
        return jsonBody
    } catch (error) {
        return [{
            'error': `Unable to retrieve product id ${id}`,
            'more': JSON.stringify(error)
        }]
    }
}

export { retrieveProducts, retrieveProduct }
