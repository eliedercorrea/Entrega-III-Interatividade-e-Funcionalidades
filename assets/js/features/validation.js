// features/validation.js
export const Validators = {
  notEmpty: (v) => v && v.trim().length > 0 ? null : 'Campo obrigatório.',
  minLength: (n) => (v) => (v||'').trim().length >= n ? null : `Use pelo menos ${n} caracteres.`,
  email: (v) => /\S+@\S+\.\S+/.test(v) ? null : 'E-mail inválido.',
  telBR: (v) => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v) ? null : 'Telefone inválido.',
  cep: (v) => /^\d{5}-\d{3}$/.test(v) ? null : 'CEP inválido.',
  cpf: (v) => {
    // Validação básica de CPF com dígitos verificadores
    const num = (v||'').replace(/\D/g,'');
    if(num.length !== 11 || /^(\d)\1+$/.test(num)) return 'CPF inválido.';
    const calc = (slice) => {
      let sum = 0; for(let i=0;i<slice;i++) sum += parseInt(num[i]) * (slice + 1 - i);
      const mod = (sum * 10) % 11;
      return mod === 10 ? 0 : mod;
    };
    if(calc(9) !== parseInt(num[9]) || calc(10) !== parseInt(num[10])) return 'CPF inválido.';
    return null;
  },
  birthDate16: (v) => {
    if(!v) return 'Data inválida.';
    const d = new Date(v); if(isNaN(d)) return 'Data inválida.';
    const now = new Date(); const age = now.getFullYear() - d.getFullYear() - ((now.getMonth()<d.getMonth() || (now.getMonth()==d.getMonth() && now.getDate()<d.getDate()))?1:0);
    return age >= 16 ? null : 'É necessário ter pelo menos 16 anos.';
  }
};

export function validateRegistration(form){
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};

  const checks = {
    nome: [Validators.notEmpty, Validators.minLength(6)],
    email: [Validators.notEmpty, Validators.email],
    cpf: [Validators.notEmpty, Validators.cpf],
    telefone: [Validators.notEmpty, Validators.telBR],
    nascimento: [Validators.notEmpty, Validators.birthDate16],
    cep: [Validators.notEmpty, Validators.cep],
    endereco: [Validators.notEmpty, Validators.minLength(6)],
    cidade: [Validators.notEmpty],
    estado: [Validators.notEmpty],
    tipo: [Validators.notEmpty]
  };

  for(const [field, rules] of Object.entries(checks)){
    for(const rule of rules){
      const msg = rule(data[field]);
      if(msg){ (errors[field] ??= []).push(msg); break; }
    }
  }

  // Consistência de dados extra: Nome deve ter pelo menos nome e sobrenome
  if(!errors.nome && (data.nome?.trim().split(/\s+/).length < 2)){
    errors.nome = ['Informe nome e sobrenome.'];
  }

  return { valid: Object.keys(errors).length === 0, errors, data };
}