//1)გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let a=87;
let b=65;
console.log(a+b);

//2)გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks, დაბეჭდეთ student ის სახელი
const student = {firsName:"Irakli", lastName:"mestvirishvili", age:"30", email:"ika@gmail.com", marks:"10"};
console.log(student.firsName);

//3)გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
let m=45;
let n=23;

if(m>n){
    console.log(m+n);
}else console.log(n);

//4)გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
// ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
const studentName="irakli";
console.log("Rise and Shine " + studentName + " !");

//5)გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, 
// დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ 
// ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let salary=1000;
let bonus=0;

if(salary<=2000){
    bonus=salary*0.1;
}else bonus=0;

console.log("bonus: " + bonus);


//6)გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
let a1=23;
let b1=a1/2;
let c1=a1+b1;
console.log("c=" +c1);

//7)გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
const phones=["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log(phones);

//8)დაბეჭდეთ phones მასივის პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)
console.log("first element: " + phones[0], "\nlast element: " + phones[phones.length-1])
