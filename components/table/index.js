import { Space, Table, Tag } from 'antd';


const UMTable = ({ columns, data, header, footer }) =>
  <Table className='um-table' columns={columns} dataSource={data} 
    title={header ? () => header : undefined}
    footer={footer ? () => 'Footer' : undefined} />;
export default UMTable;