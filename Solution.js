
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
