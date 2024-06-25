-- 1.Quantos veículos estão estacionados no momento?
SELECT 
    tv.descricao AS tipo_vaga,
    COUNT(v.id) AS quantidade_veiculos_estacionados
FROM 
    Vagas v
JOIN 
    TipoVaga tv ON v.tipo_id = tv.id
LEFT JOIN 
    Movimentacoes m ON v.id = m.vaga_id
WHERE 
    m.saida IS NULL
GROUP BY 
    tv.descricao;


--2.Qual é a receita total por tipo de veículo até o momento?
SELECT 
    tv.descricao AS tipo_veiculo, 
    SUM(p.valor_pago) AS receita_total
FROM 
    Movimentacoes m
JOIN 
    Veiculos v ON m.veiculo_id = v.id
JOIN 
    TipoVaga tv ON v.tipo_veiculo = tv.descricao
JOIN 
    Pagamentos p ON m.id = p.movimentacao_id
GROUP BY 
    tv.descricao;


--3.Qual é a média de receita por pagamento realizado?
SELECT 
    AVG(p.valor_pago) AS media_receita
FROM 
    Pagamentos p;


--4.Qual é a duração média por tipo de veículo?
SELECT 
    tv.descricao AS tipo_veiculo, 
    AVG(TIMESTAMPDIFF(HOUR, m.entrada, IFNULL(m.saida, NOW()))) AS duracao_media_horas
FROM 
    Movimentacoes m
JOIN 
    Veiculos v ON m.veiculo_id = v.id
JOIN 
    TipoVaga tv ON v.tipo_veiculo = tv.descricao
GROUP BY 
    tv.descricao;

