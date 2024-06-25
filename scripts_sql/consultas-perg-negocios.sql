-- 1.Quantos veículos estão estacionados no momento?
SELECT 
    tv.descricao AS tipo_vaga,
    COUNT(v.id) AS quantidade_veiculo_estacionados
FROM 
    Vaga v
JOIN 
    TipoVaga tv ON v.id = tv.id
LEFT JOIN 
    Movimentacao m ON v.id = m.id AND m.saida IS NULL
GROUP BY 
    tv.descricao;



-- 2.Qual é a receita total por tipo de veículo até o momento?
SELECT 
    v.tipo_veiculo AS tipo_veiculo, 
    SUM(p.valorPago) AS receita_total
FROM 
    Movimentacao m
JOIN 
    Veiculo v ON m.id = v.id
JOIN 
    Pagamento p ON m.id = p.id
GROUP BY 
    v.tipo_veiculo;



-- 3.Qual é a média de receita por pagamento realizado?
SELECT 
    AVG(p.valorPago) AS media_receita
FROM 
    Pagamento p;


-- 4.Qual é a duração média por tipo de veículo?
SELECT 
    v.tipo_veiculo AS tipo_veiculo, 
    AVG(TIMESTAMPDIFF(HOUR, m.entrada, IFNULL(m.saida, NOW()))) AS duracao_media_horas
FROM 
    Movimentacao m
JOIN 
    Veiculo v ON m.id = v.id
GROUP BY 
    v.tipo_veiculo;


