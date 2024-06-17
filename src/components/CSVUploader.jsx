import React, { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';
import Papa from 'papaparse';

const CSVUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          onUpload(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  return (
    <VStack spacing={4}>
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <Button onClick={handleUpload} colorScheme="blue">Upload CSV</Button>
    </VStack>
  );
};

export default CSVUploader;