// creating variables to select the elements
//intialising X as the first player
const turns = document.getElementById('turn')
const restart=document.querySelector('button');
//winning combo for the tictactoe game 
const winningCombo = [{combo:[1,2,3], strikeClass: "strike-row-1"},
                      {combo:[4,5,6], strikeClass: "strike-row-2"},
                      {combo:[7,8,9], strikeClass: "strike-row-3"},
                      {combo:[1,4,7], strikeClass: "strike-column-1"},
                      {combo:[2,5,8], strikeClass: "strike-column-2"},
                      {combo:[3,6,9], strikeClass: "strike-column-3"},
                      {combo:[1,5,9], strikeClass: "strike-diagonal-1"},
                      {combo:[3,5,9], strikeClass: "strike-diagonal-2"}]


const strike= document.getElementById('strike');                    
const divs= document.getElementsByClassName('box');
const gameStatus= document.getElementById('winner-draw')
const boxes =  [...divs]
//have palyer X as the first palyer always 
let currentPlayer = 'X';
let board = Array(9).fill('');
//create a empty array with a length of 9 
let gameon = false;
// choose a boolean value false  which means the game is not started  when it turns true it means game started
//functions for the game 
//1. to start game- gamestart();
//2.when boxes are getting clicked what should be done.boxisclicked();
//3.changing the status of the box updatebox();
//4.turns between the players changeplayer();
//5.checking for the winner checkingwinner()
//6.restarting the game restart();


const gameStart=() => {
    gameon= true;
    gameStatus.textContent = ` ${currentPlayer} turn`;
    //adding a event listener whenever there is a click in any of the 9 boxes with a callback function of boxisclicked()
    
    boxes.forEach(box => box.addEventListener('click', boxIsClicked));
    restart.addEventListener('click', reset );
   
}

function boxIsClicked(){
   
    
    let indexOfBox =  this.getAttribute('id')
    if(board[indexOfBox]!=''|| !gameon){
             return;
    }
    updateBox(this, indexOfBox);
    
    checkingWinner();
}

//  function to change turns between 2 players
//if the current player is "X" then change it to "O" else its "X" and update the status of who's turn is to  play
//call this func when u r checking for winning 
function  changePlayer(){
      if(currentPlayer ==='X'){
        currentPlayer="O";
      }
      else {
        currentPlayer="X";
      }
      gameStatus.textContent = `Player  ${currentPlayer}'s turn`
}

function updateBox(box, i){
    board[i]= currentPlayer;
    box.textContent= currentPlayer;
    
 }

 function checkingWinner(){
    let win=false;
        for(const winningCombination of winningCombo){
            const {combo,strikeClass} = winningCombination;
            const box1 = board[combo[0]-1];
            const box2 = board[combo[1]-1];
            const box3 = board[combo[2]-1];
            if(box1 == "" || box2 == "" || box3 == "")  {
                            continue;
                         } 
            
            if(box1!=null && box1===box2 && box2===box3 && box3===box1){
                strike.classList.add(strikeClass);
                win=true;
                break;
                //gameOver(box1);
            }
        }
        if(win==true){
                    gameStatus.textContent = `Congratualtions...... player ${currentPlayer} has won`
                       gameon = false;
                }
        
                else if(board.includes('')==false){
        
                    gameStatus.textContent = "Its a draw!!!"
                    gameon= false;
                }
                else {
                    changePlayer();
                }
        
    //     let win = false;
    //     for(let i=0;i<winningCombo.length;i++){
    //         let conditionToWin = winningCombo[i];
    //         let box1= board[conditionToWin[0]];
    //         let box2= board[conditionToWin[1]];
    //         let box3= board[conditionToWin[2]];
    //     if(box1 == "" || box2 == "" || box3 == "")  {
    //             continue;
    //          }  
            
    //     if (box1 == box2 && box2 == box3 && box3 == box1){
    //     win=true;
    //     break;   
    //  }
      
    //     }

    //     if(win==true){
    //         gameStatus.textContent = `Congratualtions...... player ${currentPlayer} has won`
    //            gameon = false;
    //     }

    //     else if(board.includes('')==false){

    //         gameStatus.textContent = "Its a draw!!!"
    //         gameon= false;
    //     }
    //     else {
    //         changePlayer();
    //     }
        

 }
 // for restart let the current player be "X" again and remove the classes for strikes and fill the board again with 9
 //empty places and remove the text content in the boxes to empty

 function reset(){
        currentPlayer="X"  ;
        strike.className = "strike";
        board= Array(9).fill('');   
    boxes.forEach(box=> box.textContent="");
    gameStatus.textContent = ` player ${currentPlayer}'s turn`
    gameon= true;
            
 }
 gameStart();