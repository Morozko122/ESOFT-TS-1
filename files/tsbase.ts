// //---------------------------------------------------------------------------------
// //Разминка
// // Определите интерфейс для пользователя
interface User {
    id: number;
    name: string;
    email: string; // Добавьте свойство email типа string
}

//   // Определите интерфейс для активности пользователя
interface Activity {
    userId: number;
    activity: string;
    timestamp: Date; // Добавьте свойство timestamp типа Date
}

//   // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
async function fetchData<T>(url: string): Promise<T> {
    // Реализуйте получение данных с использованием fetch и возвращение их в формате json
    const res = await fetch(url);
    if (res.ok) {
        const data: T = await res.json();
        return data;
    }
    else {
        throw new Error('Ошибка');
    }
}

//   // Используйте Utility Types для создания Partial и Readonly версий User и Activity
type PartialUser = Partial<User> // Заполните тип
type ReadonlyActivity = Readonly<Activity> // Заполните тип

//Типизируйте функцию. userId - число
function getUserActivities(userId: number) {
    return fetchData(`/api/activities/${userId}`);
}
// Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
type ActivitiesReturnType = ReturnType<typeof getUserActivities>// Заполните тип

// Используйте extends в условных типах для создания типа Permissions
type AdminPermissions = { canBanUser: boolean };
type BasicPermissions = { canEditProfile: boolean };
// Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
type Permissions<T> = T extends 'Admin' ? AdminPermissions : BasicPermissions;


///ЧАСТЬ 2.

// Определите Type Alias для Union типа String или Number
type StringOrNumber = string | number; // Заполните тип

// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message: StringOrNumber): void {
    console.log(message);// Реализуйте вывод сообщения в консоль
}

// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);// Бросьте исключение с errorMsg
}

// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value: StringOrNumber): value is string {
    return typeof value === 'string';
    // Верните результат проверки типа
}

// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') {
        throwError('Не число')
    }
    // Бросьте исключение, если значение не является числом
}

// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value: StringOrNumber) {
    // Реализуйте логику проверки и обработки значения
    if (isString(value)) {
        console.log(`Строка: ${value}`);
    } else {
        assertIsNumber(value);
        console.log(`Число: ${value}`);
    }

}

// Type Alias и Union
type StringOrNumber = string | number;


//сделайте  Type Guard для определения, является ли значение строкой
function isString(value: any) {
    if (typeof value === 'string') {
        console.log("String");
    }
}

// создайте asserts function на число.

//Я понял что это дубликат задания, код выше

// function assertIsNumber(value: any): asserts {

// }

// Использование Type Guard и Asserts
function processValue(value: StringOrNumber) {
    if (isString(value)) {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        assertIsNumber(value);
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}

//---------------------------------------------------------------------------------



//---------------------------------------------------------------------------------
// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
interface Responsee<T> {
    responseData: T;
    status: number;
}

// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse<T>(responseData: T, status: number): Responsee<T> {
    return {
        responseData: responseData,
        status: status
    };
    // Реализуйте создание и возврат объекта Response
}

// Используйте функцию createResponse для создания ответа с массивом чисел
const numericResponse = createResponse([1, 2, 3], 200);// Заполните вызов функции

// Используйте функцию createResponse для создания ответа с объектом пользователя (User)
const user = {
    username: 'Vitaliy',
    age: 22
}
const userResponse = createResponse(user, 200);// Заполните вызов функции
//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
// Задание 3: Расширенное использование Generics
// Цель: Разработать несколько функций для обработки и различения типов данных.

// Определите тип данных для описания автомобиля 
type Car = {
    company: string;
    model: string;
    year: number;
};

// Определите тип данных для описания велосипеда
type Bike = {
    company: string;
    type: 'road' | 'mountain';
};

// Создайте Type Guard для проверки, является ли объект автомобилем
function isCar(vehicle: any): vehicle is Car {
    return typeof vehicle.company === 'string' && typeof vehicle.model === 'string' && typeof vehicle.year === 'number';
}

// Используйте Type Guard в функции, которая печатает информацию о транспорте. Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.

// Супер странное задание

function printVehicleInfo(vehicle: Car | Bike) {
    if (isCar(vehicle)) {
        console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
    } else {
        console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
    }
}
//---------------------------------------------------------------------------------



//---------------------------------------------------------------------------------  
// Задание 4: Использование Utility Types для работы с интерфейсами
// Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.

// Определите интерфейс Employee
interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
}

// Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
type PartialEmployee = Partial<Employee>// Заполните тип

// Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
type ReadonlyEmployee = Readonly<Employee> // Заполните тип

// Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
function printEmployeeInfo(employee: PartialEmployee) {
    const missing = "Свойство отсутсвует"
    console.log(`id: ${employee.id !== undefined ? employee.id : missing} 
    name: ${employee.name !== undefined ? employee.name : missing} 
    departament: ${employee.department !== undefined ? employee.department : missing}
    email: ${employee.email !== undefined ? employee.email : missing}`)
    // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
}
//---------------------------------------------------------------------------------




//---------------------------------------------------------------------------------
//Задание 5: Работа с Indexed Access Types и Mapped Types
//Цель: Создать утилиты для работы с объектами и их ключами.

// Определите интерфейс для пользователя
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Используйте Indexed Access Types для получения типа поля name из User
type UserNameType = User['name'];// Заполните тип

// Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof
type UserFieldsToBoolean = {
    [key in keyof User]: boolean;
}

// Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
function getUserFieldType(user: User, key: string): string {
    return typeof user[key];
}
const testuser: User = {
    id: 1,
    name: 'BB',
    email: 'BB@bb.com',
    age: 99
};
// Используйте эту функцию для получения типа поля 'age' и 'name'
const ageType = getUserFieldType(testuser, 'age');
const nameType = getUserFieldType(testuser, 'name');
//---------------------------------------------------------------------------------






//   //---------------------------------------------------------------------------------
//   // Задание 6: Расширение и ограничение Generics
//   // Цель: Создать универсальные функции с ограничениями типов.

//   // Создайте базовый интерфейс для сущностей с идентификатором
//   interface Identifiable {
//     id: number;
//   }

//   interface EntityUser extends Identifiable {
//     name: string,
//     email: string,
//     age: number
//   }

//   // Типизируйте функцию, которая принимает массив объектов с ограничением на Generics, где каждый объект должен соответствовать интерфейсу Identifiable. Не забывайте, что find может вернуть undefined
//   function findById<T extends Identifiable>(items: T[], id:number): T | undefined {
//     return items.find(item => item.id === id);
//   }

//   // Используйте эту функцию для поиска пользователя по id в массиве пользователей
//   const users: EntityUser[] = [
//     { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
//     { id: 2, name: "Bob", email: "bob@example.com", age: 30 }
//   ];
//   const user = findById(users, 1);
//   //---------------------------------------------------------------------------------






//---------------------------------------------------------------------------------
// Задание 7: Работа с обобщённой функцией поиска в массиве
// Цель: Создать функцию, которая может искать элементы в массиве по разным критериям, включая составные типы и условия с использованием нескольких параметров в Generics.
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
function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => item[key] === value);
}

// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Сперва проверить наличие ключа в объекте, если да - проверить есть ли такое значение
function findInArray2<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => {
        if (item.hasOwnProperty(key)) {
            if (item[key] !== undefined) {
                return item[key] === value;
            }
        }
        return undefined;
    });
}


// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
//Можно использовать Partial<> для передачи нескольких ключей
function findInArray3<T>(items: T[], keys: Partial<T>): T | undefined {
    return items.find(item => fun1(item, keys));
}
function fun1<T>(item: T, keys: Partial<T>): boolean {
    return Object.keys(keys).every(key => fun2(item, keys, key))
}
function fun2<T>(item: T, keys: Partial<T>, key: string): boolean {
    const k = key as keyof T;
    return item[k] === keys[k];
}


// Данные для тестирования функции
const userss: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

//Поиск по нескольким ключам
const user123 = findInArray3(userss, { name: "Alice", age: 25 });
console.log(user123);


const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
];

const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
];

// 1. Найдите пользователя по имени "Alice".
const foundUser = findInArray(userss, "name", "Alice");
// 2. Найдите продукт с ценой 500.
const foundProduct = findInArray(products, "price", 500);
// 3. Найдите книгу по автору "Another One".
const foundBook = findInArray(books, "author", "Another One");
//---------------------------------------------------------------------------------






//---------------------------------------------------------------------------------
// Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
// Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, функцию для их преобразования и функцию для фильтрации результатов. 
// Функция должна использовать два параметра Generic: один для типа элементов входного массива, а другой для типа элементов выходного массива.

// Описание задачи: Функция mapAndFilter должна выполнить следующие функции:
// Применить функцию преобразования ко всем элементам входного массива.
// Фильтровать преобразованные элементы с помощью предоставленной функции фильтрации.
// Возвращать новый массив с результатами, которые прошли фильтрацию.
interface Person {
    name: string;
    age: number;
}

interface Adult {
    fullName: string;
    age: number;
}

// Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
function mapAndFilter<T, U>(items:T[], transform: (item:T)=>U, filter: (item:U)=>boolean): U[] {
    return items.map(transform).filter(filter);
}

// Пример данных
const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];

// Пример использования функции mapAndFilter
const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18
);

// Выведите результаты для проверки
console.log(adults);


//Вопросы после реализации:
// Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
function mapAndFilter2<T, U>(items:T[], transform: (item:T)=>U, filter: (item:U)=>boolean, sort: (first:U, second:U)=> number): U[] {
    return items.map(transform).filter(filter).sort(sort);
}

const adults: Adult[] = mapAndFilter2(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18,
    (first, second) => first.age - second.age,
);

// [ { fullName: 'Alice', age: 24 }, { fullName: 'Charlie', age: 32 } ]


// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.

// Типы T и U могуть быть полнсотью разными, могут иметь общие характеристики. Один из типов может быть подтипом другого и иметь точно такой же функционал или расширять его.


//---------------------------------------------------------------------------------
