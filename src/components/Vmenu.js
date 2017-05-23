import { Component } from 'react'
import './styles/vmenu.css'

export class Vmenu extends Component{
	

	componentDidMount() {
		this.menu()
	}


	render(){
		return(

<div>
<nav>
        <div className="hamburger menu--active">
            <span className="patty"></span>
        </div>
        <ul className="nav-list list__active">
            <li className="nav__item">
                <a href="#intro" className="nav__link c_red"><i className="fa fa-home" aria-hidden="true"></i></a>
            </li>
            <li className="nav__item">
                <a href="#intro" className="nav__link c_blue"><i className="fa fa-code" aria-hidden="true"></i></a>
            </li>
            <li className="nav__item">
                <a href="#intro" className="nav__link c_yellow"><i className="fa fa-download" aria-hidden="true"></i></a>
            </li>
            <li className="nav__item">
                <a href="#intro" className="nav__link c_green"><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </li>
        </ul>
    </nav>
</div>



		)
	}

	menu(){

    const burger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        burger.classList.toggle('menu--active');
        navList.classList.toggle('list__active');
    });



	}
}

