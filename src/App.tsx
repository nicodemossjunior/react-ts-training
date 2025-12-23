import { useState } from 'react';
import Form from './components/cadastro/Form';
import CustomDataTable from './components/listagem/CustomDataTable';
import './App.css';

interface Person {
  id?: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

function App() {
  const [refreshTable, setRefreshTable] = useState(false);
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  const handlePersonRegistered = () => {
    setRefreshTable(prev => !prev);
    setEditingPerson(null); // Clear editing state after successful registration/update
  };

  const handleEdit = (person: Person) => {
    setEditingPerson(person);
  };

  return (
    <>
      <Form 
        onPersonRegistered={handlePersonRegistered} 
        personToEdit={editingPerson}
        setPersonToEdit={setEditingPerson}
      />
      <CustomDataTable 
        refreshTrigger={refreshTable} 
        onEdit={handleEdit}
      />
    </>
  );
}

export default App;
