import React from 'react';
import ReactDOM from 'react-dom';
import Songs from './components/songs';

const App = ()=>(
    <div>
        <h1>Hello</h1>
        <Songs/>
    </div>

)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)

