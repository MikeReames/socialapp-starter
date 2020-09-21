import React from "react";
import { Layout, Menu } from 'antd';
import "./Menu.css";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import { Link } from "react-router-dom";
import theQuestBoard from './theQuestBoardIcon.png'

class MenuUnauthenticated extends React.Component {
  
  render() {
    const { Sider } = Layout;
    return (
      <Layout>
    <Sider className="sider"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo"><Link to="/"><img src={theQuestBoard} alt="QuestBoard Logo"/></Link> </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" >
        <Link to="/ContactUs">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="3" >
        nav 3
        </Menu.Item>
        <Menu.Item key="4" >
        nav 4
        </Menu.Item>
        <Menu.Item key="5" >
          nav 5
        </Menu.Item>
        <Menu.Item key="6" >
          nav 6
        </Menu.Item>
        <Menu.Item key="7" >
          nav 7
        </Menu.Item>
        <Menu.Item key="8" >
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>
    );
  }
}

export default userIsNotAuthenticated(MenuUnauthenticated);