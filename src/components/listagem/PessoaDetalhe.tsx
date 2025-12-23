import React from 'react';
import { applyCpfMask, applyPhoneMask } from '../../utils/masks';

interface Person {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

interface PessoaDetalheProps {
  person: Person;
  onDelete: (id: number) => void;
  onEdit: (person: Person) => void;
}

const PessoaDetalhe: React.FC<PessoaDetalheProps> = ({ person, onDelete, onEdit }) => {
  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir ${person.nome}?`)) {
      try {
        const response = await fetch(`http://localhost:3001/people/${person.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Pessoa excluída com sucesso!');
          onDelete(person.id); // Notify parent to refresh data
        } else {
          alert('Erro ao excluir pessoa.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
      }
    }
  };

  const handleEdit = () => {
    onEdit(person);
  };

  return (
    <tr>
      <td>{person.nome}</td>
      <td>{applyCpfMask(person.cpf)}</td>
      <td>{person.dataNascimento}</td>
      <td>{person.email}</td>
      <td>{applyPhoneMask(person.telefone)}</td>
      <td>
        <button onClick={handleEdit} className="icon-button edit-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.121z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 2.5 2H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
        </button>
        <button onClick={handleDelete} className="icon-button delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1zM4.5 4h7V3h-7zM12 4H4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"/>
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default PessoaDetalhe;