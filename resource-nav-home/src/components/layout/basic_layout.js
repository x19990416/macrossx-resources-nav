import React from 'react';
import {Layout} from 'antd'
import './index.css'

export default (props)=>{
    return (
        <>
            <Layout.Header id="header">header</Layout.Header>
            <div className="main-wrapper">
                {props.children}
                <Layout.Footer>footer</Layout.Footer>
            </div>
        </>
    )

}


