import React from 'react';

import QuotifyNavbar from '../components/quotify-components/qt-navbar/qt-navbar.component'

import './move.styles.scss'

const personOne = `<i class='bi bi-person-fill text-warning bg-dark px-1 border rounded-2 border-warning'></i>`

class Move extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prevMove: 0,
            currentPos: 0,
            prevPos: 0,
            rand: 0,
            dice: 0,
            hint: 'START and Roll the Dice',
            userOnecurrentPos: '',
            userOneprevPos: ''
        }
    }
    rollDice = () => {
        const rand =  Math.floor(Math.random() *  6) + 1
        this.setState({
            dice: rand
        })
    }
    handleSubmit = () => {
        const rand =  Math.floor(Math.random() *  6) + 1
        if ( this.state.currentPos < 1 && rand === 6 ) {
            this.setState({
                rand: rand,
                currentPos: 1,
                prevMove: 0,
                prevPos: 0,
                hint: 'HOORAY!, Roll Once More',
                userOnecurrentPos: document.getElementById(1).innerHTML = personOne
            })
        } else if (this.state.currentPos < 1) {
            this.setState({
                rand: rand,
                currentPos: 0,
                prevMove: 0,
                prevPos: 0,
                hint: 'Try Again',
                userOnecurrentPos: document.getElementById(0).innerHTML = personOne
            })
        } else if (this.state.currentPos > 0 && this.state.prevPos < 1) {
            this.setState({
                rand: rand,
                currentPos: this.state.currentPos + rand,
                prevMove: this.state.currentPos + rand,
                prevPos: 1,
                hint: 'Continue! Go Forward',
                userOnecurrentPos: document.getElementById(1 + rand).innerHTML = personOne,
                userOneprevPos: document.getElementById(1).innerText = 1
            })
        } else if (this.state.currentPos < 94 && this.state.prevPos >= 1) {
            if ( this.state.currentPos === 2 ) {
                this.setState({
                    rand: rand,
                    currentPos: 23,
                    prevMove: 23,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 23,
                    userOnecurrentPos: document.getElementById(23).innerHTML = personOne,
                    userOneprevPos: document.getElementById(2).innerText = 2
                })
            } else if ( this.state.currentPos === 4 ) {
                this.setState({
                    rand: rand,
                    currentPos: 68,
                    prevMove: 68,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 68,
                    userOnecurrentPos: document.getElementById(68).innerHTML = personOne,
                    userOneprevPos: document.getElementById(4).innerText = 4
                })

            } else if ( this.state.currentPos === 6 ) {
                this.setState({
                    rand: rand,
                    currentPos: 45,
                    prevMove: 45,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 45,
                    userOnecurrentPos: document.getElementById(45).innerHTML = personOne,
                    userOneprevPos: document.getElementById(6).innerText = 6
                })

            } else if ( this.state.currentPos === 20 ) {
                this.setState({
                    rand: rand,
                    currentPos: 59,
                    prevMove: 59,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 59,
                    userOnecurrentPos: document.getElementById(59).innerHTML = personOne,
                    userOneprevPos: document.getElementById(20).innerText = 20
                })

            } else if ( this.state.currentPos === 30 ) {
                this.setState({
                    rand: rand,
                    currentPos: 96,
                    prevMove: 96,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 96,
                    userOnecurrentPos: document.getElementById(96).innerHTML = personOne,
                    userOneprevPos: document.getElementById(30).innerText = 30
                })

            } else if ( this.state.currentPos === 43 ) {
                this.setState({
                    rand: rand,
                    currentPos: 17,
                    prevMove: 17,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 17,
                    userOnecurrentPos: document.getElementById(17).innerHTML = personOne,
                    userOneprevPos: document.getElementById(43).innerText = 43
                })

            } else if ( this.state.currentPos === 50 ) {
                this.setState({
                    rand: rand,
                    currentPos: 5,
                    prevMove: 5,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 5,
                    userOnecurrentPos: document.getElementById(5).innerHTML = personOne,
                    userOneprevPos: document.getElementById(50).innerText = 50
                })

            } else if ( this.state.currentPos === 52 ) {
                this.setState({
                    rand: rand,
                    currentPos: 72,
                    prevMove: 72,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 72,
                    userOnecurrentPos: document.getElementById(72).innerHTML = personOne,
                    userOneprevPos: document.getElementById(52).innerText = 52
                })

            }  else if ( this.state.currentPos === 56 ) {
                this.setState({
                    rand: rand,
                    currentPos: 8,
                    prevMove: 8,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 8,
                    userOnecurrentPos: document.getElementById(8).innerHTML = personOne,
                    userOneprevPos: document.getElementById(56).innerText = 56
                })

            } else if ( this.state.currentPos === 57 ) {
                this.setState({
                    rand: rand,
                    currentPos: 96,
                    prevMove: 96,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 96,
                    userOnecurrentPos: document.getElementById(96).innerHTML = personOne,
                    userOneprevPos: document.getElementById(57).innerText = 57
                })
            } else if ( this.state.currentPos === 71 ) {
                this.setState({
                    rand: rand,
                    currentPos: 92,
                    prevMove: 92,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 92,
                    userOnecurrentPos: document.getElementById(92).innerHTML = personOne,
                    userOneprevPos: document.getElementById(71).innerText = 71
                })
            }  else if ( this.state.currentPos === 73 ) {
                this.setState({
                    rand: rand,
                    currentPos: 15,
                    prevMove: 15,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 15,
                    userOnecurrentPos: document.getElementById(15).innerHTML = personOne,
                    userOneprevPos: document.getElementById(73).innerText = 73
                })

            }  else if ( this.state.currentPos === 84 ) {
                this.setState({
                    rand: rand,
                    currentPos: 58,
                    prevMove: 58,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 58,
                    userOnecurrentPos: document.getElementById(58).innerHTML = personOne,
                    userOneprevPos: document.getElementById(84).innerText = 84
                })

            }  else if ( this.state.currentPos === 87 ) {
                this.setState({
                    rand: rand,
                    currentPos: 49,
                    prevMove: 49,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 49,
                    userOnecurrentPos: document.getElementById(49).innerHTML = personOne,
                    userOneprevPos: document.getElementById(87).innerText = 87
                })

            }  else {
                this.setState({
                    rand: rand,
                    currentPos: this.state.currentPos + rand,
                    prevMove: this.state.currentPos + rand,
                    prevPos: this.state.prevMove,
                    hint: 'Nice Job, Go Forward',
                    userOnecurrentPos: document.getElementById(this.state.currentPos + rand).innerHTML = personOne,
                    userOneprevPos: document.getElementById(this.state.prevMove).innerText = this.state.prevMove
                })
            }
        } else if (this.state.currentPos === 98 ) {
                this.setState({
                    rand: rand,
                    currentPos: 40,
                    prevMove: 40,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 40,
                    userOnecurrentPos: document.getElementById(40).innerHTML = personOne,
                    userOneprevPos: document.getElementById(98).innerText = 98
                })

            }       
        
        else if (this.state.currentPos >= 94 && this.state.currentPos < 100) {
            if ( this.state.currentPos + rand < 100) {
                    this.setState({
                        rand: rand,
                        currentPos: this.state.currentPos + rand,
                        prevMove: this.state.currentPos + rand,
                        prevPos: this.state.prevMove,
                        hint: 'TOLL, fortfahren: ' + rand,
                        userOnecurrentPos: document.getElementById(this.state.currentPos + rand).innerHTML = personOne,
                        userOneprevPos: document.getElementById(this.state.prevMove).innerText = this.state.prevMove
                    })
            } else if ( this.state.currentPos + rand > 100) {
                this.setState({
                    hint: 'SO KNAPP, Nochmal Versuchen!'
                })
            } else if ( this.state.currentPos + rand === 100) {
                this.setState({
                    rand: rand,
                    currentPos: 100,
                    prevMove: this.state.currentPos + rand,
                    prevPos: this.state.prevMove,
                    hint: 'Du bist der Gewinner!',
                    userOnecurrentPos: document.getElementById(this.state.currentPos + rand).innerHTML = personOne,
                    userOneprevPos: document.getElementById(this.state.prevMove).innerText = this.state.prevMove
                })
            }
        } else {
            
                alert('erneut spielen?')
            
        }
    }

    render(){

        return(
            <div class="row bg-secondary">   
                <QuotifyNavbar />
                <div class='board col-8 p-4 m-2 bg-dark text-center fs-3 border border-2 rounded-2'> 
                    <div className="col-12 d-flex justify-content-center">
                        <div className='game-board row d-flex justify-content-center justify-self-center
                                        border border-2 rounded-2'
                        >
                            <div className='box'>
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
                    <div className="col-12 m-2 text-light">
                        <div className='row' >
                            <div class="d-flex justify-content-center align-items-center text-center">
                                <div id="0" class="text-dark d-none"></div> 
                                <h3>Pari</h3>
                                <i class="bi bi-person-fill text-warning me-5" ></i>
                                <h1 class='mx-5'>
                                    {
                                        this.state.rand === 1 
                                        ?
                                            <i class="bi bi-dice-1-fill"></i>                                        
                                        :
                                        this.state.rand === 2 
                                        ?
                                            <i class="bi bi-dice-2-fill"></i>
                                        :
                                        this.state.rand === 3 
                                        ?
                                            <i class="bi bi-dice-3-fill"></i>
                                        :
                                        this.state.rand === 4 
                                        ?
                                            <i class="bi bi-dice-4-fill"></i>
                                        :
                                        this.state.rand === 5 
                                        ?
                                            <i class="bi bi-dice-5-fill"></i>
                                        :
                                        this.state.rand === 6 
                                        ?
                                            <i class="bi bi-dice-6-fill"></i>
                                        :
                                            "Roll the Dice" 
                            
                                    }
                                    {}
                                </h1> 
                                <h3>{this.state.currentPos}</h3>
                                <h3 class="mx-4">{this.state.prevPos}</h3>   
                                <button class='col-5 ms-5' onClick={this.handleSubmit}>{this.state.hint}</button>
 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Move;