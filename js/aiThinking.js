
function  startAiThinking(){




    //return, for the first move, a random var in the symbols array

    
    //IN CASE OF DRAW

    if(turn == 0 || champion == noChampion){
         let randNum = Math.floor(Math.random()*3)+1;

        newAiMove = symbolsArray[randNum];

       
    } else {


        //DEPENDING ON THE LAST MOVE PLAYED BY THE OPPONENT, THE AI WILL BEHAVE DIFFERENTLY 



         //IF HUMAN LOSS : STATISTICALLY , THE PLAYER WILL PROBABLY CHANGE, AND TAKE A MOVE THAT DIDNT COME OUT. SO , WE COPY THE PLAYER



          if(champion == Ai){


            //FIND A MOVE THAT ISNT NEITHER OF THE LAST MOVES MADE


             newAiMove = lastHumanPlayerMove;





       
         //IF HUMAN VICTORY : STATISTICALLY, THE PLAYER WILL PROBABLY PLAY AGAIN WITH THE SAME MOVE => PLAY THE MOVE THAT THE PLAYER JUST PLAYED 

 

        } else if ( champion == humanPlayer ) {     
            
            
            
            for(i=0; i < symbolsArray.length ; i++){


                if(symbolsArray[i] != lastHumanPlayerMove && symbolsArray[i] != lastAiMove  ){


                     newAiMove = symbolsArray[i];


                }



          }

     
        
       }


     

    //Once the AI is done thinking, it renders a value, and the verdict is given.







    }

    

    turn++;

    return newAiMove;
    

}