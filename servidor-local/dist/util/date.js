import { format } from "date-fns";
export async function formatDate(date) {
    return format(date, "yyyy-MM-dd");
}
//format date dd-mm-yyyy
export function formatDateDDMMYYYY(date) {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
}
//# sourceMappingURL=date.js.map