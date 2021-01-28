import moment from 'moment';

export const formatShowTime = (date) => {
    return moment(date).format("HH:mm");
}

export const formatShowEndTime = (date) => {
    return moment(date).add(2, 'hours').format("HH:mm");
}