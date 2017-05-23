import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main';


// routing
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';


window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={ Main }>
		</Route>
	</Router>,
	document.getElementById('page')
)
