import React from 'react';

import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';

import './snakes-and-ladders.styles.scss';

// icons for player one in normal, fading in, and fading out situtions
const playerOne = `<i class='bi bi-person-fill text-light bg-info px-1 border rounded-2 border-light fade-in-fwd'></i>`
const playerOneIn = `<i class='bi bi-person-fill text-light bg-info px-1 border rounded-2 border-light text-flicker-in-glow-2'></i>`
const playerOneOut = `<i class='bi bi-person-fill text-light bg-info px-1 border rounded-2 border-light text-flicker-in-glow'></i>`

// icons for player two in normal, fading in, and fading out situtions
const playerTwo = `<i class='bi bi-person-fill text-light bg-danger px-1 border rounded-2 border-light fade-in-fwd'></i>`
const playerTwoIn = `<i class='bi bi-person-fill text-light bg-danger px-1 border rounded-2 border-light text-flicker-in-glow-2'></i>`
const playerTwoOut = `<i class='bi bi-person-fill text-light bg-danger px-1 border rounded-2 border-light text-flicker-in-glow'></i>`

// icons for player one dice in different situations
const oneDiceCube = `<div><i class="bi bi-box"></i></div>`
const oneDiceOne = `<div class="animated flip"><i class="bi bi-dice-1-fill"></i></div>`
const oneDiceTwo = `<div class="animated flip"><i class="bi bi-dice-2-fill"></i></div>`
const oneDiceThree = `<div class="animated flip"><i class="bi bi-dice-3-fill"></i></div>`
const oneDiceFour = `<div class="animated flip"><i class="bi bi-dice-4-fill"></i></div>`
const oneDiceFive = `<div class="animated flip"><i class="bi bi-dice-5-fill"></i></div>`
const oneDiceSix = `<div class="animated flip"><i class="bi bi-dice-6-fill"></i></div>`

// icons for player two dice in different situations
const twoDiceCube = `<div><i class="bi bi-box"></i></div>`
const twoDiceOne = `<div class="animated flip"><i class="bi bi-dice-1-fill"></i></div>`
const twoDiceTwo = `<div class="animated flip"><i class="bi bi-dice-2-fill"></i></div>`
const twoDiceThree = `<div class="animated flip"><i class="bi bi-dice-3-fill"></i></div>`
const twoDiceFour = `<div class="animated flip"><i class="bi bi-dice-4-fill"></i></div>`
const twoDiceFive = `<div class="animated flip"><i class="bi bi-dice-5-fill"></i></div>`
const twoDiceSix = `<div class="animated flip"><i class="bi bi-dice-6-fill"></i></div>`

const playAgainBtn = 
`<div>
    <button 
        class='btn btn-success d-flex justify-content-center align-items-center fs-4 text-flicker-in-glow'
        type="button"
        onClick={location.reload()}
    >
        Play Again
    </button>
</div>`

class SnakesAndLadders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hint: "Let's Start! Player One Roll", //hint for all players
            oneHint: 'Roll', // hint specific for player one 
            twoHint: 'Wait', // hint specific for player two

            oneBoxShadow: '', // helps to change player one panel box shadow based on turn
            twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`, // helps to change player two panel box shadow based on turn

            oneNameInput: '', // player one name entered by user
            oneName: '', // player one name based on the user input

            twoNameInput: '', // player two name entered by user
            twoName: '', // player two name based on the user input


            oneDice: 0, // stores random number for player one in state to be used in other functions 
            oneDiceCube: '', // shows the dice cube, informing player one that turn has changed 
            oneCurrentMove: 0, // stores accumulative number of current move plus latest random number to share with oneMove function to move forward
            onePrevMove: 0, // stores the previous accumulative number to share with oneMove function to remove the track of the last move 
            oneCurrentPos: 0, //moves forward based on oneCurrentMove data in oneMove function
            onePrevPos: 0, //removes the last move based on onePrevMove data in oneMove function
            oneAfterPos: 0, //to be used for jumping or falling effect when snakes or ladders are confronted
            oneBeforePos: 0,  //to be used for jumping or falling effect when snakes or ladders are confronted

            twoDice: 0, // everything in this pary for player two is a repetition of the above for player one
            twoDiceCube: '',
            twoCurrentMove: 0,
            twoPrevMove: 0,
            twoCurrentPos: 0,
            twoPrevPos: 0,
            twoAfterPos: 0, //to be used for jumping or falling effect when snakes or ladders are confronted
            twoBeforePos: 0,  //to be used for jumping or falling effect when snakes or ladders are confronted


            turn: 'one', //changes turn between player one and player two 
            playAgain: '' //shows up after a player wins
        }
    }

    // stores player one name entered by user one
    oneNameHandleChange = (e) => {
        this.setState({
            oneNameInput: e.target.value
        })

    }
    // submits player one name based on user one input
    oneNameHandleSubmit = () => {
        document.getElementById('oneNamePanel').innerHTML = ''
        this.setState({
            oneName: this.state.oneNameInput
        })
    }

    // stores player two name entered by user two
    twoNameHandleChange = (e) => {
        this.setState({
            twoNameInput: e.target.value
        })

    }
    // submits player two name based on user two input
    twoNameHandleSubmit = () => {
        document.getElementById('twoNamePanel').innerHTML = ''
        this.setState({
            twoName: this.state.twoNameInput
        })
    }
    
    // executes when player one clicks the Roll button
    // one is abbr. for player one
    oneDice = () => {

        // executes if it is player one's turn
        if ( this.state.turn === 'one'){
            
            // generates new random number between 1 and 6, inclusive
            const rand =  Math.floor(Math.random() *  6) + 1;

            // shows dice number based on random number
            if ( rand === 1 ) {
                document.getElementById(111).innerHTML = oneDiceOne
            } else if ( rand === 2 ) {
                document.getElementById(111).innerHTML = oneDiceTwo
            } else if ( rand === 3 ) {
                document.getElementById(111).innerHTML = oneDiceThree
            } else if ( rand === 4 ) {
                document.getElementById(111).innerHTML = oneDiceFour
            } else if ( rand === 5 ) {
                document.getElementById(111).innerHTML = oneDiceFive
            } else {
                document.getElementById(111).innerHTML = oneDiceSix
            }

            // situation: player one is not yet in and random number is 6
            // rule: player one moves to number 1 and starts the game
            // rule: plyer one is already rewarded another roll without clicking move button
            // guide: turn is already set to 'one', no need to do anything -- oneMove function will handle it accordingly
            // guide: to begin from square one, oneCurrentMove is set directly to 1 --because random number is 6
            // guide: oneCurrentPose should also be set directly to 1 so that player one automatically enter the game board
            // guide: onePrevMove is set to the oneCurrentMove -- for more info go to onePrevMove in state guidance
            // guide: player two dice is declared 0 in order to change turn in oneMove and twoMove functions
            // guide: to inform change of turn, player two's dice is set to twoDiceCube, default cube showing no number 
            // guide: conditions specific to random number 6 are defined firstly and then for random numbers btw 1 and 5 
            if ( rand === 6 && this.state.oneCurrentMove < 1 ) {
                this.setState({
                    hint: 'player one starts! roll again',
                    oneHint: 'Hooray, roll again',
                    twoHint: 'wait',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    
                    oneDice: rand,
                    oneCurrentMove: 1,
                    oneCurrentPos: document.getElementById(1).innerHTML = playerOne,
                    onePrevMove: this.state.oneCurrentMove,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube, 
                })

            } 
            
            // situation: player one is already in and random number is 6
            // rule: player one moves 6 numbers forward 
            // rule: player one will be rewarded another roll after clicking move --oneMove will handle
            /* guide: oneMove function already set turn to 'one' but it should be changed to empty string 
                in order to prevent rolling the dice for both players and the reward to role once more 
                will be given to player one after clicking move and going ahead 6 square ahead
            */
            /* changing the turn takes place in oneDice, oneMove, twoDice, and twoMove functions because
                in different situtions, each of them should have the access to manage it. 
                In particular, moving automatically when the player enters the board or jumps up the ladders 
                or goes down because of snakes and moving manually in regular situations makes managing turn
                a bit complicated 
            */
            // guide: this rules will remain up to number 94, since 95 + 6 is greater than 100
            else if (rand === 6 && this.state.oneCurrentMove >= 1 && this.state.oneCurrentMove < 94) {
                this.setState({
                    hint: 'player one, move',
                    oneHint: 'lucky, move',
                    twoHint: 'wait',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    oneDice: rand,
                    oneCurrentMove: this.state.oneCurrentMove + rand,
                    onePrevMove: this.state.oneCurrentMove,

                    twoDice: 0, //refer to above condition information for guidance
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube, //refer to above condition for guidance

                    turn: ''
                })

            
            // situation: player one's currentMove is 94 and random number is 6
            // rule: player one moves 6 numbers forward 
            // rule: player one will be rewarded another roll after clicking move --oneMove will handle
            // guide: twoDice/twoCurrentMove functions already set turn to 'one', no need to do anything
            // guide: since player one's current move is 94 and rand number is 6, number one wins when move is clicked
            // guide: current move and previous move are declared directly to prevent any unwanted outcome!
            } else if (rand === 6  && this.state.oneCurrentMove === 94)  {
                this.setState({
                    hint: 'player one, move!',
                    oneHint: 'great, move',
                    twoHint: 'OOOPS!',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    oneDice: rand,
                    oneCurrentMove: 100,
                    onePrevMove: 94,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,
    
                    turn: ''
                })

            // situation: player one's currentMove is greater than 94 and random number is 6, result will be greater than 100
            // rule: player one must remain where it is
            // rule: player one will be rewarded another roll without any need to click move --if oneMove clickd, same result 
            } else if (rand === 6  && this.state.oneCurrentMove > 94)  {
                this.setState({
                    hint: 'player one, roll',
                    oneHint: 'so close, roll again',
                    twoHint: 'wait',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    oneDice: rand,
                    oneCurrentMove: this.state.oneCurrentMove,
                    onePrevMove: 0,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                    turn: 'one'
                })
            // situation: player one is not yet in and random number is not 6
            // rule: player one must cannot enter the game board
            // rule: turn should change to player two
            // guide: no move and random is not allowed to effect anything but oneDice for the sake of turn change managment
            // guide: the following conditions are related to random numbers between 1 and 5 
            } else if (rand !== 6 && this.state.oneCurrentMove < 1) {
                this.setState({
                    hint: 'player two, roll',
                    oneHint: 'wait',
                    twoHint: 'roll',

                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,

                    oneDice: rand,
                    oneCurrentMove: 0,
                    onePrevMove: this.state.oneCurrentMove,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                    turn: 'two'
                })
            // situation: player one is already in and stands somewhere before 95 and random number is not 6
            // rule: player one moves according to oneCurrentMove added by generated random number
            // rule: turn should change to player two
            } else if (rand !== 6 && this.state.oneCurrentMove >= 1 && this.state.oneCurrentMove < 95) {
                this.setState({
                    hint: 'player one, move',
                    oneHint: 'move',
                    twoHint: 'wait',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    oneDice: rand,
                    oneCurrentMove: this.state.oneCurrentMove + rand,
                    onePrevMove: this.state.oneCurrentMove,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                    turn: ''

                })
            // situation: player one is already in and stands either in 95 square or greater and random number is btw 1 and 5
            /* guide: in this situation there will be three conditions, two of them will be managed here and 
                one in oneMove function. These two conditions are more straightforward and less repetetive to be coded. */
            /* guide: these two conditions makes easier to manage the different conditions when the current move plus 
                generated random number equalls to 100, which will be handle in oneMove function. */
            } else if (rand !== 6 && this.state.oneCurrentMove >= 95) {

                // situtaion: if the current move plus generated random number is above 100
                // rule: player one is prevented to move forward
                // rule: turn should change to player two
                if (rand + this.state.oneCurrentMove > 100) {
                    this.setState({
                        hint: 'player two, roll',
                        oneHint: 'wait',
                        twoHint: 'roll',

                        oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                        twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,

                        oneDice: rand,
                        oneCurrentMove: this.state.oneCurrentMove,
                        onePrevMove: 0,

                        twoDice: 0,
                        twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                        turn: 'two'

                        })

                // situtaion: if the current move plus generated random number is above 100
                // rule: player one is prevented to move forward
                // rule: turn should change to player two
                } else {
                    this.setState({
                        hint: 'player one, move',
                        oneHint: 'move',
                        twoHint: 'wait',

                        oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                        twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                        oneDice: rand,
                        oneCurrentMove: this.state.oneCurrentMove + rand,
                        onePrevMove: this.state.oneCurrentMove,

                        twoDice: 0,
                        twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                        turn: ''
                    })
                }
            }
        }
    }

    oneMove = () => {

        if (this.state.oneDice > 0 && this.state.twoDice === 0) {

            if (this.state.oneDice === 6 ) {
                this.setState({
                    hint: 'player one, roll',
                    oneHint: 'roll',
                    twoHint: 'wait',

                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    
                    turn: 'one'
                })
            } else {
                this.setState({
                    hint: 'player two, roll',
                    oneHint: 'wait',
                    twoHint: 'roll',

                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    
                    turn: 'two'
                })
            }

            if (this.state.oneCurrentMove > 1 && this.state.onePrevMove === 1) {
                this.setState({
                    onePrevPos: document.getElementById(1).innerHTML = ' '
                })
            }
        
            if (this.state.oneCurrentMove === 2) {
                this.setState({
                    oneCurrentMove: 23,
                    oneCurrentPos: document.getElementById(2).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(23).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(2).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 4) {
                this.setState({
                    oneCurrentMove: 68,
                    oneCurrentPos: document.getElementById(4).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(68).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(4).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 6) {
                this.setState({
                    oneCurrentMove: 45,
                    oneCurrentPos: document.getElementById(6).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(45).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(6).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 20) {
                this.setState({
                    oneCurrentMove: 59,
                    oneCurrentPos: document.getElementById(20).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(59).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(20).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 30) {
                this.setState({
                    oneCurrentMove: 96,
                    oneCurrentPos: document.getElementById(30).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(96).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(30).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 43) {
                this.setState({
                    oneCurrentMove: 17,
                    oneCurrentPos: document.getElementById(43).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(17).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(43).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 50) {
                this.setState({
                    oneCurrentMove: 5,
                    oneCurrentPos: document.getElementById(50).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(5).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(50).innerHTML = ' '}, 3000)
                })
            }  else if (this.state.oneCurrentMove === 52) {
                this.setState({
                    oneCurrentMove: 72,
                    oneCurrentPos: document.getElementById(52).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(72).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(52).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 56) {
                this.setState({
                    oneCurrentMove: 8,
                    oneCurrentPos: document.getElementById(56).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(8).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(56).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 57) {
                this.setState({
                    oneCurrentMove: 96,
                    oneCurrentPos: document.getElementById(57).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(96).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(57).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 71) {
                this.setState({
                    oneCurrentMove: 92,
                    oneCurrentPos: document.getElementById(71).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(92).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(71).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 73) {
                this.setState({
                    oneCurrentMove: 15,
                    oneCurrentPos: document.getElementById(73).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(15).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(73).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 84) {
                this.setState({
                    oneCurrentMove: 58,
                    oneCurrentPos: document.getElementById(84).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(58).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(84).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 87) {
                this.setState({
                    oneCurrentMove: 49,
                    oneCurrentPos: document.getElementById(87).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(49).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(87).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove === 98) {
                this.setState({
                    oneCurrentMove: 40,
                    oneCurrentPos: document.getElementById(98).innerHTML = playerOneOut,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' ',
    
                    oneAfterPos: document.getElementById(40).innerHTML = playerOneIn,
                    oneBeforePos: setTimeout(function() {document.getElementById(98).innerHTML = ' '}, 3000)
                })
            } else if (this.state.oneCurrentMove < 100) {
                    this.setState({
                        oneCurrentPos: document.getElementById(this.state.oneCurrentMove).innerHTML = playerOne,
                        onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' '
                    })
                
            } else if (this.state.oneCurrentMove === 100) {
                this.setState({
                    hint: 'player one, WINNER!',
                    oneHint: 'Hoooray!!!',
                    twoHint: 'Maybe next time!',

                    oneCurrentPos: document.getElementById(100).innerHTML = playerOne,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = '',
                    
                    oneAfterPos: document.getElementById(111).innerHTML = 'Winner',
                    twoAfterPos: document.getElementById(222).innerHTML = 'Not Lucky',

                    turn: '',
                    playAgain: setTimeout(function() {document.getElementById('hintForAll').innerHTML = playAgainBtn}, 2000)
                })
                

            } 
        }
    }

   // executes when player one clicks the Roll button
    // one is abbr. for player one
    twoDice = () => {

        // executes if it is player one's turn
        if ( this.state.turn === 'two'){
            
            // generates new random number between 1 and 6, inclusive
            const rand =  Math.floor(Math.random() *  6) + 1;
            // shows dice number based on random number
            if ( rand === 1 ) {
                document.getElementById(222).innerHTML = twoDiceOne
            } else if ( rand === 2 ) {
                document.getElementById(222).innerHTML = twoDiceTwo
            } else if ( rand === 3 ) {
                document.getElementById(222).innerHTML = twoDiceThree
            } else if ( rand === 4 ) {
                document.getElementById(222).innerHTML = twoDiceFour
            } else if ( rand === 5 ) {
                document.getElementById(222).innerHTML = twoDiceFive
            } else {
                document.getElementById(222).innerHTML = twoDiceSix
            }

            // situation: player one is not yet in and random number is 6
            // rule: player one moves to number 1 and starts the game
            // rule: plyer one is already rewarded another roll without clicking move button
            // guide: turn is already set to 'one', no need to do anything -- oneMove function will handle it accordingly
            // guide: turn will be declared in case needed for other purposes elsewhere
            // guide: to begin from square one, oneCurrentMove is set directly to 1 --because random number is 6
            // guide: oneCurrentPose should also be set directly to 1 so that player one automatically enter the game board
            // guide: onePrevMove is set to the oneCurrentMove -- for more info go to onePrevMove in state guidance
            // guide: player two dice is declared 0 in order to change turn in oneMove and twoMove functions
            // guide: to inform change of turn, player two's dice is set to twoDiceCube, default cube showing no number 
            // guide: conditions specific to random number 6 are defined firstly and then for random numbers btw 1 and 5 
            if ( rand === 6 && this.state.twoCurrentMove < 1 ) {
                this.setState({
                    hint: 'player two starts! roll again',
                    twoHint: 'Hooray, roll',
                    oneHint: 'wait',
                    
                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    
                    twoDice: rand,
                    twoCurrentMove: 1,
                    twoCurrentPos: document.getElementById(1).innerHTML = playerTwo,
                    twoPrevMove: this.state.twoCurrentMove,

                    oneDice: 0,
                    oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                    turn: 'two'
                })

            } 
            
            // situation: player one is already in and random number is 6
            // rule: player one moves 6 numbers forward 
            // rule: player one will be rewarded another roll after clicking move --oneMove will handle
            /* guide: oneMove function already set turn to 'one' but it should be changed to empty string 
                in order to prevent rolling the dice for both players and the reward to role once more 
                will be given to player one after clicking move and going ahead 6 square ahead
            */
            /* changing the turn takes place in oneDice, oneMove, twoDice, and twoMove functions because
                in different situtions, each of them should have the access to manage it. 
                In particular, moving automatically when the player enters the board or jumps up the ladders 
                or goes down because of snakes and moving manually in regular situations makes managing turn
                a bit complicated 
            */
            // guide: this rules will remain up to number 94, since 95 + 6 is greater than 100
            else if (rand === 6 && this.state.twoCurrentMove >= 1 && this.state.twoCurrentMove < 94) {
                this.setState({
                    hint: 'player two, move',
                    twoHint: 'lucky, move',
                    oneHint: 'wait',

                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    twoDice: rand,
                    twoCurrentMove: this.state.twoCurrentMove + rand,
                    twoPrevMove: this.state.twoCurrentMove,

                    oneDice: 0, //refer to above condition information for guidance
                    oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube, //refer to above condition for guidance

                    turn: ''
                })

            
            // situation: player one's currentMove is 94 and random number is 6
            // rule: player one moves 6 numbers forward 
            // rule: player one will be rewarded another roll after clicking move --oneMove will handle
            // guide: twoDice/twoCurrentMove functions already set turn to 'one', no need to do anything
            // guide: since player one's current move is 94 and rand number is 6, number one wins when move is clicked
            // guide: current move and previous move are declared directly to prevent any unwanted outcome!
            } else if (rand === 6  && this.state.twoCurrentMove === 94)  {
                this.setState({
                    hint: 'player two, congrads! move!',
                    twoHint: 'great, move',
                    oneHint: 'OOOPS!',

                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    twoDice: rand,
                    twoCurrentMove: 100,
                    twoPrevMove: 94,

                    oneDice: 0,
                    oneDiceCube: document.getElementById(222).innerHTML = oneDiceCube,
    
                    turn: ''
                })

            // situation: player one's currentMove is greater than 94 and random number is 6, result will be greater than 100
            // rule: player one must remain where it is
            // rule: player one will be rewarded another roll without any need to click move --if oneMove clickd, same result 
            } else if (rand === 6  && this.state.twoCurrentMove > 94)  {
                this.setState({
                    hint: 'player two, roll',
                    twoHint: 'so close, roll',
                    oneHint: 'oh, wait',

                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    twoDice: rand,
                    twoCurrentMove: this.state.twoCurrentMove,
                    twoPrevMove: 0,

                    oneDice: 0,
                    oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                    turn: 'two'
                })
            // situation: player one is not yet in and random number is not 6
            // rule: player one must cannot enter the game board
            // rule: turn should change to player two
            // guide: no move and random is not allowed to effect anything but oneDice for the sake of turn change managment
            // guide: the following conditions are related to random numbers between 1 and 5 
            } else if (rand !== 6 && this.state.twoCurrentMove < 1) {
                this.setState({
                    hint: 'player one, roll',
                    twoHint: 'wait',
                    oneHint: 'roll',

                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,

                    twoDice: rand,
                    twoCurrentMove: 0,
                    twoPrevMove: this.state.twoCurrentMove,

                    oneDice: 0,
                    oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                    turn: 'one'
                })
            // situation: player one is already in and stands somewhere before 95 and random number is not 6
            // rule: player one moves according to oneCurrentMove added by generated random number
            // rule: turn should change to player two
            } else if (rand !== 6 && this.state.twoCurrentMove >= 1 && this.state.twoCurrentMove < 95) {
                this.setState({
                    hint: 'player two, move',
                    twoHint: 'move',
                    oneHint: 'wait',

                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                    twoDice: rand,
                    twoCurrentMove: this.state.twoCurrentMove + rand,
                    twoPrevMove: this.state.twoCurrentMove,

                    oneDice: 0,
                    oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                    turn: ''

                })
            // situation: player one is already in and stands either in 95 square or greater and random number is btw 1 and 5
            /* guide: in this situation there will be three conditions, two of them will be managed here and 
                one in oneMove function. These two conditions are more straightforward and less repetetive to be coded. */
            /* guide: these two conditions makes easier to manage the different conditions when the current move plus 
                generated random number equalls to 100, which will be handle in oneMove function. */
            } else if (rand !== 6 && this.state.twoCurrentMove >= 95) {

                // situtaion: if the current move plus generated random number is above 100
                // rule: player one is prevented to move forward
                // rule: turn should change to player two
                if (rand + this.state.twoCurrentMove > 100) {
                    this.setState({
                        hint: 'player one, roll',
                        twoHint: 'wait',
                        oneHint: 'roll',

                        twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                        oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,

                        twoDice: rand,
                        twoCurrentMove: this.state.twoCurrentMove,
                        twoPrevMove: 0,

                        oneDice: 0,
                        oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                        turn: 'one'

                        })

                // situtaion: if the current move plus generated random number is above 100
                // rule: player one is prevented to move forward
                // rule: turn should change to player two
                } else {
                    this.setState({
                        hint: 'player two, move',
                        twoHint: 'move',
                        oneHint: 'wait',

                        twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                        oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,

                        twoDice: rand,
                        twoCurrentMove: this.state.twoCurrentMove + rand,
                        twoPrevMove: this.state.twoCurrentMove,

                        oneDice: 0,
                        oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                        turn: ''
                    })
                }
            }
        }
    }

    twoMove = () => {

        if (this.state.twoDice > 0 && this.state.oneDice === 0) {

            if (this.state.twoDice === 6 ) {
                this.setState({
                    hint: 'player two, roll',
                    twoHint: 'roll',
                    oneHint: 'wait',

                    twoBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,
                    oneBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    
                    turn: 'two'
                })
            } else {
                this.setState({
                    hint: 'player one, roll',
                    twoHint: 'wait',
                    oneHint: 'roll',

                    twoBoxShadow: `0px 0px 21px rgb(153, 155, 154)`,
                    oneBoxShadow: `0px 0px 21px rgb(0, 255, 125)`,

                    turn: 'one'
                })
            }

        if (this.state.twoCurrentMove > 1 && this.state.twoPrevMove === 1) {
            this.setState({
                twoPrevPos: document.getElementById(1).innerHTML = ' ',
            })
        }
        
        if (this.state.twoCurrentMove === 2) {
            this.setState({
                twoCurrentMove: 23,
                twoCurrentPos: document.getElementById(2).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(23).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(2).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 4) {
            this.setState({
                twoCurrentMove: 68,
                twoCurrentPos: document.getElementById(4).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(68).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(4).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 6) {
            this.setState({
                twoCurrentMove: 45,
                twoCurrentPos: document.getElementById(6).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(45).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(6).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 20) {
            this.setState({
                twoCurrentMove: 59,
                twoCurrentPose: document.getElementById(20).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(59).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(20).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 30) {
            this.setState({
                twoCurrentMove: 96,
                twoCurrentPose: document.getElementById(30).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(96).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(30).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 43) {
            this.setState({
                twoCurrentMove: 17,
                twoCurrentPose: document.getElementById(43).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(17).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(43).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 50) {
            this.setState({
                twoCurrentMove: 5,
                twoCurrentPose: document.getElementById(50).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(5).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(50).innerHTML = ' '}, 3000)
            })
        }  else if (this.state.twoCurrentMove === 52) {
            this.setState({
                twoCurrentMove: 72,
                twoCurrentPose: document.getElementById(52).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(72).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(52).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 56) {
            this.setState({
                twoCurrentMove: 8,
                twoCurrentPose: document.getElementById(56).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(8).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(56).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 57) {
            this.setState({
                twoCurrentMove: 96,
                twoCurrentPose: document.getElementById(57).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(96).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(57).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 71) {
            this.setState({
                twoCurrentMove: 92,
                twoCurrentPose: document.getElementById(71).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(92).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(71).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 73) {
            this.setState({
                twoCurrentMove: 15,
                twoCurrentPose: document.getElementById(73).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(15).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(73).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 84) {
            this.setState({
                twoCurrentMove: 58,
                twoCurrentPose: document.getElementById(84).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(58).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(84).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 87) {
            this.setState({
                twoCurrentMove: 49,
                twoCurrentPose: document.getElementById(87).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(49).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(87).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove === 98) {
            this.setState({
                twoCurrentMove: 40,
                twoCurrentPose: document.getElementById(98).innerHTML = playerTwoOut,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' ',

                twoAfterPos: document.getElementById(40).innerHTML = playerTwoIn,
                twoBeforePos: setTimeout(function() {document.getElementById(98).innerHTML = ' '}, 3000)
            })
        } else if (this.state.twoCurrentMove < 100) {
            
                this.setState({
                    twoCurrentPos: document.getElementById(this.state.twoCurrentMove).innerHTML = playerTwo,
                    twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = ' '
                })
            
        } else if (this.state.twoCurrentMove === 100) {
            this.setState({
                hint: 'player 2, WINNER!',
                twoHint: 'Hoooray!!!',
                oneHint: 'Maybe next time!',

                twoCurrentPos: document.getElementById(100).innerHTML = playerTwo,
                twoPrevPos: document.getElementById(this.state.twoPrevMove).innerHTML = '',

                twoAfterPos: document.getElementById(222).innerHTML = 'Winner',
                oneAfterPos: document.getElementById(111).innerHTML = 'Not Lucky',


                turn: '',
                playAgain: setTimeout(function() {document.getElementById('hintForAll').innerHTML = playAgainBtn}, 2000)
            })
        } 
    }
}


    render(){
        return(
            <div class="snakes-and-ladders-page container-fluid">
                <div class="page-shadow row d-flex justify-content-center align-items-start text-light">
                    {/* player one panel */}
                    <div className="box-shadow col-3 d-flex justify-content-center align-self-center text-info border rounded-2 p-4 bounce-in-left"
                        style={{boxShadow: this.state.oneBoxShadow}}
                    >
                        <div className="row overflow-scroll">
                            <div class="col-12" id="oneNamePanel">
                                <input 
                                    value={this.state.oneNameInput}
                                    onChange={this.oneNameHandleChange}
                                    placeholder='Enter Your Name'
                                />
                                <button class="text-center m-2" onClick={this.oneNameHandleSubmit}>
                                    Submit
                                </button>
                            </div>
                            <div className="col-12 text-center fs-4 pb-4">
                                {this.state.oneName}
                            </div>
                            {/* player one hint */}
                            <div className="col-12 text-center text-flicker-in-glow-2">
                                <div id="101">
                                    <i class="bi bi-person-fill">
                                        {this.state.oneHint}
                                    </i>
                                </div>
                            </div>

                            {/* player one dice */}
                            <div className="col-12 text-center py-2">
                                <div id="111" class="fs-3 animated flip">
                                    <i class="bi bi-box"></i>
                                </div>
                            </div>
                            
                            {/* player one control buttons */}
                            <div className="col-12 d-flex justify-content-center flex-wrap py-1">
                                <button class="me-2 btn btn-outline-info" type="button" onClick={this.oneMove}>Move</button>
                                <button class="btn btn-outline-info" type="button" onClick={this.oneDice}>Roll</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            
                            {/* header  */}
                            <div className="col-12 text-center fs-2 py-4 text-flicker-in-glow">
                                SNAKES AND LADDERS
                            </div>

                            {/* game board  */}
                            <div className="col-12 d-flex justify-content-center align-items-start">
                                <div class="row snakes-and-ladders-board border border-2 rounded-2">   
                                
                                    {/* game grid  */}
                                    <div className='snakes-and-ladders-box box-cover-color text-center'>
                                        <div className="item" id="100">100</div>
                                        <div className="item" id="99">99</div>
                                        <div className="item" id="98">98</div>
                                        <div className="item" id="97">97</div>
                                        <div className="item" id="96">96</div>
                                        <div className="item" id="95">95</div>
                                        <div className="item" id="94">94</div>
                                        <div className="item" id="93">93</div>
                                        <div className="item" id="92">92</div>
                                        <div className="item" id="91">91</div> 
                                        <div className="item" id="81">81</div>
                                        <div className="item" id="82">82</div>
                                        <div className="item" id="83">83</div>
                                        <div className="item" id="84">84</div>
                                        <div className="item" id="85">85</div>
                                        <div className="item" id="86">86</div>
                                        <div className="item" id="87">87</div>
                                        <div className="item" id="88">88</div>
                                        <div className="item" id="89">89</div>
                                        <div className="item" id="90">90</div>
                                        <div className="item" id="80">80</div>
                                        <div className="item" id="79">79</div>
                                        <div className="item" id="78">78</div>
                                        <div className="item" id="77">77</div>
                                        <div className="item" id="76">76</div>
                                        <div className="item" id="75">75</div>
                                        <div className="item" id="74">74</div>
                                        <div className="item" id="73">73</div>
                                        <div className="item" id="72">72</div>
                                        <div className="item" id="71">71</div>
                                        <div className="item" id="61">61</div>
                                        <div className="item" id="62">62</div>
                                        <div className="item" id="63">63</div>
                                        <div className="item" id="64">64</div>
                                        <div className="item" id="65">65</div>
                                        <div className="item" id="66">66</div>
                                        <div className="item" id="67">67</div>
                                        <div className="item" id="68">68</div>
                                        <div className="item" id="69">69</div>
                                        <div className="item" id="70">70</div>  
                                        <div className="item" id="60">60</div>
                                        <div className="item" id="59">59</div>
                                        <div className="item" id="58">58</div>
                                        <div className="item" id="57">57</div>
                                        <div className="item" id="56">56</div>
                                        <div className="item" id="55">55</div>
                                        <div className="item" id="54">54</div>
                                        <div className="item" id="53">53</div>
                                        <div className="item" id="52">52</div>
                                        <div className="item" id="51">51</div>
                                        <div className="item" id="41">41</div>
                                        <div className="item" id="42">42</div>
                                        <div className="item" id="43">43</div>
                                        <div className="item" id="44">44</div>
                                        <div className="item" id="45">45</div>
                                        <div className="item" id="46">46</div>
                                        <div className="item" id="47">47</div>
                                        <div className="item" id="48">48</div>
                                        <div className="item" id="49">49</div>
                                        <div className="item" id="50">50</div>
                                        <div className="item" id="40">40</div>
                                        <div className="item" id="39">39</div>
                                        <div className="item" id="38">38</div>
                                        <div className="item" id="37">37</div>
                                        <div className="item" id="36">36</div>
                                        <div className="item" id="35">35</div>
                                        <div className="item" id="34">34</div>
                                        <div className="item" id="33">33</div>
                                        <div className="item" id="32">32</div>
                                        <div className="item" id="31">31</div>
                                        <div className="item" id="21">21</div>
                                        <div className="item" id="22">22</div>
                                        <div className="item" id="23">23</div>
                                        <div className="item" id="24">24</div>
                                        <div className="item" id="25">25</div>
                                        <div className="item" id="26">26</div>
                                        <div className="item" id="27">27</div>
                                        <div className="item" id="28">28</div>
                                        <div className="item" id="29">29</div>
                                        <div className="item" id="30">30</div>
                                        <div className="item" id="20">20</div>
                                        <div className="item" id="19">19</div>
                                        <div className="item" id="18">18</div>
                                        <div className="item" id="17">17</div>
                                        <div className="item" id="16">16</div>
                                        <div className="item" id="15">15</div>
                                        <div className="item" id="14">14</div>
                                        <div className="item" id="13">13</div>
                                        <div className="item" id="12">12</div>
                                        <div className="item" id="11">11</div>
                                        <div className="item" id="1">1</div>
                                        <div className="item" id="2">2</div>
                                        <div className="item" id="3">3</div>
                                        <div className="item" id="4">4</div>
                                        <div className="item" id="5">5</div>
                                        <div className="item" id="6">6</div>
                                        <div className="item" id="7">7</div>
                                        <div className="item" id="8">8</div>
                                        <div className="item" id="9">9</div>
                                        <div className="item" id="10">10</div>
                                    </div> 
                                </div>     
                            </div>

                            {/* hints for all */}
                            <div className="col-12 d-flex justify-content-center">
                                <div id="hintForAll" class="text-center pt-4">
                               
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* player two panel */}
                    <div className="box-shadow col-3 d-flex align-self-center text-danger border rounded-2 p-4 bounce-in-right"
                        style={{boxShadow: this.state.twoBoxShadow}}
                    >
                        <div className="row overflow-scroll">
                            <div class="col-12" id="twoNamePanel">
                                <input 
                                    value={this.state.twoNameInput}
                                    onChange={this.twoNameHandleChange}
                                    placeholder='Enter Your Name'
                                />
                                <button class="text-center m-2" onClick={this.twoNameHandleSubmit}>
                                    Submit
                                </button>
                            </div>
                            <div className="col-12 text-center fs-4 pb-4">
                                {this.state.twoName}
                            </div>
                                            
                            {/* player two hint */}
                            <div className="col-12 text-center text-flicker-in-glow-2">
                                <div id="102">
                                    <i class="bi bi-person-fill border-1 rounded-2">
                                        {this.state.twoHint}
                                    </i>
                                </div>
                                
                            </div>

                            {/* player two dice */}
                            <div className="col-12 text-center py-2">
                                <div id="222" class="fs-3 animated flip">
                                    <i class="bi bi-box"></i>
                                </div>
                            </div>
                            
                            {/* player two control buttons */}
                            <div className="col-12 d-flex justify-content-center flex-wrap py-1">
                                <button class="me-2 btn btn-outline-danger" type="button" onClick={this.twoMove}>Move</button>
                                <button class="btn btn-outline-danger" type="button" onClick={this.twoDice}>Roll</button>
                            </div>
                        </div>
                    </div>

                    {/* display is set to none, exists only for the sake of functional calculation */}
                    <div class="d-none" id="0"></div> 
                    
                    {/* as the name says, Footer */}
                    <QuotifyFooter />
                </div>
            </div>
        )
    }
}


export default SnakesAndLadders;