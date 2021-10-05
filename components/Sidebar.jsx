import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import style from '../styles/index.module.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const indexPage = () =>{
    return(
        <Layout>
        <Header className="header">
          <div className={style.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className={style.background}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Apps">
                <Menu.Item key="1">Clientes</Menu.Item>
                <Menu.Item key="2">Cuenta Bancaria</Menu.Item>
                <Menu.Item key="3">Reportes</Menu.Item>
                
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="UI Elements">
                <Menu.Item key="5">General</Menu.Item>
                <Menu.Item key="6">Pickers</Menu.Item>
                <Menu.Item key="7">Layout</Menu.Item>
                <Menu.Item key="8">Forms y controls</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Pages">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
}


export default indexPage;