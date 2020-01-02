import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function isWhen(date) {
  return formatRelative(
    parseISO(date),
    new Date(),
    {
      locale: pt
    }
  )
}
