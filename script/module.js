// script/main.js
import { checkUserLogin } from "./auth";

//объект пользователей 
const users = {
    admin: 'root',
    user: '123'
};

//Вызов функции для проверки пользователя
checkUserLogin(users);