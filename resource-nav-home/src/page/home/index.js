import React from 'react';
import {Col, Row} from 'antd'
import './index.css'


export default () => {
    return (
        <Row gutter={24}>
            <Col xs={24} md={16} style={{padding: '0 50px'}}>content</Col>
            <Col xs={0} md={8} style={{padding: '0 50px'}}>123</Col>
        </Row>

    )
}
