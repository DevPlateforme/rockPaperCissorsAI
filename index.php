<?php
    
    require 'header.php';

?>



   
   <button onclick='rockPlayed()'>Pierre</button>

   <button onclick='paperPlayed()'>Feuille</button>

   <button onclick='scissorsPlayed()'>Ciseaux</button>


   </br>
   </br>
  

   <div id='aiMove'>
   
   </div>





<script>


     var rock = 'rock';
     var paper = 'paper';
     var scissors = 'scissors'; 

    
     var gameStep = 0;

     var aiMoveHTML = document.getElementById('aiMove');

     //every move beats the move at its right, and is beaten, by the one at its left (considering the one at the right of scissors is paper)

     var moveList = [paper, rock , scissors];


     var victory = 'victory';

     var loss = 'loss';

     var draw = 'draw';



    
     var result;

     var lastResult;

     var lastPlayerMove;

     var lastAiMove;



           function rockPlayed(){

               aiPlay(rock);
           }
        
           function paperPlayed(){

               aiPlay(paper);


            }

            function scissorsPlayed(){

                aiPlay(scissors);


            }


        function aiPlay(playerMove){


                let aiMove;

                //the ai takes the move, and answers accordingly.

                //On the first move, the AI returns a random Move

                if(gameStep == 0 || lastResult == draw){

                    //rand is a random number between 0 and 2

                    rand = Math.floor(Math.random() * 3);

                     
                     aiMove = moveList[rand];



                } else if(lastResult == victory){

                    //if the AI won, the opposite player will change. So, the AI will play the move which would beat what it just played.
                    //Meaning, the AI plays what the player lastly played.
                    
                    aiMove = lastPlayerMove;


                }  else if(lastResult == loss) {

                    //if the AI loss , the other player will play the same move. It means the AI will simply play the move that didn't come out
                    
                    //play what's not what the playerLast Played, neither what the AI lastly played.
                        
                    for(i = 0; i < moveList.length ; i++){

                        if((moveList[i] != lastPlayerMove) && (moveList[i] != lastAiMove) ){

                            //Knowing the player just won, the Ai should play the move that isn't equal to any of the 2 moves that just came out

                              aiMove = moveList[i];

                        }

                        
                    }
 
                }

                
           //check the result 

          //we need to get the two result, and know in what case we are


           let movesPlayed = [aiMove, playerMove];

           console.log(movesPlayed);

        


           if(movesPlayed[0] == movesPlayed[1]){

               result = draw;

           } else if ( movesPlayed == [rock,paper] || movesPlayed == [paper, rock] ){

            if(aiMove == paper){

                result = victory;

              } else {

                 result = loss;
              }


            } else if ( movesPlayed == [rock, scissors] || movesPlayed == [scissors, rock] ){

             if(aiMove == rock){

               result = victory;

             } else {

               result = loss;
           }



           } else if ( movesPlayed == [paper,scissors] || movesPlayed == [scissors, paper] ){
            
            
             if(aiMove == scissors){

               result = victory;


             } else {

                result = loss;

            }



         }


           lastResult = result;
  



           //if one of the moves is rock, if the other move is move[index - 1], then the first move





             aiMoveHTML.innerHTML = aiMove ;


             //the 'lastmoves' variables are updated

             lastAiMove = aiMove;

             lastPlayerMove = playerMove;

             console.log( lastAiMove);

             console.log(result);


             
             gameStep += 1;



        }

        








</script>




<?php

    require 'footer.php';

?>
