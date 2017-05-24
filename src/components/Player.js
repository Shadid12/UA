import { Component } from 'react'
import './styles/player.css'
import $ from 'jquery'
import animate from 'animate.css';
import { Eq } from './Eq';

export class Player extends Component{

	

	state = {
		isPlaying: true
	}

	componentDidMount() {
		var x = document.getElementById("myAudio");
		x.play();
	}

	render(){

		return(


<div>
<div className="c-pp" onClick={this.play} >
  <div className="c-pp__icon"></div>
</div>
{
	this.state.isPlaying ?
		<Eq />
	:
	null
}

<audio id="myAudio">
  <source 
  src="./assets/audio/smz.mp3" type="audio/mpeg"/>
</audio>

</div>




		)
	}

	play = () =>{
		$('.c-pp').toggleClass('is-play');
		this.setState({ isPlaying: !this.state.isPlaying })
		
		var x = document.getElementById("myAudio");
		if(this.state.isPlaying){
			x.pause();
		}else{
			x.play();
		}
	}
}