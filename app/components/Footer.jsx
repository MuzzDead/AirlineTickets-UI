import React from 'react';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';


const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ backgroundColor: '#0D92F4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <div style={{ color: 'white' }}>© 2023 AirlineTickets. All rights reserved.</div>
            <a href="https://github.com/MuzzDead" target="_blank" rel="noopener noreferrer">
                <GithubOutlined style={{ color: 'white', fontSize: '24px' }} />
            </a>
        </Footer>
    );
};

export default FooterComponent;