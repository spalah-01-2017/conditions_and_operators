var CREDIT_SCORE_MIN = 70;
var CREDIT_SCORE_SUM_LIMIT = 200000;

var clientCreditScore = prompt('Введите кредитный балл:');
var clientCreditSum = prompt('Введите сумму кредита:');

var isValidScore = clientCreditScore >= CREDIT_SCORE_MIN;  // Выполянется проверка на верный кредитный счет, введеный клиентом счет сравнивается с минимальным допустимым счетом
var isValidSum = clientCreditSum <= CREDIT_SCORE_SUM_LIMIT;

var positiveDecisionText = 'Надежный клиент с кредитным баллом ' + clientCreditScore + '. Кредит на сумму ' + clientCreditSum + 'подтвержден.';
var negativeDecisionText = 'Ненадежный клиент с кредитным баллом ' + clientCreditScore + '. Заявка отклонена.';
var needConsiderationText = 'Заявка требует рассмотрения. Кредитный балл: ' + clientCreditScore + '. Запрошен кредит на сумму: ' + clientCreditSum + '.';


        if(isValidScore && isValidSum) {
            alert(positiveDecisionText);
        } else if (!(isValidSum || isValidScore)) {
            alert(negativeDecisionText);
        } else {
            alert(needConsiderationText);
        }