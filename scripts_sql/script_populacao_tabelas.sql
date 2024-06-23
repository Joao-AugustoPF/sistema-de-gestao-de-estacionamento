-- Permissoes
INSERT INTO Permissoes (descricao) VALUES ('Admin');
INSERT INTO Permissoes (descricao) VALUES ('Usuario');
INSERT INTO Permissoes (descricao) VALUES ('Visitante');

-- Funcionarios
INSERT INTO Funcionarios (nome, cpf, email, telefone, ativo, cargo, permissao_id) 
VALUES 
('João Silva', '123.456.789-00', 'joao.silva@example.com', '11987654321', TRUE, 'Gerente', 1),
('Maria Oliveira', '987.654.321-00', 'maria.oliveira@example.com', '11876543210', TRUE, 'Atendente', 2),
('Carlos Souza', '456.789.123-00', 'carlos.souza@example.com', '11765432109', TRUE, 'Supervisor', 1);

-- Veiculos
INSERT INTO Veiculos (placa, tipo_veiculo, modelo, marca, cor, ano, proprietario, telefone_proprietario) 
VALUES 
('ABC1D23', 'carro', 'Civic', 'Honda', 'Preto', 2018, 'Ana Lima', '11987654321'),
('EFG4H56', 'moto', 'Ninja', 'Kawasaki', 'Verde', 2020, 'Pedro Santos', '11876543210'),
('IJK7L89', 'caminhão', 'Actros', 'Mercedes', 'Branco', 2015, 'Luis Almeida', '11765432109'),
('MNO1P23', 'carro', 'Corolla', 'Toyota', 'Prata', 2017, 'Paula Costa', '11654321098'),
('QRS4T56', 'moto', 'CB500', 'Honda', 'Vermelho', 2019, 'Ricardo Pereira', '11543210987'),
('UVW7X89', 'caminhão', 'FH', 'Volvo', 'Azul', 2016, 'Fernanda Nunes', '11432109876'),
('YZA1B23', 'carro', 'Golf', 'Volkswagen', 'Cinza', 2018, 'Gustavo Rocha', '11321098765'),
('BCD4E56', 'moto', 'Hornet', 'Honda', 'Amarelo', 2021, 'Juliana Lima', '11210987654'),
('FGH7I89', 'caminhão', 'Axor', 'Mercedes', 'Preto', 2017, 'Marcos Silva', '11109876543'),
('JKL1M23', 'carro', 'Focus', 'Ford', 'Branco', 2019, 'Roberta Souza', '11098765432'),
('NOP4Q56', 'moto', 'MT-07', 'Yamaha', 'Laranja', 2022, 'Marcelo Reis', '10987654321'),
('RST7U89', 'caminhão', 'Cargo', 'Ford', 'Cinza', 2018, 'Patricia Gomes', '10876543210'),
('VWX1Y23', 'carro', 'Fiesta', 'Ford', 'Vermelho', 2020, 'André Barbosa', '10765432109'),
('ZAB4C56', 'moto', 'Ducati', 'Ducati', 'Rosa', 2021, 'Renata Mendes', '10654321098'),
('CDE7F89', 'carro', 'Uno', 'Fiat', 'Verde', 2020, 'Fábio Souza', '10543210987'),
('FGH1I23', 'caminhão', 'Constellation', 'Volkswagen', 'Azul', 2019, 'Tatiana Silva', '10432109876'),
('JKL4M56', 'carro', 'Cruze', 'Chevrolet', 'Preto', 2018, 'Bruno Fernandes', '10321098765');

-- TipoVaga
INSERT INTO TipoVaga (descricao) VALUES ('Carro');
INSERT INTO TipoVaga (descricao) VALUES ('Moto');
INSERT INTO TipoVaga (descricao) VALUES ('Caminhão');

-- Vagas
INSERT INTO Vagas (numero, tipo_id, veiculo_id, disponivel) 
VALUES 
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 3, 1),
(4, 1, 4, 1),
(5, 2, 5, 1),
(6, 3, 6, 1),
(7, 1, 7, 1),
(8, 2, 8, 1),
(9, 3, 9, 1),
(10, 1, 10, 1),
(11, 2, 11, 1),
(12, 3, 12, 1),
(13, 1, 13, 1),
(14, 2, 14, 1),
(15, 1, 15, 1),
(16, 3, 16, 1),
(17, 1, 17, 1);

-- Tarifas
INSERT INTO Tarifas (tipo_id, valor_por_hora) VALUES (1, 5.00);
INSERT INTO Tarifas (tipo_id, valor_por_hora) VALUES (2, 3.00);
INSERT INTO Tarifas (tipo_id, valor_por_hora) VALUES (3, 7.00);

-- Movimentacoes
INSERT INTO Movimentacoes (vaga_id, veiculo_id, entrada, saida) 
VALUES 
(1, 1, '2023-06-01 08:00:00', NULL),
(2, 2, '2023-06-01 08:30:00', NULL),
(3, 3, '2023-06-01 09:00:00', NULL),
(4, 4, '2023-06-01 09:30:00', NULL),
(5, 5, '2023-06-01 10:00:00', NULL),
(6, 6, '2023-06-01 10:30:00', NULL),
(7, 7, '2023-06-01 11:00:00', NULL),
(8, 8, '2023-06-01 11:30:00', NULL),
(9, 9, '2023-06-01 12:00:00', NULL),
(10, 10, '2023-06-01 12:30:00', NULL),
(11, 11, '2023-06-01 13:00:00', NULL),
(12, 12, '2023-06-01 13:30:00', NULL),
(13, 13, '2023-06-01 14:00:00', NULL),
(14, 14, '2023-06-01 14:30:00', NULL),
(15, 15, '2023-06-01 15:00:00', NULL),
(16, 16, '2023-06-01 15:30:00', NULL),
(17, 17, '2023-06-01 16:00:00', NULL);

-- Pagamentos
INSERT INTO Pagamentos (movimentacao_id, metodo_pagamento, valor_pago, data_pagamento) 
VALUES 
(1, 'Cartão', 15.00, '2023-06-01 09:00:00'),
(2, 'Dinheiro', 10.00, '2023-06-01 09:30:00'),
(3, 'Pix', 20.00, '2023-06-01 10:00:00'),
(4, 'Cartão', 15.00, '2023-06-01 10:30:00'),
(5, 'Dinheiro', 10.00, '2023-06-01 11:00:00'),
(6, 'Pix', 20.00, '2023-06-01 11:30:00'),
(7, 'Cartão', 15.00, '2023-06-01 12:00:00'),
(8, 'Dinheiro', 10.00, '2023-06-01 12:30:00'),
(9, 'Pix', 20.00, '2023-06-01 13:00:00'),
(10, 'Cartão', 15.00, '2023-06-01 13:30:00'),
(11, 'Dinheiro', 10.00, '2023-06-01 14:00:00'),
(12, 'Pix', 20.00, '2023-06-01 14:30:00'),
(13, 'Cartão', 15.00, '2023-06-01 15:00:00'),
(14, 'Dinheiro', 10.00, '2023-06-01 15:30:00'),
(15, 'Pix', 20.00, '2023-06-01 16:00:00'),
(16, 'Cartão', 15.00, '2023-06-01 16:30:00'),
(17, 'Dinheiro', 10.00, '2023-06-01 17:00:00'),
(18, 'Pix', 20.00, '2023-06-01 17:30:00');
