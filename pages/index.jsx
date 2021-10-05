import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import style from '../styles/index.module.css'
import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const columns = [
  {field: 'id', headerName: 'ID'},
  {field: 'title', headerName: 'Title', width: 300},
  {field: 'body', headerName: 'Body', width: 600}
  
]

const indexPage = () =>{

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  })
    return(
        <Layout>
        <Header className="header">
          <div className={style.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">NEXT MATERIAL</Menu.Item>
           
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
                <Menu.Item key="4">Notificaciones</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="UI Elements">
                <Menu.Item key="5">General</Menu.Item>
                <Menu.Item key="6">Pickers</Menu.Item>
                <Menu.Item key="7">Layout</Menu.Item>
                <Menu.Item key="8">Forms y controls</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Pages">
                <Menu.Item key="9">option</Menu.Item>
                <Menu.Item key="10">option</Menu.Item>
                
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Data Table</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
          </Layout>
        </Layout>
      </Layout>
    );
}


export default indexPage;