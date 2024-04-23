export function checkUserLogin(user) {
    let checkUser = prompt('Введите ваше имя', '');

    if (checkUser && checkUser in users) {
        let password = prompt ('Введите пароль', '');

        if (password && password === users[checkUser]){
            alert('Вы вошли');
        } else {
            alert('Неправельный пароль');
        }
    } else {
        ('Такого пользователяя не сущетвует');
    }
}