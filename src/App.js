import {Route, Routes,} from 'react-router-dom'
import CustomRouter from "./components/custom_router";


const HelloWorld = () => (<div>Hello World!</div>)
const HelloReact = () => (<div>Hello React!</div>)

function App({history}) {
    return (
        <CustomRouter history={history}>
            <Routes>
                <Route path="/react" element={<HelloReact/>}/>
                <Route path="/" element={<HelloWorld/>}/>
            </Routes>
        </CustomRouter>
    )
}

export default App;
