interface user {
    id: number;
    name: string;
    email: string;
    age?: number;
    readonly isAdmin: boolean;
}

let User1: user = {
    id: 1,
    name: "shivam",
    email: "shivamgomle@gmail.com",
    age: 25,
    isAdmin: true
};


console.log(User1.id);
console.log(User1.name);
console.log(User1.email);
console.log(User1.age);
console.log(User1.isAdmin);