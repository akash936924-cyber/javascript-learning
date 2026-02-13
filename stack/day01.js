let user1 = {
    name: "Aakash"
};

let user2 = user1;   // reference

user2.name = "Singh";

console.log(user1.name);  // Singh 😄🔥
console.log(user2.name);  // Singh
