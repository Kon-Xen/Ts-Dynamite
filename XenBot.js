class Bot {

    makeMove(gamestate) {

        let rounds = 0;
        
        let player = {
            'dynamites': 0,
            'waterBlns': 0,
            'scissors': 0,
            'papers': 0,
            'rocks': 0
        };

        let player_1 = player;
        let player_2 = player;
        //move is unique

        // Look at previous round (round - 1) and record what
        // each player has played.

        switch (gamestate.rounds[(rounds - 1)].p1) {
            case 'D':
                player_1.dynamites += 1;
                break;
            case 'W':
                player_1.waterBlns += 1;
                break;
            case 'S':
                player_1.scissors += 1;
                break;
            case 'P':
                player_1.papers += 1;
                break;
            case 'R':
                player_1.rocks += 1;
                break;
        }

        switch (gamestate.rounds[(rounds - 1)].p2) {
            case 'D':
                player_2.dynamites += 1;
                break;
            case 'W':
                player_2.waterBlns += 1;
                break;
            case 'S':
                player_2.scissors += 1;
                break;
            case 'P':
                player_2.papers += 1;
                break;
            case 'R':
                player_2.rocks += 1;
                break;
        }

        // if statements to prevent overuse of dynamite and or waterballoons
        // code will have to be nested inside these?
        if (player_1.dynamites >= 100) {
            //don't play 'D'
        }

        if (player_2.dynamites >= 100) {
            // don't play 'W'
        }

        /* 
        STRATEGY:
        if last round was a draw, the value of the current round increases by 1.
        SO: as round value increases, need for dynamite goes up.
        BUT: Likelyhood of p2 playing dynamite goes up, so waterballoon could be more valueable...

        OUTLINE:
        1. Play randomly in opening ??? rounds.
        2. Note opponents record. Are they more likely to play a certain hand?
        3. Assume they are playing randomly?
        4. Assume that over the course of the match (2000 rounds), their pattern will settle to around 33/33/33 (plus dynamites etc.)
        5. As one "play" becomes more common, assume other 2 "plays" will become more likely. increase likelyhood of playing winning "play"
        6. Increase likelyhood of dynamite when roundWeight increases.
        7. Also increase likelyhood of waterballoon when roundValue increases??

        */

        //creating variable for round value
        var roundWeight = 1;
        
        if (gamestate.rounds[(rounds - 1)].p1 === gamestate.rounds[(rounds - 1)].p2) {
            roundWeight += 1;
        }
        else {
            roundWeight = 1;
        }

        let IAm = ""; // needs a function to determine

        // who am I [ ]
        // count rounds [V]
        // keep score of all that is played ? [ ]
        // how do we know who is which player?. []
        // count the dynamites / compare to what was played all ready

        // compare how many pl1/pl2 has left compared to how many dynamites I have.

        console.log(gamestate.rounds[1])//debugging
        // function decide - use the data above to reach decision and paas it ot the play function

        // function play - takes input from decision
        function play(){
            return 'R'
        }
        rounds = +1;
        return play();

    }
}

module.exports = new Bot();
