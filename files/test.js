// Разберитесь с типизацией функции и поймите как она работает.
// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
function findInArray(items, key, value) {
    return items.find(function (item) {
        // Проверяем, существует ли ключ в объекте
        if (item.hasOwnProperty(key)) {
            // Если ключ существует, сравниваем значение
            return item[key] === value;
        }
        // Если ключ отсутствует, возвращаем false
        return false;
    });
}
// Данные для тестирования функции
var userss = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];
var products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
];
var books = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
];
// 1. Найдите пользователя по имени "Alice".
// 1. Найдите пользователя по имени "Alice".
var foundUser = findInArray(userss, "name", "Alice");
console.log(foundUser);
// 2. Найдите продукт с ценой 500.
var foundProduct = findInArray(products, "price", 500);
console.log(foundProduct);
// 3. Найдите книгу по автору "Another One".
var foundBook = findInArray(books, "author", "Another One");
console.log(foundBook);
function findInArray2(items, keys) {
    return items.find(function (item) { return fun1(item, keys); });
}
function fun1(item, keys) {
    return Object.keys(keys).every(function (key) { return fun2(item, keys, key); });
}
function fun2(item, keys, key) {
    var k = key;
    return item[k] === keys[k];
}
var user123 = findInArray2(userss, { name: "Alice", age: 25 });
console.log(user123); // { id: 1, name: "Alice", age: 25 }
function findInArray3(items, key, value) {
    return items.find(function (item) {
        if (item.hasOwnProperty(key)) {
            if (item[key] !== undefined) {
                return item[key] === value;
            }
        }
        return undefined;
    });
}
var user1234 = findInArray3(userss, "class", "Bob");
console.log(user1234); // { id: 1, name: "Alice", age: 25 }
