import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id')

export function dateFormat(date: Date) {
  return dayjs(date).format('D MMMM YYYY')
}
