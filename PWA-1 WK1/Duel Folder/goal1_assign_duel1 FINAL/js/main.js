/**Edward Snyder
 * 9/8/14
 * Assignment 1 - Duel 1
 *
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){
    console.log('in the fight function'); //comes up from line 82 and begins to loop
        //console.log will make sure it's going from line 82 to line 13

    console.log("FIGHT!!!"); //checking to ensure sync w/text editor

    //player name
    var playerOneName = "Spiderman";  //variables giving players names

    var playerTwoName = "Batman";  //variable giving players name

    //player damage
    var player1Damage = 20; //math.floor&math.random (0-1) used to generate damage for
    var player2Damage = 20;   //both fighters damage

    //player health
    var playerOneHealth = 100; //math.floor & math.random again used to generate random nums
    var playerTwoHealth = 100; //for fighters health

    //initiate round
    var round=1;      //Should be round 1  fight begins at round one and is i++ to round 9

    function fight(){

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        //concatanating the variables above line 20 -> 32

        for (var i=0; i < 10; i++)   //FOR loop  10 is the 10 rounds, i++ adds 1 to i
       { //for loop, using concat to generate "score" per fighter

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; //math.random again used for generating number
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1; //key used to inflict damage on playerOne
            playerTwoHealth-=f2; //key used to inflict damage on playerTwo

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")//if no winner, rounds continue until the 10th round
            {     //using concat on line 61
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break; //if rounds run out and no players health or damage 1< no winner is declared and
                //the loop is broken

            };

          };
    };

    function winnerCheck(){  //function is called based on both players health being <1
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1) //if player 1 and player two health is 0 both die
        {
            result = "You Both Die"; // both die based on health for both at <1
        } else if(playerOneHealth<1){  //if one player is 1 or greater than they win
            result =playerTwoName+" WINS!!!" // result (alert) playerTwo WINS!!
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!" //result (alert) playerOne WINS
        };
       return result;
    };

    /*******  The program gets started below *******/
    console.log('program starts') //Calls fight function (line 82 which sends it to line 34)
    fight(); //Function is called to START the game

})();