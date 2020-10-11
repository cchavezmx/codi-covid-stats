import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function UserDataGrid(props) {
  return (
      
    <div style={{ height: 400, width: '100%' }}>
        {console.log(props)}
      <DataGrid rows={props.data} columns={props.columns} pageSize={5} checkboxSelection />
    </div>
  );
}
