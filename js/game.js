
         var countSymboleHTML = document.getElementById('countSymbol');

         var humanChoiceHTML = document.getElementById('cisorsBtn');
         
         var rockBtn = document.getElementById('rockBtn');

         var paperBtn = document.getElementById('paperBtn');

         var cisorsBtn = document.getElementById('cisorsBtn');





          //verdicts




        var victory = 'victory';

        var loss = 'loss';

        var draw = 'draw';



        var self = 'self';


         var rock = {index: 0 , verdictsArray : [self, loss, victory] , name: "rock"};

         var paper = {index: 1 , verdictsArray : [victory, self, loss], name : "paper"};

         var cisors = {index: 2, verdictsArray : [loss, victory, self], name: "cisors"};



         var symbolsArray = [rock, paper, cisors];

         var symbolIndex;



         //PLAYERS


         var humanPlayer = 'human';

         var Ai = 'Ai';


         var noChampion = 'no champion';


         var champion;





         var turn = 0;


         var newHumanMove;


         var lastHumanPlayerMove;




         var messageInterval;


         var newAiMove;




         


         




     //SET INTERVAL 'ROCK PAPER CISORS'

       

     function launchInterval(){


        symbolIndex = 0;

        countSymboleHTML.innerHTML = symbolsArray[symbolIndex].name;


        symbolIndex++;


         messageInterval = setInterval(function(){ 


            if( symbolIndex >= symbolsArray.length){

                clearInterval(messageInterval);

                startAiThinking();

                play(newHumanMove, newAiMove);


            } else {


                countSymboleHTML.innerHTML = symbolsArray[symbolIndex].name;

                symbolIndex++;

            }


         }, 1000);


          

     }
    




     //ADD 3 EVENT LISTENER
      





     rockBtn.addEventListener("mouseover", function(){newHumanMove = rock});
     paperBtn.addEventListener("mouseover", function(){newHumanMove = paper});
     cisorsBtn.addEventListener("mouseover", function(){newHumanMove = cisors});












     function play(humanMove, AiMove){



        //NOW, WE ARE GOING TO TAKE THE INPUTS OF BOTH PLAYERS , AND WE ARE GOING TO COMPARE THEM.


        //HOW TO COMPARE THOSE VALUES IN CONSTANT TIME?


        //MEANING

        

        alert('human played ' + newHumanMove.name);
        alert('Ai played' + AiMove.name);



        if(humanMove != AiMove){


             if(AiMove.verdictsArray[humanMove.index] == loss){
                        
                      
                 //human victory

                 alert('human victory = AI will take a move that didnt come out and wont play either ' + humanMove.name + ' either ' + AiMove.name);

                 champion = humanPlayer;


             } else {

                
                alert('human loss = AI will copy the player and play ' + humanMove.name );

                champion = Ai;



                  //human defeat

             }

               

          } else {



            alert('draw');

            champion = noChampion;

            


            //DRAW

        }





        //THE HUMAH PLAY IS STORED


        lastHumanPlayerMove = humanMove;

        lastAimove = AiMove;

   }
     








     













     
    
        