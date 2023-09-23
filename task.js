const food= require('./food.json');



// list of all food items
console.log("-------list of all food iems---------");
function allfooditems(data){
    return data.map(item=>item.foodname);  
}
console.log(allfooditems(food));
// list of all food items with category vegetables
console.log("----list of all food items with category vegetables----");
function vegetablefooditems(data){
    return data.filter(item=>item.category==='Vegetable').map(item=>item.foodname);
}
console.log(vegetablefooditems(food));
//list of all the food items with category fruit
console.log("----list of all food items with category fruits----");
function  fruitfooditems(data){
    return data.filter(item=>item.category==='Fruit').map(item=>item.foodname);
}
console.log(fruitfooditems(food));
//list of all the food items with category protein
console.log("----list of all food items with category protein----");
function  Protein(data){
    return data.filter(item=>item.category==='Protein').map(item=>item.foodname);
}
console.log(Protein(food));
//list of all the food items with category nuts
console.log("----list of all food items with category nuts----");
function Nuts(data){
    return data.filter(item=>item.category==='Nuts').map(item=>item.foodname);
}
console.log(Nuts(food));
//list of all the food items with category grains
console.log("----list of all food items with category grains----");
function Grain(data){
    return data.filter(item=>item.category==='Grain').map(item=>item.foodname);
}
console.log(Grain(food)); 
//list of all the food items with category dairy
console.log("----list of all food items with category dairy----");
function Dairy(data){
    return data.filter(item=>item.category==='Dairy').map(item=>item.foodname);
}
console.log(Dairy(food)); 
//list of all the food items with calorie above 100
console.log("----list of all food items with calorie above 100----");
function Caloriemorethan100(data){
    return data.filter(item=>item.calorie>100).map(item=>item.foodname);
}
console.log(Caloriemorethan100(food)); 
//list of all the food items with calorie below 100
console.log("----list of all food items with calorie below 100----");
function Calorielessthan100(data){
    return data.filter(item=>item.calorie<100).map(item=>item.foodname);
}
console.log(Calorielessthan100(food));
//list of all the food items with highest protein content to lowest
console.log("----list of all food items with highest protein content to lowest----");
food.sort((a,b)=>b.protiens-a.protiens);
food.forEach((item)=>{
    console.log(item.foodname);
});
//list of all the food items with lowest cab to highest
console.log("----list of all food items with lowest cab to highest----");
food.sort((a,b)=>a.cab-a.cab);
food.forEach((item)=>{
    console.log(item.foodname);
});