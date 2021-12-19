import React from 'react';

import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';

import './snakes-and-ladders.styles.scss';

const playerOne = `<i class='bi bi-person-fill text-info bg-dark px-1 border rounded-2 border-info'></i>`
const playerOneIn = `<i class='bi bi-person-fill text-info bg-dark px-1 border rounded-2 border-info player-fade-in'></i>`
const playerOneOut = `<i class='bi bi-person-fill text-info bg-dark px-1 border rounded-2 border-info player-fade-out'></i>`

const playerTwo = `<i class='bi bi-person-fill text-warning bg-dark px-1 border rounded-2 border-warning'></i>`

const oneDiceCube = `<div><i class="bi bi-box"></i></div>`
const oneDiceOne = `<div class="animated flip"><i class="bi bi-dice-1-fill"></i></div>`
const oneDiceTwo = `<div class="animated flip"><i class="bi bi-dice-2-fill"></i></div>`
const oneDiceThree = `<div class="animated flip"><i class="bi bi-dice-3-fill"></i></div>`
const oneDiceFour = `<div class="animated flip"><i class="bi bi-dice-4-fill"></i></div>`
const oneDiceFive = `<div class="animated flip"><i class="bi bi-dice-5-fill"></i></div>`
const oneDiceSix = `<div class="animated flip"><i class="bi bi-dice-6-fill"></i></div>`

const twoDiceCube = `<div><i class="bi bi-box"></i></div>`
const twoDiceOne = `<div class="animated flip"><i class="bi bi-dice-1-fill"></i></div>`
const twoDiceTwo = `<div class="animated flip"><i class="bi bi-dice-2-fill"></i></div>`
const twoDiceThree = `<div class="animated flip"><i class="bi bi-dice-3-fill"></i></div>`
const twoDiceFour = `<div class="animated flip"><i class="bi bi-dice-4-fill"></i></div>`
const twoDiceFive = `<div class="animated flip"><i class="bi bi-dice-5-fill"></i></div>`
const twoDiceSix = `<div class="animated flip"><i class="bi bi-dice-6-fill"></i></div>`



class SnakesAndLadders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hint: "Let's Start! Player One Roll",
            turn: 'one',
            
            oneHint: 'Your Turn',
            oneDice: 0,
            oneDiceCube: '',
            oneMove: 0,
            onePrevMove: 0,
            onePrevPos: 0,
            oneCurrentPos: 0,
            oneNextPos: 0,
            
            twoHint: 'Wait',
            twoDice: 0,
            twoDiceCube: '',
            twoMove: 0,
            twoPrevPos: 0,
            twoCurrentPos: 0,
            twoNextPos: 0,

        }
    }

    oneDice = () => {
        const randd =  Math.floor(Math.random() *  6) + 1;
        const rand = 6

        if ( this.state.turn === 'one'){

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

            if ( rand === 6 && this.state.oneMove < 1 ) {
                this.setState({
                    oneDice: rand,
                    oneMove: 1,
                    oneCurrentPos: document.getElementById(1).innerHTML = playerOne,
                    onePrevMove: 0,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                    turn: 'one'
                    })
            } else if (rand === 6 && this.state.oneMove >= 1 && this.state.oneMove < 80) {
                this.setState({
                    oneDice: rand,
                    oneMove: this.state.oneMove + rand,
                    onePrevMove: this.state.oneMove,

                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                    turn: ''

                    })

            }  else if (rand === 6  && this.state.oneMove >= 80 && this.state.oneMove <= 100)  {
                this.setState({
                    oneDice: rand,
                    oneMove: this.state.oneMove + 1,
                    onePrevMove: this.state.oneMove,
    
                    twoDice: 0,
                    twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,
    
                    turn: ''
                    })
            } else if (rand !== 6 && this.state.oneMove < 1) {
                this.setState({
                oneDice: rand,
                oneMove: 0,
                onePrevMove: this.state.oneMove,


                twoDice: 0,
                twoDiceCube: document.getElementById(222).innerHTML = twoDiceCube,

                turn: 'two'
                })
        }
        }
    }
    oneMove = () => {
        if (this.state.oneDice === 6 ) {
            this.setState({
                turn: 'one'
            })
        } else {
            this.setState({
                turn: 'two'
            })
        }

        if (this.state.oneMove > 1 && this.state.onePrevMove === 1) {
            this.setState({
                oneCurrentPos: document.getElementById(this.state.oneMove).innerHTML = playerOne,
                onePrevPos: document.getElementById(1).innerHTML = ' '
            })
        }
        
        if (this.state.oneMove === 7) {
            this.setState({
                oneMove: 45,
                oneCurrentPos: document.getElementById(7).innerHTML = playerOneOut,
                oneNextPos: document.getElementById(45).innerHTML = playerOneIn,
                onePrevPos: setTimeout(function() {document.getElementById(7).innerHTML = ' '}, 3000)

            })
        } else if (this.state.oneMove === 4) {
            this.setState({
                oneCurrentPos: document.getElementById(4).innerHTML = playerOne,
                oneNextPos: document.getElementById(68).innerHTML = playerOne,

            })
        } else {
            
                this.setState({
                    oneCurrentPos: document.getElementById(this.state.oneMove).innerHTML = playerOne,
                    onePrevPos: document.getElementById(this.state.onePrevMove).innerHTML = ' '
                })
            
        }
    }

twoDice = () => {
    const rand =  Math.floor(Math.random() *  6) + 1
    if ( this.state.turn === 'two'){

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

        if ( rand === 6 && this.state.twoMove < 1 ) {
            this.setState({
                twoDice: rand,
                twoMove: 1,
                twoCurrentPos: document.getElementById(1).innerHTML = playerTwo,

                oneDice: 0,
                oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,
                })
        } else if (rand === 6 && this.state.twoMove >= 1) {
            this.setState({
                twoDice: rand,
                twoMove: this.state.twoMove + rand,

                oneDice: 0,
                oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,
                })

        } else if (rand !== 6 && this.state.twoMove < 1) {
                this.setState({
                twoDice: rand,
                twoMove: 0,

                oneDice: 0,
                oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

                turn: 'one'
                })
        } else {
            this.setState({
            twoDice: rand,
            twoMove: this.state.twoMove + rand,

            oneDice: 0,
            oneDiceCube: document.getElementById(111).innerHTML = oneDiceCube,

            turn: 'one'
            })
        }
    }
}

    render(){
        return(
            <div class="container-fluid">
            <div class="row bg-secondary">   
                <QuotifyNavbar />

                {/* game page  */}
                <div class='snakes-and-ladders-page col-12 col-sm-10 bg-dark'>
                    <div class='row'>

                        {/* header  */}
                        <div class="col-12 fs-2 text-warning text-center py-2">
                            SNAKES AND LADDERS
                        </div>
                        {/* game board  */}
                        <div className="col-12 d-flex justify-content-center">
                            <div className='snakes-and-ladders-board row d-flex justify-content-center justify-self-center
                                            border border-2 rounded-2'
                            >
                                {/* game grid  */}
                                <div className='snakes-and-ladders-box text-center'>
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
                        {/* players panel */}
                        <div className="col-12 p-2">
                            <div className='row'>

                                {/* player one panel */}
                                <div className="col-3 text-info">
                                    <div className="row">
                                        
                                        {/* player one hint */}
                                        <div className="col-12 text-center">
                                            <div id="101">
                                                <i class="bi bi-person-fill border-1 rounded-2">
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
                                
                                {/* hints for all */}
                                <div class="col-6 text-light d-flex justify-content-center align-items-center fs-3">
                                    {this.state.hint}
                                </div>

                                {/* player two panel */}
                                <div className="col-3 text-warning">
                                    <div className="row">
                                        
                                        {/* player two hint */}
                                        <div className="col-12 text-center">
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
                                            <button class="me-2 btn btn-outline-warning" type="button" onClick={this.twoMove}>Move</button>
                                            <button class="btn btn-outline-warning" type="button" onClick={this.twoDice}>Roll</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none" id="0"></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        )
    }
}


export default SnakesAndLadders;