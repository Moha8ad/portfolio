import React from 'react';

import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component'

import './snakes-and-ladders.styles.scss'

const playerOne = `<i class='bi bi-person-fill text-info bg-dark px-1 border rounded-2 border-info'></i>`
const playerTwo = `<i class='bi bi-person-fill text-warning bg-dark px-1 border rounded-2 border-warning'></i>`

class SnakesAndLadders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hint: 'Player One Roll',
            turn: 'one',
            oneDice: 0,
            twoDice: 0,
            onePos: '',
            twoPos: ''
        }
    }


    oneDice = () => {
        const rand =  Math.floor(Math.random() *  6) + 1
       if (this.state.turn === 'one' && this.state.twoDice === 0 ) {
            this.setState({
                hint: 'Player One Move',
                turn: 'two',
                oneDice: rand
            })
        }
    }
    twoDice = () => {
        const rand =  Math.floor(Math.random() *  6) + 1
       if (this.state.turn === 'two' && this.state.oneDice === 0) {
            this.setState({
                hint: 'Player Two Move',
                turn: 'one',
                twoDice: rand
            })
        }
    }

    oneMove = () => {
        if (this.state.oneDice !== 0) {
            this.setState({
                hint: 'Player Two Roll',
                oneDice: 0,
                onePos: document.getElementById(this.state.oneDice).innerHTML = playerOne
            })
        }
    }

    twoMove = () => {
        if (this.state.twoDice !== 0) {
            this.setState({
                hint: 'Player One Roll',
                twoDice: 0,
                twoPos: document.getElementById(this.state.twoDice).innerHTML = playerTwo
            })
        }
}

    render(){

        return(
            <div class="row bg-secondary">   
                <QuotifyNavbar />
                <div class='snakes-and-ladders-panel col-8 p-4 m-2 bg-dark text-center fs-3 border border-2 rounded-2'> 
                    <div className="col-12 d-flex justify-content-center">
                        <div className='snakes-and-ladders-board row d-flex justify-content-center justify-self-center
                                        border border-2 rounded-2'
                        >
                            <div className='snakes-and-ladders-box'>
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
                                <div id="0"></div> 
                                <button class='mx-1 px-1 fs-6' onClick={this.oneMove}>Move</button>
                                <div id="101"><i class="bi bi-person-fill text-info bg-dark"></i> </div>
                                <button class='mx-1 px-1 fs-6' onClick={this.oneDice}>Roll</button>
                                <h1 class='m-2 p-2' onClick={this.oneDice}>
                                    {
                                        this.state.oneDice === 1 
                                        ?
                                            <i class="bi bi-dice-1-fill"></i>                                      
                                        :
                                        this.state.oneDice === 2 
                                        ?
                                            <i class="bi bi-dice-2-fill"></i>
                                        :
                                        this.state.oneDice === 3 
                                        ?
                                            <i class="bi bi-dice-3-fill"></i>
                                        :
                                        this.state.oneDice === 4 
                                        ?
                                            <i class="bi bi-dice-4-fill"></i>
                                        :
                                        this.state.oneDice === 5 
                                        ?
                                            <i class="bi bi-dice-5-fill"></i>
                                        :
                                        this.state.oneDice === 6 
                                        ?
                                            <i class="bi bi-dice-6-fill"></i>
                                        :
                                            <i class="bi bi-box"></i> 
                            
                                    }
                                    
                                </h1> 

                                <div class="px-3 mx-3"></div>
                                <h4 class='m-2 p-2'>{this.state.hint}</h4>
                                <div class="px-3 mx-3"></div>


                                <button class='mx-1 px-1 fs-6' onClick={this.twoMove}>Move</button>
                                <div id="102"><i class="bi bi-person-fill text-warning bg-dark"></i> </div>
                                <button class='mx-1 px-1 fs-6' onClick={this.twoDice}>Roll</button>
                                <h1 class='m-2 p-2' onClick={this.twoDice}>
                                    {
                                        this.state.twoDice === 1 
                                        ?
                                            <i class="bi bi-dice-1-fill"></i>                                      
                                        :
                                        this.state.twoDice === 2 
                                        ?
                                            <i class="bi bi-dice-2-fill"></i>
                                        :
                                        this.state.twoDice === 3 
                                        ?
                                            <i class="bi bi-dice-3-fill"></i>
                                        :
                                        this.state.twoDice === 4 
                                        ?
                                            <i class="bi bi-dice-4-fill"></i>
                                        :
                                        this.state.twoDice === 5 
                                        ?
                                            <i class="bi bi-dice-5-fill"></i>
                                        :
                                        this.state.twoDice === 6 
                                        ?
                                            <i class="bi bi-dice-6-fill"></i>
                                        :
                                            <i class="bi bi-box"></i> 
                            
                                    }
                                    
                                </h1> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SnakesAndLadders;