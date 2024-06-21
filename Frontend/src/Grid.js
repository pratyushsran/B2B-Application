import data from './data.json';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
      field: 'Sl No',
      headerName: 'Sl No',
      width: 120,
    },
    {
      field: 'CUSTOMER ORDER ID',
      headerName: 'CUSTOMER ORDER ID',
      width: 200,
    },
    {
      field: 'SALES ORG',
      headerName: 'SALES ORG',
      width: 160,
    },
    {
      field: 'DISTRIBUTION CHANNEL',
      headerName: 'DISTRIBUTION CHANNEL',
      width: 220,
    },
    {
      field: 'COMPANY CODE',
      headerName: 'COMPANY CODE',
      width: 160,
    },
    {
      field: 'ORDER CREATION DATE',
      headerName: 'ORDER CREATION DATE',
      width: 200,
    },
    {
      field: 'ORDER AMOUNT',
      headerName: 'ORDER AMOUNT',
      width: 180,
    },
    {
      field: 'ORDER CURRENCY',
      headerName: 'ORDER CURRENCY',
      width: 180,
    },
    {
      field: 'CUSTOMER NUMBER',
      headerName: 'CUSTOMER NUMBER',
      width: 180,
    },
  ];


export default function Grid() {
  return (
    <Box  sx={{ height: 560, width: '100%',backgroundColor:"#2D4250",color:"#FFFFFF" }}>
      <DataGrid
        sx={{color:"#ffffff"}}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
