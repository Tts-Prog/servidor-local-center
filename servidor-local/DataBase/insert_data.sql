INSERT INTO tbl_Useres (
 id,
 nome,
 numero_identificacao,
 data_nascimento,
 email,
 `password`,
 telefone,
 pais,
 localidade,
 enabled,
 created_at,
 updated_at
) VALUES (
	"b2ef5ea3-1758-43a3-b54a-34fbda4c7241",
	"Tiago Soares",
    "M001K",
    "1997-10-21",
    "elvizoares@gmail.com",
    "$2a$12$qBrRH7gq7paabop0V2CP/Oomaaz48RLttAU1GmcjV6ymSo5pRqRNe",
    "9948113",
    "Cabo Verde",
    "Assomada",
    true,
    NOW(),
    NOW()
);

INSERT INTO tbl_orcamento
VALUES (
	NULL,
    200,
    "b2ef5ea3-1758-43a3-b54a-34fbda4c7241",
	true,
    NOW(),
    NOW()
);

INSERT INTO tbl_prestadores
VALUES (
	"4f4662d3-27fc-4e29-ac53-1a9ecf73e69e",
    "b2ef5ea3-1758-43a3-b54a-34fbda4c7241",
    "987654321",
    "carpenteiro",
    "0.4",
    "5000",
    "0.2",
    true,
    true,
    NOW(),
    NOW()
);

INSERT INTO tbl_servicos
VALUES (
	NULL,
    "Carpentaria",
    "Fazer serviços relacionados a carpentaria",
    "Caseiro",
    NOW(),
    NOW()
);

INSERT INTO tbl_prestacao_servico
VALUES (
	NULL,
	"4f4662d3-27fc-4e29-ac53-1a9ecf73e69e",
	"1",
    "2",
    "Carpentaria",
    "200",
    10,
    500,
    true,
    NOW(),
    NOW()
);

INSERT INTO tbl_Useres 
 VALUES (
	"4f4662d3-27fc-4e29-ac53-1a9ecf73e69e",
	"Lula Inacio",
    "M002b",
    "1950-04-01",
    "mentiroso@gmail.com",
    "$2a$12$wOkrxlIb51AYJKFadnuSR.3k292v/lMsyqoKYmDae5LcgOuNQIWXy",
    "9919191",
    "Brasil",
    "Rio de Janeiro",
    true,
    NOW(),
    NOW()
);

DELETE FROM tbl_Useres 
WHERE id = 'a4a11708-60d9-4ffa-a474-f4aa3af34bf3';

 