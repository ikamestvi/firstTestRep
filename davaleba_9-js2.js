//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for(let i=1; i<8; i++){
    console.log(i);
}
    


//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

for(let i=5; i<=35; i+=4){
   console.log(i);
}


//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
//3, 4, 5, 6, 7 == 2520

let i=1;
for(let a=3; a<8; a++){
   i=i*a;
}
console.log(i);



//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ 
// person-სრული სახელი ( სახელი და გვარი)

let person = {firstName:"Irakli", lastName:"Mestvirishvili", age:"30"};

let fullName=person.firstName+" "+person.lastName;

for(let key of fullName){
    console.log(key);
}
    



//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 

for(let key in person){
    console.log(person[key]);
}
    


//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
let fruits = ["Apple", "Banana", "Orange"];

for(let value of fruits){
    console.log(value);
}
    

//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("Grapes");
fruits.push("Pineapples");
for(let value of fruits){
    console.log(value);
}


//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let strt=1;
let res=0;

while(strt<=34){
    res+=strt;
    strt++;
}

console.log(res);
