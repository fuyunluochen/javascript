const array = Array.from(
    { length: 100 },
    () => Math.floor(Math.random() * 100),
);
const filteredArray = array.filter((number) => number > 50);
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = arr.filter((number) => number != 0);
console.log(filteredArray);
console.log(newArray);
