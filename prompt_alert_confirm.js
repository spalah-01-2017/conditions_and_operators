var MINIMAL_AGE = 21;
var REDIRECT_PAGE = 'https://www.google.com';

var userInput = prompt("Сколько тебе лет?");
var userAge = parseInt(userInput, 10);
var userConfirm = false;

if (isNaN(userAge)) {
    alert('Вводи только цифры');
} else {
    if (userAge >= MINIMAL_AGE) {
        userConfirm = confirm('Подтверждаешь переадресацию на ' + REDIRECT_PAGE + '?');
        if(userConfirm) {
            window.location = REDIRECT_PAGE;
        }
        
    } else {
        alert('Тебе еще рано сюда');
    }
}
