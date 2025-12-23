import { useState, useEffect } from 'react';
import { applyCpfMask, applyPhoneMask } from '../../utils/masks';

interface Person {
  id?: number; // id is optional for new persons
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

interface FormProps {
  onPersonRegistered: () => void;
  personToEdit: Person | null;
  setPersonToEdit: (person: Person | null) => void;
}

function Form({ onPersonRegistered, personToEdit, setPersonToEdit }: FormProps) {
  const [person, setPerson] = useState<Person>({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone: '',
  });

  useEffect(() => {
    if (personToEdit) {
      setPerson(personToEdit);
    } else {
      setPerson({
        nome: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        telefone: '',
      });
    }
  }, [personToEdit]);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setPerson((prevPerson) => ({
        ...prevPerson,
        [name]: applyPhoneMask(value),
      }));
    } else if (name === 'cpf') {
      setPerson((prevPerson) => ({
        ...prevPerson,
        [name]: applyCpfMask(value),
      }));
    } else {
      setPerson((prevPerson) => ({
        ...prevPerson,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = person.id ? 'PUT' : 'POST';
    const url = person.id ? `http://localhost:3001/people/${person.id}` : 'http://localhost:3001/people';

    const personToSubmit = {
      ...person,
      cpf: person.cpf.replace(/\D/g, ''),
    };

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personToSubmit),
      });
      if (response.ok) {
        alert(`Pessoa ${person.id ? 'atualizada' : 'cadastrada'} com sucesso!`);
        setPerson({
          nome: '',
          cpf: '',
          dataNascimento: '',
          email: '',
          telefone: '',
        });
        setPersonToEdit(null); // Clear editing state
        onPersonRegistered(); // Call the callback to refresh the table
      } else {
        alert(`Erro ao ${person.id ? 'atualizar' : 'cadastrar'} pessoa.`);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  const handleCancelEdit = () => {
    setPersonToEdit(null);
    setPerson({
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      telefone: '',
    });
  };

  return (
    <div className="App">
      <h1>{person.id ? 'Editar Pessoa' : 'Cadastro de Pessoa'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={person.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={person.cpf}
            onChange={handleChange}
            maxLength={14}
            required
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            title="Digite uma data válida"
            id="dataNascimento"
            name="dataNascimento"
            value={person.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={person.telefone}
            onChange={handleChange}
            maxLength={15} // (XX) XXXXX-XXXX (15 characters)
            required
          />
        </div>
        <button type="submit">{person.id ? 'Atualizar' : 'Cadastrar'}</button>
        {person.id && (
          <button type="button" onClick={handleCancelEdit} className="cancel-button">
            Cancelar Edição
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
