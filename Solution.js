
const food= require("./Food.json")

console.log("Question 1. list All the food items:--- ")
food.forEach((element, index, food)=>{
    console.log( element)
});





// console.log("Question 2 category vegetables: ------")
// const vegeFood=food.filter((element, index, food)=>{
//     if (element.category==="Vegetable") 
//      return element.foodname
// });
// console.log(vegeFood);




//  console.log("Question 3 category fruits: ------")
//  const fruits=food.filter((element, index, food)=>{
//   if(element.category==="Fruit")
//     return element
//  });
//  console.log(fruits)




// console.log("Question 4 category Protein: ------")
// const protein=food.filter((element, index, food)=>{
//     if(element.category==="Protein")
//         return element
// });
// console.log(protein)




// console.log("Question 6 category grains: ------")
// const grains=food.filter((element, index, food)=>{
//     if(element.category==="Grain")
//         return element
// });
// console.log(grains)



// console.log("Question 7 category Dairy: ------")
// const dairy=food.filter((element, index, food)=>{
//     if(element.category==="Dairy")
//         return element
// });
// console.log(dairy)




// console.log("Question 8 category calorie above 100: ------")
// const calAbove100=food.filter((element, index,food)=>{
//     if(element.calorie >100)
//         return element
// });
// console.log(calAbove100)





// console.log("Question 9 category calorie below 100: ------")
// const calBelow100=food.filter((element, index,food)=>{
//     if(element.calorie <100)
//         return element
// });
// console.log(calBelow100)



// console.log("Question 10 category protein below high to low: ------")
// const highToLowProteinFood = food.slice().sort((a, b) => b.protiens - a.protiens);
// console.log(highToLowProteinFood);






// console.log("Question 11 category protein below high to low: ------")
// const lowtohighCarbs = food.slice().sort((a, b) => a.cab - b.cab);
// console.log(lowtohighCarbs);
