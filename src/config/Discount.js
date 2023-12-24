export default function generateDiscount() {
    const randomFraction = Math.random();
    
    const discountPercentage = Math.floor(10 + randomFraction * (50 - 10));

    return discountPercentage;
}