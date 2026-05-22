SELECT * FROM tbl_Useres;

SELECT id, nome FROM tbl_Useres;

SELECT 
	tbl_orcamento.id,
    valor_total,
    tbl_Useres.id,
    nome
FROM
	tbl_orcamento,
    tbl_Useres
WHERE 
	tbl_orcamento.id_user = "b2ef5ea3-1758-43a3-b54a-34fbda4c7241";
    
    
SELECT * FROM tbl_Useres WHERE tbl_Useres.id = "4f4662d3-27fc-4e29-ac53-1a9ecf73e69e";

SELECT * FROM tbl_Useres WHERE tbl_Useres.nome = "Tiago Soares";

SELECT * FROM tbl_prestadores WHERE tbl_prestadores.nif = "987654321";	


SELECT * FROM tbl_Useres;

SELECT * FROM tbl_prestadores;