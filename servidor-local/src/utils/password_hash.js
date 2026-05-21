import { hash, compare } from "bcrypt";
export async function Hash_Password(password) {
    return await hash(password, 12);
}
export async function Compare_Password(password, password_hash) {
    return await compare(password, password_hash);
}
//# sourceMappingURL=password_hash.js.map