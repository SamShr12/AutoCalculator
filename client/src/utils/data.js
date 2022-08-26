export const itemdetailquery = (id) => {
    const query = `/api/products/${id} {
        id,
        name,
        price_per_box,
        price_per_piece,
        price_per_dozen
    }`;
    return query
}

export const itemdeletequery = (id) => {
    const query = `/api/cart/${id} {
        id,
        name,
        price_per_box,
        price_per_piece,
        price_per_dozen
    }`;
    return query
}