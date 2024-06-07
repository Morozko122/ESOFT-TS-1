interface User {
    id: number;
    name: string;
    age: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Book {
    isbn: string;
    title: string;
    author: string;
}

// Разберитесь с типизацией функции и поймите как она работает.
// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => {
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
const userss: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
];

const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
];

// 1. Найдите пользователя по имени "Alice".
// 1. Найдите пользователя по имени "Alice".
const foundUser = findInArray(userss, "name", "Alice");
console.log(foundUser);
// 2. Найдите продукт с ценой 500.
const foundProduct = findInArray(products, "price", 500);
console.log(foundProduct);
// 3. Найдите книгу по автору "Another One".
const foundBook = findInArray(books, "author", "Another One");
console.log(foundBook);


function findInArray2<T>(items: T[], keys: Partial<T>): T | undefined {
    return items.find(item => fun1(item, keys));
}
function fun1<T>(item: T, keys: Partial<T>): boolean {
    return Object.keys(keys).every(key => fun2(item, keys, key))
}
function fun2<T>(item: T, keys: Partial<T>, key: string): boolean {
    const k = key as keyof T;
    return item[k] === keys[k];
}
const user123 = findInArray2(userss, { name: "Alice", age: 25 });
console.log(user123); // { id: 1, name: "Alice", age: 25 }

function findInArray3<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => {
        if (item.hasOwnProperty(key)) {
            if (item[key] !== undefined) {
                return item[key] === value;
            }
        }
        return undefined;
    });
}

const user1234 = findInArray3(userss, "class", "Bob");
console.log(user1234); // { id: 1, name: "Alice", age: 25 }