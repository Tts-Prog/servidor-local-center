import { hash, compare } from "bcrypt";
export async function hashPassword(passwordEmTexto) {
    return await hash(passwordEmTexto, 12);
}
export async function comparePassword(passwordEmTexto, passwordHash) {
    return await compare(passwordEmTexto, passwordHash);
}
export async function updatePassword(passwordEmTexto, passwordHash) {
    return await updatePassword(passwordEmTexto, passwordHash);
}
//# sourceMappingURL=password.js.map