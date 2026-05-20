## 2 - REquesitos? Identificar qual proposta foi aceita 

 - Receber id fo orcamento
 - select na tabela prestacao_servico onde 

## 1 - Logica de calculos

    - Fazer o calcula da tabela proposta
    - calcular precoHora * horas_estimadas
    - Fazer o calculo da tabela prestador se(if) as condicoes forem validas
    - Calcular minimo taxa_urgencia e descaonto
    - Verificar se taxa_urgencia for positivo
        - Se positivo fazer o calculo e adicionar ao oramento ( += )
    - Verificar se o total de precoHora * horas_estimadas for igual ou maior ao valor definido pelo prrestador
        - Se o valor for igual ou maior pegar percentagem_desconto na tabela prestador e aplicar a multiplicacao

## 2 - Mostrar no orcamento e adicionar no base de dados




Verificar se a propossta for aceite ou pendente

Adicionar o id_prestaor em tbl_proposta