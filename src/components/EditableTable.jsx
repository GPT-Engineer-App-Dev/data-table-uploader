import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Input } from '@chakra-ui/react';

const EditableTable = ({ data, setData }) => {
  const [newRow, setNewRow] = useState({});

  const handleInputChange = (e, rowIndex, key) => {
    const newData = [...data];
    newData[rowIndex][key] = e.target.value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([...data, newRow]);
    setNewRow({});
  };

  const handleRemoveRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };

  const handleNewRowChange = (e, key) => {
    setNewRow({ ...newRow, [key]: e.target.value });
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => (
            <Th key={key}>{key}</Th>
          ))}
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {Object.keys(row).map((key) => (
              <Td key={key}>
                <Input value={row[key]} onChange={(e) => handleInputChange(e, rowIndex, key)} />
              </Td>
            ))}
            <Td>
              <Button colorScheme="red" onClick={() => handleRemoveRow(rowIndex)}>Remove</Button>
            </Td>
          </Tr>
        ))}
        <Tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => (
            <Td key={key}>
              <Input value={newRow[key] || ''} onChange={(e) => handleNewRowChange(e, key)} placeholder={`New ${key}`} />
            </Td>
          ))}
          <Td>
            <Button colorScheme="green" onClick={handleAddRow}>Add Row</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default EditableTable;