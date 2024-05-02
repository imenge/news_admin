import React from 'react'
import { Space, Table, Tag, Button, Form, Input, Row, Col } from 'antd'
import type { TableProps } from 'antd'

const UserList = () => {
  const columns: TableProps<any>['columns'] = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: '年纪',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">详情</Button>
          <Button type="primary" danger>
            冻结
          </Button>
        </Space>
      )
    }
  ]

  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  const formData = {
    username: '',
    page: 1,
    pageSize: 10
  }
  const total = 3

  const onSearch = () => {
    console.log('onSearch')
  }
  const onReset = () => {
    console.log('onReset')
  }

  return (
    <div>
      <Form layout="vertical">
        <Row gutter={30}>
          <Col className="gutter-row" span={7}>
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" value={formData.username} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={7}>
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" value={formData.username} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={7}>
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" value={formData.username} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={7}>
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" value={formData.username} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" onClick={onSearch}>
              搜索
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: formData.pageSize, total }}
      />
    </div>
  )
}

export default UserList
