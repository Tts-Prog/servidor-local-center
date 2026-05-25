import { format } from "date-fns";
<<<<<<< HEAD

export function formatDate(date: Date): string {
    return format(date, "yyyy-MM-dd");
}

// format data string from dd-MM-yyyy to yyyy-MM-dd
export function formatDateDDMMYYY(date: string) {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
}
=======


export function formatDate(date: string) {

    return format(date, "yyyy-MM-dd")

}

// format date string from dd-mm-yyyy to yyyy-mm-dd
export function formatDateDDMMYYYY(date: string) {
    
    const [day, month, year] = date.split("-")

    return `${year}-${month}-${day}`
}
>>>>>>> dev
