import React from 'react';
import {Col, Layout, Row} from 'antd'
import './index.css'


class Home extends React.Component {
    render() {
        return (
            <>
                <Layout.Header id="header">header</Layout.Header>
                <div className="main-wrapper">
                    <Row gutter={24}>
                        <Col xs={0} md={8} style={{padding:'0 50px'}}>123</Col>
                        <Col xs={24} md={16} style={{padding:'0 50px'}}>content</Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Home
