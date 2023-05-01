import React from 'react';
import { Button } from "antd";
import { IoMdColorPalette } from "react-icons/io";
import style from './index.module.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import UMButton from "components/button";
import { UMCheck, UMRadio } from "components/check-radio";
import UMInput from "components/input";
import { Space, Table, Tag } from 'antd';
import UMTable from "components/table";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
];
const Index = () => {
  
  return (
    <div className={style.themePaletteWrapper}>
      <Button type="primary" icon={<IoMdColorPalette />} />
      <div className="theme-palette-body">
        <div className={style.componentItem}>
          <h3>Button</h3>
          <UMButton>Deneme</UMButton>
          <UMButton className='btn-link'>Link</UMButton>
          <UMButton className='btn-primary'>Primary</UMButton>
          <UMButton className='btn-primary' disabled>Primary Disabled </UMButton>
          <UMButton className='btn-secondary'>Secondary</UMButton>
          <UMButton className='btn-secondary' disabled>Secondary Disabled</UMButton>
        </div>

        <div className={style.componentItem}>
          <h3>checkbox</h3>
          <UMCheck text={'text'} />
          <UMCheck text={'text'} />
          <UMCheck text={'default checked'} defaultChecked={true} />
          <UMCheck text={'Disabled'} disabled />
          <UMCheck text={'Error'} error={{ errorStatus: true, errorMessage: 'Hata mesajı' }} />
        </div>

        <div className={style.componentItem}>
          <h3>Radio</h3>
          <UMRadio text={'text'} />
          <UMRadio text={'text'} />
          <UMRadio text={'default checked'} defaultChecked={true} />
          <UMRadio text={'Disabled'} disabled />
          <UMRadio text={'Error'} error={{ errorStatus: true, errorMessage: 'Hata mesajı' }} />
        </div>

        <div className={style.componentItem}>
          <h3>Input</h3>
          <UMInput
            type="text"
            label="Normal"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
          />
          <UMInput
            type="text"
            label="icon input"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            icon={<AiOutlineQuestionCircle />}
          />
          <UMInput
            type="text"
            label="Disabled"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            disabled
          />
          <UMInput
            type="text"
            label="Error"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            icon={<AiOutlineQuestionCircle />}
            error={{
                errorStatus: true,
                errorMessage: 'Error Message'
              }}
          />
        </div>

        <div>
          <h3>Table</h3>
          <UMTable columns={columns} data={data} header={<span>Header<IoMdColorPalette /></span>} />
          <UMTable columns={columns} data={data}  />
        </div>

      </div>
    </div>
  );
}

export default Index;