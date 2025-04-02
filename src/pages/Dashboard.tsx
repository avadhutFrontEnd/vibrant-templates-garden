
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DataTable from '../components/DataTable';
import { CheckSquare, Circle } from 'lucide-react';

const data = [
  { id: 1, number: '1', name: '', type: '37', details: 'Peldi' },
  { id: 2, number: '', name: 'Marco Botton\nTuttofare', type: '34', details: '' },
  { id: 3, number: '', name: 'Mariah Maclachlan\nBetter Half', type: '37 Patata', details: '' },
  { id: 4, number: '', name: 'Valerie Liberty\nHead Chef', type: ':) Val', details: '' },
  { id: 5, number: '', name: 'Guido Jack Guilizzoni', type: '6 The Guids', details: '' },
];

const columns = [
  {
    id: 'number',
    header: 'Number',
    accessorKey: 'number',
  },
  {
    id: 'name',
    header: 'Title',
    accessorKey: 'name',
    cell: (info: any) => (
      <div className="whitespace-pre-line">{info.name}</div>
    ),
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
  },
  {
    id: 'details',
    header: 'Details **',
    accessorKey: 'details',
  },
  {
    id: 'actions',
    header: '',
    cell: (info: any) => (
      <div className="flex justify-center">
        {info.id % 2 === 0 ? (
          <CheckSquare className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </div>
    ),
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <DataTable columns={columns} data={data} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
