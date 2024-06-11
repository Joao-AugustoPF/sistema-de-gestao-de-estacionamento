-- Tabela Veículos
CREATE TABLE Veiculos (
    veiculo_id SERIAL PRIMARY KEY,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(50),
    cor VARCHAR(20)
);

-- Tabela Vagas 
CREATE TABLE VAGAS (
    vaga_id SERIAL PRIMARY KEY,
    numero_vaga INTEGER NOT NULL,
    andar INTEGER,
    tipo VARCHAR(20)
);

-- Tabela Movimentações
CREATE TABLE Movimentacoes (
    movimentacao_id SERIAL PRIMARY KEY,
    veiculo_id INTEGER REFERENCES Veiculos(veiculo_id),
    vaga_id INTEGER REFERENCES Vagas(vaga_id),
    data_entrada TIMESTAMP NOT NULL,
    data_saida TIMESTAMP,
    valor_devido DECIMAL(10, 2),
    is_pago BOOLEAN
);

Tabela Funcionários
CREATE TABLE Funcionarios (
    funcionario_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14),
    telefone VARCHAR(15),
    email VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10, 2)
);

-- Tabela Pagamentos
CREATE TABLE Pagamentos (
    pagamento_id SERIAL PRIMARY KEY,
    movimentacao_id INTEGER REFERENCES Movimentacoes(movimentacao_id),
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento TIMESTAMP NOT NULL,
    metodo_pagamento VARCHAR(50)
);

-- Tabela Preços
CREATE TABLE Precos (
    preco_id SERIAL PRIMARY KEY,
    tipo_veiculo VARCHAR(20) NOT NULL,
    valor_hora DECIMAL(10, 2) NOT NULL,
    valor_diaria DECIMAL(10, 2) NOT NULL
);

-- Tabela Reservas
CREATE TABLE Reservas (
    reserva_id SERIAL PRIMARY KEY,
    veiculo_id INTEGER REFERENCES Veiculos(veiculo_id),
    vaga_id INTEGER REFERENCES Vagas(vaga_id),
    data_reserva DATE NOT NULL,
    hora_reserva TIME NOT NULL
);

-- Tabela Histórico de Manutenção
CREATE TABLE Historico_Manutencao (
    manutencao_id SERIAL PRIMARY KEY,
    vaga_id INTEGER REFERENCES Vagas(vaga_id),
    descricao TEXT,
    data_manutencao DATE NOT NULL,
    funcionario_id INTEGER REFERENCES Funcionarios(funcionario_id)
);