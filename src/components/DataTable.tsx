
import React from 'react';
import { ChevronUp } from 'lucide-react';

interface Column {
  id: string;
  header: string;
  accessorKey?: string;
  cell?: (info: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, title }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between py-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {column.id === 'title' && <ChevronUp className="h-4 w-4" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.id}`}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {column.cell
                    ? column.cell(row)
                    : column.accessorKey
                    ? row[column.accessorKey]
                    : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
