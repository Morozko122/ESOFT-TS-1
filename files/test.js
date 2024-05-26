// Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
function getUserFieldType(user, key) {
    return typeof user[key];
}
var testuser = {
    id: 1,
    name: 'BB',
    email: 'BB@bb.com',
    age: 99
};
// Используйте эту функцию для получения типа поля 'age' и 'name'
var ageType = getUserFieldType(testuser, 'age');
var nameType = getUserFieldType(testuser, 'name');
console.log(ageType);
console.log(nameType);
