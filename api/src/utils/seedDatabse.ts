// src/utils/createDefaultFuncionario.ts
import bcrypt from 'bcryptjs';
import Funcionario from '../models/Funcionario';
import Permissao from '../models/Permissao';

export async function createDefaultFuncionario() {
  try {
    // Verifica se a permissão de administrador já existe
    const permissaoDescricao = 'Administrador';
    let permissao = await Permissao.findOne({ where: { descricao: permissaoDescricao } });

    if (!permissao) {
      permissao = await Permissao.create({ descricao: permissaoDescricao });
    }

    // Verifica se o funcionário master já existe
    const cpf = '12345678900';
    const existingFuncionario = await Funcionario.findOne({ where: { cpf } });

    if (!existingFuncionario) {
      // Se não existe, cria o funcionário master
      const hashedPassword = await bcrypt.hash('123456', 10);
      await Funcionario.create({
        nome: 'Master Admin',
        cpf: cpf,
        cargo: 'Administrador',
        permissaoId: permissao.id,
        password: hashedPassword
      });
      console.log('Default master funcionario created.');
    } else {
      console.log('Default master funcionario already exists.');
    }
  } catch (error) {
    console.error('Error creating default master funcionario:', error);
  }
}
