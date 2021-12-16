import React from 'react';

import QuotifyNavbar from '../components/quotify-components/qt-navbar/qt-navbar.component'

import './move.styles.scss'

class Move extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prevMove: 0,
            currentPos: 0,
            prevPos: 0,
            rand: 0,
            hint: 'start'
        }
    }
    handleSubmit = () => {
        const rand =  6
        if ( this.state.currentPos < 1 && rand === 6 ) {
            this.setState({
                rand: rand,
                currentPos: 1,
                prevMove: 0,
                prevPos: 0,
                hint: 'Welcome, Roll Once More'
            })
        } else if (this.state.currentPos < 1) {
            this.setState({
                rand: 0,
                currentPos: 0,
                prevMove: 0,
                prevPos: 0,
                hint: 'try again' 
            })
        } else if (this.state.currentPos > 0 && this.state.prevPos < 1) {
            this.setState({
                rand: rand,
                currentPos: this.state.currentPos + rand,
                prevMove: this.state.currentPos + rand,
                prevPos: 1,
                hint: 'go forward: ' + rand
            })
        } else if (this.state.currentPos < 94 && this.state.prevPos >= 1) {
            if ( this.state.currentPos === 7 ) {
                this.setState({
                    rand: rand,
                    currentPos: 10,
                    prevMove: 10,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 10
                })

            } else if ( this.state.currentPos === 16 ) {
                this.setState({
                    rand: rand,
                    currentPos: 20,
                    prevMove: 20,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 20
                })

            } else if ( this.state.currentPos === 26 ) {
                this.setState({
                    rand: rand,
                    currentPos: 5,
                    prevMove: 5,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 5
                })

            } else if ( this.state.currentPos === 17 ) {
                this.setState({
                    rand: rand,
                    currentPos: 30,
                    prevMove: 30,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 30
                })

            }  else if ( this.state.currentPos === 42 ) {
                this.setState({
                    rand: rand,
                    currentPos: 25,
                    prevMove: 25,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 25
                })

            } else if ( this.state.currentPos === 37 ) {
                this.setState({
                    rand: rand,
                    currentPos: 92,
                    prevMove: 92,
                    prevPos: this.state.prevMove,
                    hint: 'LUCKY!!! Jump to ' + 92
                })
            } else {
                this.setState({
                    rand: rand,
                    currentPos: this.state.currentPos + rand,
                    prevMove: this.state.currentPos + rand,
                    prevPos: this.state.prevMove,
                    hint: 'nice job, go forward: ' + rand
                })
            }
        } else if (this.state.currentPos === 98 ) {
                this.setState({
                    rand: rand,
                    currentPos: 1,
                    prevMove: 1,
                    prevPos: this.state.prevMove,
                    hint: 'OOPS!!! Go back to ' + 1
                })

            }       
        
        else if (this.state.currentPos >= 94 && this.state.currentPos < 100) {
            if ( this.state.currentPos + rand < 100) {
                    this.setState({
                        rand: rand,
                        currentPos: this.state.currentPos + rand,
                        prevMove: this.state.currentPos + rand,
                        prevPos: this.state.prevMove,
                        hint: 'TOLL, fortfahren: ' + rand
                    })``
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
                    hint: 'Du bist der Gewinner!'
                })
            }
        } else {
            
                alert('erneut spielen?')
            
        }
    }

    render(){

        return(
            <div class="row">   
                <QuotifyNavbar />
                <div class='col-8 p-2 m-2 bg-primary text-light text-center fs-3'> 
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
                    <div>
                        <div className="item bg-warning col-1"></div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center align-items-center text-center" id="0">
                        <h3>M8</h3>
                        <i class="bi bi-person-fill text-warning me-5" ></i>
                        <h4>currentPose : {this.state.currentPos}</h4>
                        <h2 class="bg-danger text-light text center mx-5" style={{width: '50px'}}>{this.state.rand}</h2>
                        <h4>prevPose : {this.state.prevPos}</h4>
                    </div>

                    <button class='col-2 mt-5' onClick={this.handleSubmit}>{this.state.hint}</button>
                </div>
            </div>
        )
    }
}


export default Move;