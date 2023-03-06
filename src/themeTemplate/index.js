import React from 'react';
import { Tag } from 'antd';
import Button from './button';
import Tables from './tables';

export default function Index() {
  const columns = [
    {
      label: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      label: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      label: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      label: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="green" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      tag: ['arr-1', 'arr-2'],
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      tag: ['arr-1', 'arr-2'],
    },
  ];

  return (
    <div>
      <Button />
      <br />
      <br />
      <Tables columns={columns} data={data} />
      <Tables columns={columns} data={data} hover />
      <Tables columns={columns} data={data} striped />
    </div>
  );
}
