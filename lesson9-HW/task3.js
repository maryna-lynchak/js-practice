const car = {
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2020
};
const car2 = {
    brand: "Subaru",
    model: "Forester",
    owner: "Luck Marshal"
}
const car3 = {
    ...car, ...car2
};

console.log (car3);