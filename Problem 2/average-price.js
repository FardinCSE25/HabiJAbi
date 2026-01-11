function findAveragePhonePrice(arr){
    let price = 0;
    for(const phone of arr){
        perPrice = phone.price;
        price = price + perPrice;
        average = (price/phones.length).toFixed(2)
    }
    return average;
}

 const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "1+", price: 48000 },
    ];
  console.log(findAveragePhonePrice(phones))
