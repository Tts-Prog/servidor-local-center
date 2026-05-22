const API_URL = 'http://localhost:8080';

const endpoints = [
    { name: 'Obter Todos os Useres', method: 'GET', path: '/user/' },
    { name: 'Obter Todos os Orçamentos', method: 'GET', path: '/orcamento/' },
    { name: 'Obter Todos os Serviços', method: 'GET', path: '/servico/' },
    { name: 'Obter Todos os Prestadores', method: 'GET', path: '/prestador/' },
    { name: 'Obter Todos as Prestações de Serviço', method: 'GET', path: '/prestacao-servico/' }
];

async function runTests() {
    console.log("=== INICIANDO TESTE DO POSTMAN LOCAL ===");
    for (const ep of endpoints) {
        process.stdout.write(`[\x1b[33mAGUARDANDO\x1b[0m] ${ep.name} (${ep.method} ${ep.path})... `);
        try {
            const req = await fetch(API_URL + ep.path, { method: ep.method });
            const status = req.status;

            if (status >= 200 && status < 300) {
                console.log(`\x1b[32m✅ OK (${status})\x1b[0m`);
            } else if (status === 401 || status === 403) {
                console.log(`\x1b[33m⚠️ PROTEGIDO POR JWT (${status})\x1b[0m`);
            } else {
                console.log(`\x1b[31m❌ ERRO (${status})\x1b[0m`);
                const text = await req.text();
                console.log(`   Motivo: ${text.slice(0, 100)}`);
            }
        } catch (e: any) {
            console.log(`\x1b[31m❌ FALHOU CONEXÃO\x1b[0m`);
            console.log(`   O servidor não está ligado na porta 8080.`);
            break; // stop looping if server is dead
        }
    }
    console.log("=== TESTES CONCLUÍDOS ===");
}

runTests();
