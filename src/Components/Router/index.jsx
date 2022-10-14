import Home from "../Home";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard";

const Redirect = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route exact path="/quan-tri-thiet-bi" element={<Home/>}/>
            </Routes>
    )
}

export default Redirect;