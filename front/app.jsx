import React from 'react'
import ReactDom from 'react-dom'

const App = React.createClass({
	render(){
		return(
			<div>hello vietnam</div>
			)
	}
})

ReactDom.render(<App/>,
	document.getElementById('app')
	)