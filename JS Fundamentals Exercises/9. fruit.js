function calculatePrice(fruit, weightInGrams, pricePerKilogram) {
    const weightinkilogram = weightInGrams / 1000;
    let price = weightinkilogram * pricePerKilogram;
    console.log(`I need $${price.toFixed(2)} to buy ${weightinkilogram.toFixed(2)} kilograms ${fruit}.`)
}



calculatePrice('apple', 1563, 2.35);