function extractNumber(str) {
    const lastHyphenIndex = str.lastIndexOf('-');
    const numberStr = str.substring(lastHyphenIndex + 1);
    return Number(numberStr);
}

console.log(extractNumber("news-87"));
console.log(extractNumber("product-27")); 
console.log(extractNumber("item-123")); 
console.log(extractNumber("order-4567")); 
