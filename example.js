/*if (condition) {
    statement_1;
} else {
    statement_2;
}*/

var now = new Date();
var today = null;
switch(now.getDay()) {
    case 1:
        today = 'понедельник';
        break;
    case 2:
        today = 'вторник';
        break;
    case 3:
        today = 'среда';
        break;
    case 4:
        today = 'четверг';
        break;
    case 5:
        today = 'пятница';
        break;
    case 6:
        today = 'суббота';
        break;
    default:
        today = 'воскресенье';
}
console.log('Сегодня ' + today + '.');