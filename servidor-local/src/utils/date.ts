import { format } from "date-fns";

export function formatDate(date: Date): string {
    return format(date, "yyyy-MM-dd");
}

// format data string from dd-MM-yyyy to yyyy-MM-dd
export function formatDateDDMMYYY(date: string) {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
}