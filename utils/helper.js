export const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    const discountPercentage =  ((originalPrice - discountedPrice)/ originalPrice)*100;
    return discountPercentage.toFixed(2);
}