import moment from 'moment';

export const dateAndTime = (date) => {
  return moment(date).format('D/M/YYYY h:mm');
}