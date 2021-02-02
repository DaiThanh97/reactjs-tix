import { format, add } from 'date-fns';

export const formatDate = (date) => {
    return format(new Date(date), "dd/MM/yyyy");
}

export const formatShowTime = (date) => {
    return format(new Date(date), "HH:mm");
}

export const formatShowEndTime = (date) => {
    const result = add(new Date(date), { hours: 2 });
    return format(result, "HH:mm");
}