import { hash, compare } from "bcrypt";
export async function hashPasseword(passwordEmTexto) {
    return await hash(passwordEmTexto, 12);
}
export async function comparePasseword(passwordEmTexto, hashPasseword) {
    return await compare(passwordEmTexto, hashPasseword);
}
//# sourceMappingURL=passeword.js.map