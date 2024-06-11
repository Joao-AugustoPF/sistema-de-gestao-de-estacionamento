
INSERT INTO Permissoes (descricao) VALUES 
('Administrador'), 
('Gerente'), 
('Atendente'),
('Segurança'),
('Limpeza');


INSERT INTO Funcionarios (nome, cpf, email, telefone, ativo, cargo, permissao_id) VALUES
('João Silva', '123.456.789-00', 'joao.silva@example.com', '11999999999', TRUE, 'Gerente de Operações', 2),
('Maria Souza', '987.654.321-00', 'maria.souza@example.com', '11988888888', TRUE, 'Atendente', 3),
('Carlos Pereira', '111.222.333-44', 'carlos.pereira@example.com', '11977777777', TRUE, 'Supervisor', 1),
('Ana Costa', '222.333.444-55', 'ana.costa@example.com', '11966666666', TRUE, 'Segurança', 4),
('Pedro Lima', '333.444.555-66', 'pedro.lima@example.com', '11955555555', TRUE, 'Limpeza', 5),
('Laura Mendes', '444.555.666-77', 'laura.mendes@example.com', '11944444444', TRUE, 'Atendente', 3);


INSERT INTO Veiculos (placa, tipo_veiculo) VALUES
('ABC-1234', 'Carro'),
('XYZ-5678', 'Moto'),
('JKL-9101', 'Caminhão'),
('MNO-2345', 'Carro'),
('PQR-6789', 'Moto'),
('STU-3456', 'Caminhão'),
('VWX-7890', 'Carro');



INSERT INTO TipoVaga (descricao) VALUES 
('Carro'), 
('Moto'), 
('Caminhão'),
('Elétrico'),
('Especial');



INSERT INTO Vagas (numero, tipo_id, veiculo_id, disponivel) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 3, 1),
(4, 1, 4, 1),
(5, 2, 5, 1),
(6, 3, 6, 1),
(7, 1, 7, 1),
(8, 4, NULL, 1), 
(9, 5, NULL, 1); 



INSERT INTO Tarifas (tipo_id, valor_por_hora) VALUES
(1, 5.00),
(2, 3.00),
(3, 7.00),
(4, 6.50), 
(5, 10.00); 


INSERT INTO Movimentacoes (vaga_id, veiculo_id, entrada) VALUES
(1, 1, '2024-06-11 08:00:00'),
(2, 2, '2024-06-11 09:00:00'),
(3, 3, '2024-06-11 10:00:00'),
(4, 4, '2024-06-11 11:00:00'),
(5, 5, '2024-06-11 12:00:00'),
(6, 6, '2024-06-11 13:00:00'),
(7, 7, '2024-06-11 14:00:00');


INSERT INTO Pagamentos (movimentacao_id, metodo_pagamento, valor_pago) VALUES
(1, 'Cartão', 15.00),
(2, 'Dinheiro', 9.00),
(3, 'Pix', 21.00),
(4, 'Cartão', 30.00),
(5, 'Dinheiro', 18.00),
(6, 'Pix', 42.00),
(7, 'Cartão', 25.00);
