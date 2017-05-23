import { Component } from 'react'

import { ImageCom } from './ImageCom'
import { Intro } from './Intro'

export class Main extends Component{

	state = {
		isLoading: true
	}

	componentDidMount() {
		setTimeout( ()=> {
			this.setState( { isLoading: false } )
		}, 9000)
	}

	render(){
		return(
			<div>
				{
					this.state.isLoading ?
					<Intro />
					:
					<ImageCom />
				}
			</div>
		)
	}
}