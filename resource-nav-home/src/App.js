import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BasicLayout from "./components/layout/basic_layout"
import {Spin} from "antd";
import 'antd/dist/antd.min.css'
import Home from "./page/home/index"
function App() {
    const fallbackView = <div className="center-container"><Spin size="large"/></div>;
    return (
        <React.Suspense fallback={fallbackView}>
            <Router>
                <Routes>
                    <Route path="/" element={<BasicLayout><Home></Home></BasicLayout>}></Route>
                </Routes>
            </Router>
        </React.Suspense>
    );
}

export default App;
