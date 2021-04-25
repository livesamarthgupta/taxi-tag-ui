import React from "react";
import { Button, Card, Divider, Input, Tabs, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LockOutlined,
  CarOutlined,
} from "@ant-design/icons";

import "./Login.css";

class Login extends React.Component {
  tabList = [
    {
      key: "tab1",
      tab: <UserOutlined style={{ fontSize: "32px", paddingLeft: "15px" }} />,
    },
    {
      key: "tab2",
      tab: <CarOutlined  style={{ fontSize: "32px", paddingLeft: "15px" }} />,
    },
  ];

  render() {
    return (
      <div className="login-container">
        <Card
          style={{ width: 300 }}
          // title="Hey, Welcome back!"
          tabList={this.tabList}
          hoverable
          headStyle={{ fontSize: "20px" }}
          // activeTabKey={this.state.key}
          // onTabChange={key => {
          //   this.onTabChange(key, 'key');
          // }}>
          tabProps={{ centered: true }}
        >
          <Input
            size="large"
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            // suffix={
            //   <Tooltip title="Extra information">
            //     <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            //   </Tooltip>
            // }
          />
          <br />
          <br />
          <Input.Password
            placeholder="Password"
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
          <br />

          {/* <div className="forgot-password">
            <Button
              type="link"
              size="small"
              className="btn forgot-password-btn"
            >
              Forgot Password?
            </Button>
          </div> */}
          <br />
          <br />
          <div className="btn-container">
            <Button type="primary" size="large" className="btn signin">
              Sign In
            </Button>
            <Button type="default" size="large" className="btn cancel">
              Cancel
            </Button>
          </div>

          {/* <Divider>Or login with</Divider>
          <div className="icons-container">
            <a href="#" className="icon-link">
              <GoogleOutlined style={{ fontSize: "32px" }} />
            </a>
            <a href="#" className="icon-link">
              <FacebookOutlined style={{ fontSize: "32px" }} />
            </a>
            <a href="#" className="icon-link">
              <TwitterOutlined style={{ fontSize: "32px" }} />
            </a>
          </div> */}
        </Card>
      </div>
    );
  }
}

export default Login;
