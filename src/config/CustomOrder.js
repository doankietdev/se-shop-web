export default function CustomOrder (orders) {
    // type of array
    const allOrderedProducts = [];
    orders.forEach(order => {
        const orderId = order.id;
        const orderStatus = order.orderStatus.name;
    
        // Iterate through each product in the order's products array
        order.products.forEach(product => {
            const productId = product.product.id;
            const productName = product.product.name;
            const productDescription = product.product.description;
            const productImageUrl = product.product.imageUrl;
            const quantity = product.quantity;
            const price = product.price;
    
            // Create an object for each product and add status and order id
            const productInfo = {
                orderId: orderId,
                orderStatus: orderStatus,
                productId: productId,
                productName: productName,
                productDescription: productDescription,
                productImageUrl: productImageUrl,
                quantity: quantity,
                price: price,
            };
    
            // Push the product information to the allProducts array
            allOrderedProducts.push(productInfo);
        });
    });
    return allOrderedProducts
}