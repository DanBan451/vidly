import React from 'react'
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";


const Table = ({ columns, data, onSort, sortColumn }) => {
  return (
    <table className='table'>        
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
      <TableBody columns={columns} data={data} onSort={onSort} sortColumn={sortColumn} />                
    </table>
  )
}

export default Table





