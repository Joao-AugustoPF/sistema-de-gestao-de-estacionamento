CREATE TABLE Permissoes (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL
);

CREATE TABLE Funcionarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(40) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    cargo VARCHAR(50),
    permissao_id INT UNSIGNED,
    FOREIGN KEY (permissao_id) REFERENCES Permissoes(id)
);

CREATE TABLE Veiculos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) NOT NULL,
    tipo_veiculo ENUM('Moto', 'Caminhão', 'Carro') NOT NULL
);

CREATE TABLE TipoVaga (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL
);

CREATE TABLE Vagas (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    numero INT UNSIGNED NOT NULL,
    tipo_id INT UNSIGNED,
    veiculo_id INT UNSIGNED,
    disponivel TINYINT(1) DEFAULT 1,
    FOREIGN KEY (tipo_id) REFERENCES TipoVaga(id),
    FOREIGN KEY (veiculo_id) REFERENCES Veiculos(id),
    INDEX (tipo_id),
    INDEX (veiculo_id)
);

CREATE TABLE Tarifas (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo_id INT UNSIGNED,
    valor_por_hora DECIMAL(10, 2),
    FOREIGN KEY (tipo_id) REFERENCES TipoVaga(id),
    INDEX (tipo_id)
);

CREATE TABLE Pagamentos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    movimentacao_id INT UNSIGNED,
    metodo_pagamento ENUM('Cartão', 'Dinheiro', 'Pix') NOT NULL,
    valor_pago DECIMAL(10, 2) NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (movimentacao_id) REFERENCES Movimentacoes(id),
    INDEX (movimentacao_id)
);

CREATE TABLE Movimentacoes (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    vaga_id INT UNSIGNED,
    veiculo_id INT UNSIGNED,
    entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    saida TIMESTAMP NULL,
    FOREIGN KEY (vaga_id) REFERENCES Vagas(id),
    FOREIGN KEY (veiculo_id) REFERENCES Veiculos(id),
    INDEX (vaga_id),
    INDEX (veiculo_id)
);

