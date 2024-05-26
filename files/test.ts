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
console.log(ageType);
console.log(nameType);