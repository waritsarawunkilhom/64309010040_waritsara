let obj = {
    key:"String"
}
 
//
let json ='{"fname":"Sam","lname":"Smith"}';
console.log(typeof(json))
//

let Obj = JSON.parse(JSON)
console.log(typeof(Obj));
//

let Obj2 ={
    fname : "Jack",
    lname : "Smith"
};
let json2 = JSON.stringify(Obj2);
console.log(typeof(json2)); 


