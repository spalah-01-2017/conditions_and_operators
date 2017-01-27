var userChoice = prompt('Введите камень, ножницы или бумага', ''),
programChoice = Math.random();

if ((userChoice === 'камень') || (userChoice === 'ножницы') || (userChoice === 'бумага')) {
	if (programChoice < 0.34) {
		programChoice = 'камень';
	} else if (programChoice < 0.68) {
		programChoice = 'ножницы';
	} else {
		programChoice = 'бумага';
	}
	if (userChoice == programChoice) {
		alert('Ничья');
		userChoice = prompt('Введите камень, ножницы или бумага', '');
		programChoice = Math.random();
		
		if (programChoice < 0.34) {
			programChoice = 'камень';
		} else if (programChoice < 0.68) {
			programChoice = 'ножницы';
		} else {
			programChoice = 'бумага';
		}
		if ((userChoice == 'камень' && programChoice == 'ножницы') || (userChoice == 'ножницы' && programChoice == 'бумага') || (userChoice == 'бумага' && programChoice == 'камень')) {
			alert('Победа');
		} else {
			alert('Поражение');
		}
	} else if ((userChoice == 'камень' && programChoice == 'ножницы') || (userChoice == 'ножницы' && programChoice == 'бумага') || (userChoice == 'бумага' && programChoice == 'камень')) {
		alert('Победа');
	} else {
		alert('Поражение');
	}
} else {
	alert('Вы ввели что-то неверно!');
	userChoice = prompt('Введите камень, ножницы или бумага', '');
	programChoice = Math.random();

	if (programChoice < 0.34) {
		programChoice = 'камень';
	} else if (programChoice < 0.68) {
		programChoice = 'ножницы';
	} else {
		programChoice = 'бумага';
	}
	if (userChoice == programChoice) {
		alert('Ничья');
	} else if	((userChoice == 'камень' && programChoice == 'ножницы') || (userChoice == 'ножницы' && programChoice == 'бумага') || (userChoice == 'бумага' && programChoice == 'камень')) {
		alert('Победа');
	}  else {
		alert('Поражение');
	}
}