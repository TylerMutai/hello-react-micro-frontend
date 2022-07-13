import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'


const HelloWorld = () => (<div>Hello World!</div>)
const HelloReact = () => (<div>Hello React!</div>)

function App() {
    return (
        <Router key={new Date().toISOString()} basename={"/hello-react"}>
            <Routes>
                <Route path="/react" element={<HelloReact/>}/>
                <Route path="/" element={<HelloWorld/>}/>
            </Routes>
        </Router>
    )
}

export default App;
