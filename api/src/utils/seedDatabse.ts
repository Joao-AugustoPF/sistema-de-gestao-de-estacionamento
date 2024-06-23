import bcrypt from 'bcryptjs';
import Funcionario from '../models/Funcionario';
import Permissao from '../models/Permissao';

export async function createDefaultFuncionario() {
  try {
    const permissaoDescricao = 'Administrador';
    let permissao = await Permissao.findOne({ where: { descricao: permissaoDescricao } });

    if (!permissao) {
      permissao = await Permissao.create({ descricao: permissaoDescricao });
    }

    const cpf = '12345678900';
    const existingFuncionario = await Funcionario.findOne({ where: { cpf } });

    if (!existingFuncionario) {
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
