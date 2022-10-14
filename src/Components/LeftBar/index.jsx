import { Button, Menu, Table } from "antd";
import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import router from "../Router";
import {Link} from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const LeftBar = () => {
  const items = [
    getItem(
      <Link to='/' >
        Dashboard
      </Link>,
      "1",
      <PieChartOutlined />
    ),
    getItem(<Link to='/quan-tri-thiet-bi'>
      Quản trị thiết bị
    </Link>, "2", <DesktopOutlined />),
    // getItem("Option 3", "3", <ContainerOutlined />),
    // getItem("Navigation One", "sub1", <MailOutlined />, [
    //   getItem("Option 5", "5"),
    //   getItem("Option 6", "6"),
    //   getItem("Option 7", "7"),
    //   getItem("Option 8", "8"),
    // ]),
    // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    //   getItem("Option 9", "9"),
    //   getItem("Option 10", "10"),
    //   getItem("Submenu", "sub3", null, [
    //     getItem("Option 11", "11"),
    //     getItem("Option 12", "12"),
    //   ]),
    // ]),
  ];
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: !collapsed ? 256 : "auto",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          float: "left",
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default LeftBar;
