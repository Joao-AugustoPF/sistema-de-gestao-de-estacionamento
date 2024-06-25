
CREATE INDEX idx_movimentacoes_saida ON Movimentacoes(saida);

CREATE INDEX idx_pagamentos_movimentacao_id ON Pagamentos(movimentacao_id);

CREATE INDEX idx_veiculos_tipo_veiculo ON Veiculos(tipo_veiculo);