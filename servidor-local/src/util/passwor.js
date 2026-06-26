import { hash, compare } from "bcrypt";
// funcao para fazer o has da senha 
export async function hashpassword(passwordEmTexto) {
    return await hash(passwordEmTexto, 12);
}
//funcao para comparar a senha 
export async function comparepassword(password, hash) {
    return await compare(password, hash);
}
//# sourceMappingURL=passwor.js.map