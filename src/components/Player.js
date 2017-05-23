import { Component } from 'react'
import './styles/player.css'
import $ from 'jquery'
import animate from 'animate.css';
import { Eq } from './Eq';

export class Player extends Component{

	state = {
		isPlaying: true
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
}
</div>




		)
	}

	play = () =>{
		$('.c-pp').toggleClass('is-play');
		this.setState({ isPlaying: !this.state.isPlaying })
	}
}