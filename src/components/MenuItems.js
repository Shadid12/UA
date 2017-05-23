import { Component } from 'react'
import './styles/menuitems.css'
import $ from 'jquery';
import animate from 'animate.css';

export class MenuItems extends Component{
	
	componentDidMount() {
		$('#anav').addClass('animated bounceIn');
	}

	render(){
		return(

    <ul className="nav" id="anav">
      <li><a href="#" 
      			onMouseEnter={ () => { $('#a').addClass('animated jello'); } }
                onMouseLeave={ () => { $('#a').removeClass('animated jello'); } }>
      	<img src="./assets/icons/net.svg" alt="Home" id="a"
      			className="imgClass" /><br />
      	Upcoming Shows
      </a></li>
      <li><a href="#"
      			onMouseEnter={ () => { $('#b').addClass('animated jello'); } }
            	onMouseLeave={ () => { $('#b').removeClass('animated jello'); } }>
      	<img src="./assets/icons/share.svg" alt="Home" className="imgClass" id="b" /><br />
      	Albulms</a></li>
      <li><a href="#"
      			onMouseEnter={ () => { $('#c').addClass('animated jello'); } }
                onMouseLeave={ () => { $('#c').removeClass('animated jello'); } }>
      	<img src="./assets/icons/smart.svg" alt="Home" className="imgClass" id="c" /><br />
      	Free Tracks</a></li>
      <li><a href="#"
      			onMouseEnter={ () => { $('#d').addClass('animated jello'); } }
                onMouseLeave={ () => { $('#d').removeClass('animated jello'); } } >
      	<img src="./assets/icons/play.svg" alt="Home" className="imgClass" id="d"/><br />
      	About</a></li>
      <li><a href="#"
      			onMouseEnter={ () => { $('#e').addClass('animated jello'); } }
                onMouseLeave={ () => { $('#e').removeClass('animated jello'); } }>
      	<img src="./assets/icons/live.svg" alt="Home" className="imgClass" id="e"/><br />
      	Live</a></li>
      <li><a href="#"
      			onMouseEnter={ () => { $('#f').addClass('animated jello'); } }
                onMouseLeave={ () => { $('#f').removeClass('animated jello'); } }>
      	<img src="./assets/icons/code.svg" alt="Home" className="imgClass" id="f"/><br />
      	Home</a></li>
    </ul>

		)
	}
}