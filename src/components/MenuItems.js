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
      <li><a href="#">Upcoming Shows</a></li>
      <li><a href="#">Albulms</a></li>
      <li><a href="#">Free Tracks</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Live</a></li>
      <li><a href="#">Home</a></li>
    </ul>

		)
	}
}