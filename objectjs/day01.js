// const mysym = Symbol("key")

// const jsuser = {
//     name: "aakash singh",
//     fullnmae: "aakash singhh",
//     age: 20,
//     [mysym]: "mySymbolValue",
//     location: "bhadohi",
//     email: "aakash@gmail.com",
//     isloggedin: false,
//     lastloggedday: ["monday", "friday"]
// }

// console.log(jsuser.email)          // dot notation
// console.log(jsuser["email"])       // bracket notation
// console.log(jsuser["fullnmae"])    // bracket notation
// console.log(jsuser[mysym])         // Symbol access





// const jsuser = {
//     name:"aaksh",
//     age:20,
//     email:"aakashsingh@gmail.com",

// }
// jsuser.email ="singhaakash@gmail.com"
// console.log(jsuser.email)


// jsuser.email = "new@gmail.com"   // ✅
// jsuser.age = 21                  // ✅




// const jsuser = {
//     name: "aakash singh",
//     age: 20,
//     email: "aakash@gmail.com",
//     isloggedin: false
// }


// Object.freeze(jsuser)


// jsuser.email = "newemail@gmail.com"
// jsuser.age = 25


// console.log(jsuser.email)
// //Object.freeze() object ko lock kar deta hai.



// const jsuser = {
//     name: "Aakash",

//     greeting: function () {
//         console.log("Hello " + this.name)
//     }
// }

// jsuser.greeting()


// this.name → object ke andar ki value access करता है
//  greeting → function stored inside object = method