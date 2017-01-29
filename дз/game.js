function play(){
	userChoiceNumber = +document.getElementById('userChoice').value;
	enemyChoiceNumber = Math.floor(Math.random() * (3 - 0)) + 0;
	userChoice = numberToString(userChoiceNumber);
	enemyChoice = numberToString(enemyChoiceNumber);
	document.getElementById("lastUserChoice").innerHTML = userChoice;
	document.getElementById("lastEnemyChoice").innerHTML = enemyChoice;
	if(userChoiceNumber === 2 && enemyChoiceNumber === 1 || userChoiceNumber === 1 && enemyChoiceNumber === 0 || userChoiceNumber === 0 && enemyChoiceNumber === 2){
		result = 'Победа';
		victories = ++document.getElementById('victories').innerHTML;
	} else if(userChoiceNumber === enemyChoiceNumber){
		result = 'Ничья';
	} else{
		result = 'Поражение';
		victories = ++document.getElementById('losses').innerHTML;
	}
	document.getElementById("result").innerHTML = result;
	alert(result);
}

function numberToString(ChoiceNumber){
	switch(ChoiceNumber){
		case 0:
			Choice = 'Бумага';
			break;
		case 1:
			Choice = 'Ножницы';
			break;
		default:
			Choice = 'Камень';
	}
	return Choice;
}




	
