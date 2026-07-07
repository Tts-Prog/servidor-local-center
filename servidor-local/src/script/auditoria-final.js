import http from 'k6/http';
import { sleep } from 'k6';

// Configuração dos testes
export const options = {
  vus: 60,
  duration: '1m',
};

// Cenário de teste
export default function () {
  // Substitua pelo URL do sistema que deseja auditar
  http.get('https://k6.io'); 
  
  // Pausa de 1 segundo entre as requisições de cada utilizador
  sleep(1); 
}
