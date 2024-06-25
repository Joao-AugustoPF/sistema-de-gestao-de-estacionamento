-- Função

DELIMITER $$

CREATE FUNCTION calcular_valor(movimentacao_id INT)
RETURNS DECIMAL(10, 2)
DETERMINISTIC
BEGIN
    DECLARE valor_total DECIMAL(10, 2);
    DECLARE tipo_vaga_id INT;
    DECLARE valor_por_hora DECIMAL(10, 2);
    DECLARE tempo_total DECIMAL(10, 2);

    SELECT tipoVaga_id, TIMESTAMPDIFF(HOUR, entrada, saida) INTO tipo_vaga_id, tempo_total
    FROM Movimentacoes
    WHERE id = movimentacao_id;

    SELECT valor_por_hora INTO valor_por_hora
    FROM Tarifas
    WHERE tipovaga_id = tipo_vaga_id;

    SET valor_total = tempo_total * valor_por_hora;

    RETURN valor_total;
END$$

DELIMITER ;

-- Procedimento Armazenado

DELIMITER $$

CREATE PROCEDURE registrar_entrada(
    IN p_vaga_id INT,
    IN p_veiculo_id INT
)
BEGIN
    INSERT INTO Movimentacoes (vaga_id, veiculo_id, entrada)
    VALUES (p_vaga_id, p_veiculo_id, NOW());

    UPDATE Vagas
    SET disponivel = 0, veiculo_id = p_veiculo_id
    WHERE id = p_vaga_id;
END$$

DELIMITER ;

-- Trigger

DELIMITER $$

CREATE TRIGGER atualizar_disponibilidade_vaga
AFTER UPDATE ON Movimentacoes
FOR EACH ROW
BEGIN
    IF NEW.saida IS NOT NULL THEN
        UPDATE Vagas
        SET disponivel = 1, veiculo_id = NULL
        WHERE id = NEW.vaga_id;
    END IF;
END$$

DELIMITER ;
