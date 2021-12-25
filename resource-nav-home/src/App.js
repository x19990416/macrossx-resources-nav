import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/home/index"
import {Spin} from "antd";
import 'antd/dist/antd.min.css'

function App() {
    const fallbackView = <div className="center-container"><Spin size="large"/></div>;
    return (
        <React.Suspense fallback={fallbackView}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </Router>
        </React.Suspense>
    );
}

export default App;
