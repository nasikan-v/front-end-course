// Перелік типів
const dataTypes = [
    { label: "Привіт", value: "Привіт" },
    { label: "25", value: 25 },
    { label: "true", value: true },
    { label: "undefined", value: undefined },
    { label: "null", value: null },
    { label: "Object", value: { name: "Ivan", role: "Engineer" } },
    { label: "Array", value: ["design", "development", "testing"] }
];

for (const item of dataTypes) {
    console.log(`${item.label} це ${typeof item.value}`);
}

// Числа та рядки
const firstString = prompt("Введіть перший рядок:");
const secondString = prompt("Введіть другий рядок:");
const thirdString = prompt("Введіть третій рядок:");

console.log(`${secondString} ${thirdString} ${firstString}`);

// Розкласти п'ятизначне число
console.log(prompt("Введіть п'ятизначне число:").split("").join(" "));