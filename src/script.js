'use strict';
//HTML
const gameNew = document.querySelector(".startBtn"); //deklaracja stałej gameNew - znajdowanie elementu o klasie "startBtn"
const userScoreSpan = document.getElementById('userScore'); //deklaracja stałej userScoreSpan - znajdowanie elementu o id "userScore"
const compScoreSpan = document.getElementById('compScore'); //deklaracja stałej compScoreSpan - znajdowanie elementu o id "compScore"
const resetBtn = document.querySelector('.reset'); //deklaracja stałej resetBtn - znajdowanie elementu z klasą 'reset'
const choices = ['KAMIEŃ', 'NOŻYCE', 'PAPIER']; //deklaracja stałej choises - tworzenie tablicy z elementami gry
var userNewScore = 0; //ustawienie początkowego stanu na 0;
var compNewScore = 0; //ustawienie początkowego stanu na 0;
var setGame; //deklaracja zmiennje 'setGame', przecho

const compMove = function(){ //funkcja losująca liczbę 
  const numberRandom = Math.floor(Math.random() * 3); //deklaracja stałej numberRandom - funkcja losująca
  return choices[numberRandom]; //zwracanie wyniku do computerChoice - wyciągnięcie z tablicy odpowiedniego parametru
}
const compareChoices = function(choice, computerMove){ //deklaracja zmiennej scoreGame - stworzenie funkcji liczącej wygrane użytkownika i komputera
  var playerChoice = choice;
  var computerChoice = computerMove;
  if (playerChoice === 'NOŻYCE' && computerChoice === 'PAPIER' || 
      playerChoice === 'KAMIEŃ' && computerChoice === 'NOŻYCE' || 
      playerChoice === 'PAPIER' && computerChoice === 'KAMIEŃ'){
        output.innerHTML = '<br>WYGRAŁEŚ: Zagrałeś: ' + playerChoice + ', Komputer zagrał: ' + computerChoice + '<br>';  
        userNewScore++; //dodanie jeden do wyniku użytkownika
        userScore.innerHTML = userNewScore; //wyświetlenie wyniku użytkownika
        compScore.innerHTML = compNewScore; //wyświetlenie wyniku komputera      
 }
  else if (playerChoice === 'PAPIER' && computerChoice === 'NOŻYCE' || 
           playerChoice === 'KAMIEŃ' && computerChoice === 'PAPIER' || 
           playerChoice === 'NOŻYCE' && computerChoice === 'KAMIEŃ'){
            output.innerHTML = '<br>PRZEGRAŁEŚ: Zagrałeś: ' + playerChoice + ', Komputer zagrał: ' + computerChoice + '<br>';        
            compNewScore++, //dodanie jeden do wyniku komputera
            userScore.innerHTML = userNewScore; //wyświetlenie wyniku użytkownika
            compScore.innerHTML = compNewScore; //wyświetlenie wyniku komputera
            
  } else if(playerChoice === computerChoice){
      output.innerHTML = '<br>REMIS: Zagrałeś ' + playerChoice + ', Komputer zagrał: ' + computerChoice + '<br>'; 
  }
}
const endGame = function(){ //deklaracja stałej endGame - stworzenie funkcji
  if (userNewScore === setGame){ //jesli wynik użytkownika jest identyczny jak zadeklarowana ilość rund
    rounds.innerHTML = alert('Wygrałeś! Rezultat: ' + userNewScore + ' - ' + compNewScore + '. Uruchom nową grę, aby rozpocząć jeszcze raz.'); //zwrócenie komunikatu
    stopButtons(); //wywołujemy funckę stopButtons - wyłączenie guzików
    
  }else if (compNewScore === setGame){ //jesli inaczej, wynik komputera jest identyczny jak zadeklarowana ilość rund
    rounds.innerHTML = alert('Przegrałeś! Resultat: ' + userNewScore + ' - ' + compNewScore + '. Uruchom nową grę, aby rozpocząć jeszcze raz.'); //zwrócenie komunikatu
    stopButtons(); //wywołujemy funckę stopButtons - wyłączenie guzików
    }    
}
const stopButtons = function(){ //deklaracja stałej stopButtons - stworzenie funckji wyłączającej przyciski
  paper.disabled = !paper.disabled; 
  rock.disabled = !rock.disabled;
  scissors.disabled = !scissors.disabled;
}
resetBtn.addEventListener('click', function () {
  setGame = null;
  userNewScore = 0;
  userScoreSpan.innerHTML = userNewScore;
  compNewScore = 0;
  compScoreSpan.innerHTML = compNewScore;
  result.innerHTML = 'Zagrajmy razem!';
  rounds.innerHTML = "Zresetowałeś. Kliknij na Nową grę!";
  output.innerHTML = "";
});
gameNew.addEventListener('click', function(){ ///użycie funkcji 'addEventListener' na elemencie gameNew, która przyjmuje argumenty: rodzaj eventu i funkcję podczas wykrycia eventu
  stopButtons();
  setGame = parseInt(window.prompt('Ile rund chcesz grać?')); //dodanie do zadeklarowanej zmiennej 'setGame' prompta
  rounds.innerHTML = 'Gra uslalona na rund: ' + setGame; //zwrócenie ustalonej ilości rund
  endGame(); //wywołanie funkcji endGame
  output.innerHTML = "";
});
const call = function(choice){ //deklaracja stałej call - funkcja z argumentem choice
  const computerMove = compMove(); //wywołanie funkcji compMove
  compareChoices(choice, computerMove); //wywołanie funkcji scoreGame
  endGame(); //wywołanie funkcji endGame
}  
paper.addEventListener('click', function(){ //użycie funkcji 'addEventListener' na elemencie 'paper', która przyjmuje argumenty: rodzaj eventu i funkcję podczas wykrycia eventu
  call('PAPIER');
});  
rock.addEventListener('click', function(){ //użycie funkcji 'addEventListener' na elemencie 'rock', która przyjmuje argumenty: rodzaj eventu i funkcję podczas wykrycia eventu
  call('KAMIEŃ');
});  
scissors.addEventListener('click', function(){ ///użycie funkcji 'addEventListener' na elemencie 'scissors', która przyjmuje argumenty: rodzaj eventu i funkcję podczas wykrycia eventu
  call('NOŻYCE');
});
stopButtons();






