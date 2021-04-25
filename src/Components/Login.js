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
import LocationSelector from "./LocationSelector";

class Login extends React.Component {
  state = { userType: null };

  tabList = [
    {
      key: "traveller",
      tab: <UserOutlined style={{ fontSize: "32px", paddingLeft: "15px" }} />,
    },
    {
      key: "cab",
      tab: <CarOutlined style={{ fontSize: "32px", paddingLeft: "15px" }} />,
    },
  ];

  onTabChange = (key) => {
    console.log(key);
    this.setState({ userType: key });
  };

  componentDidMount() {
    // todo: send current location to websocket
  }

  render() {
    return (
      <div className="login-container">
        <Card
          style={{ width: "50rem" }}
          // title="Choose your role"
          tabList={this.tabList}
          hoverable
          headStyle={{ fontSize: "20px" }}
          // activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key);
          }}
          tabProps={{ centered: true }}
        >
          <div className="location-selector">
            <LocationSelector />
          </div>
          <br />
          <div className="btn-container">
            <Button type="primary" size="large" className="btn signin">
              Let's Go!
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
