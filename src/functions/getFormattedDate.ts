import dayjs, { Dayjs } from 'dayjs';

export const getFormattedDate = (date: Dayjs) => {
  const currentDate = new Date();
  const newDate = dayjs(date)
    .set('hour', currentDate.getHours())
    .set('minute', currentDate.getMinutes())
    .set('second', currentDate.getSeconds());

  return newDate.toDate()
}
