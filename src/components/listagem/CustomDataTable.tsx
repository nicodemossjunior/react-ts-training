import React, { useEffect, useState, useCallback } from 'react';
import PessoaDetalhe from './PessoaDetalhe';

interface Person {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

interface CustomDataTableProps {
  refreshTrigger: boolean;
  onEdit: (person: Person) => void;
}

const CustomDataTable: React.FC<CustomDataTableProps> = ({ refreshTrigger, onEdit }) => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchPeople = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/people');
      if (response.ok) {
        const data: Person[] = await response.json();
        setPeople(data);
      } else {
        console.error('Erro ao buscar pessoas.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  }, []);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople, refreshTrigger]); // Add refreshTrigger to dependencies

  const handleDelete = (id: number) => {
    // After deletion in PessoaDetalhe, re-fetch the list
    fetchPeople();
  };

  return (
    <div className="data-table-container">
      <h2>Pessoas Cadastradas</h2>
      {people.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <PessoaDetalhe key={person.id} person={person} onDelete={handleDelete} onEdit={onEdit} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma pessoa cadastrada ainda.</p>
      )}
    </div>
  );
};

export default CustomDataTable;