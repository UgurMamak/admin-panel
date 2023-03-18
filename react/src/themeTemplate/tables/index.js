import React from 'react';
import './index.scss';

export default function Index({
  columns,
  data,
  mobileShowItem = 2,
  hover = false,
  scrollable = false,
  striped = false,
}) {
  return (
    <div className="um-table-layout">
      <div className="um-table-header">Team Members</div>
      <div className="um-table-content table-scrollable">
        <table
          className={`um-table ${hover && 'table-hover'} ${
            striped && 'table-striped'
          }`}
        >
          <thead className="um-table-thead">
            <tr>
              {columns.map((item) => (
                <TableHeaderItem key={item.key} data={item} />
              ))}
            </tr>
          </thead>
          <tbody className="um-table-tbody">
            {data.map((item, index) => (
              <tr key={item.key} className="um-table-row">
                {columns.map((column) => (
                  <TableRowItem key={column.key} item={item} column={column} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableHeaderItem({ data }) {
  return (
    <th key={data.key} className="um-table-cell">
      {data.label}
    </th>
  );
}

function TableRowItem({ item, column }) {
  return (
    <td key={item.key} className="um-table-cell">
      {column.render
        ? column.render(item[column.dataIndex])
        : item[column.dataIndex]}
    </td>
  );
}
