export const applyCpfMask = (value: string) => {
  if (!value) return '';
  // Remove todos os caracteres que não são dígitos
  let cpf = value.replace(/\D/g, '');

  // Aplica a máscara de CPF (XXX.XXX.XXX-XX)
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
};

export const applyPhoneMask = (value: string) => {
  if (!value) return '';
  // Remove todos os caracteres que não são dígitos
  let phone = value.replace(/\D/g, '');

  // Aplica a máscara de telefone ((XX) XXXXX-XXXX)
  phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
  phone = phone.replace(/(\d{5})(\d{4})$/, '$1-$2');


  return phone;
};
