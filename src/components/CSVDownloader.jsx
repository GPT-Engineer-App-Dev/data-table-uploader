import React from 'react';
import { Button } from '@chakra-ui/react';
import Papa from 'papaparse';

const CSVDownloader = ({ data }) => {
  const handleDownload = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'edited_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} colorScheme="blue">Download CSV</Button>
  );
};

export default CSVDownloader;