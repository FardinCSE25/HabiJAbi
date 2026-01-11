function calculateElectronicsBudget(laptopNumber, tabletNumber, mobileNumber){
    laptop = 35000;
    tablet = 15000;
    mobile = 20000;
    laptopTotalPrice = laptop * laptopNumber;
    tabletTotalPrice = tablet * tabletNumber;
    mobileTotalPrice = mobile * mobileNumber;
    total = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return total;
}

const laptopNeeded = 2;
const tabletNeeded = 4;
const mobileNeeded = 7;
const totalMoneyRequired = calculateElectronicsBudget(laptopNeeded, tabletNeeded, mobileNeeded)
console.log(totalMoneyRequired)