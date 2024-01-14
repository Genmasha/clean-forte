import it from '../locales/it'
import hu from '../locales/hu'
import sk from '../locales/sk'
import sl from '../locales/sl'
import ro from '../locales/ro'

enum Language {
  IT = 'it',
  HU = 'hu',
  SK = 'sk',
  SL = 'sl',
  RO = 'ro',
  skSK = 'sk-SK',
  itIT = 'it-IT',
  huHU = 'hu-HU',
  slSI = 'sl-SI',
  roRO = 'ro-RO',
  slSL = 'sl-SL'
}

export const getLanguage = (local: string | undefined) => {
  if (!local) {
    return it
  }
  switch (local) {
    case Language.IT:
      return it
    case Language.HU:
      return hu
    case Language.SK:
      return sk
    case Language.SL:
      return sl
    case Language.RO:
      return ro
    case Language.skSK:
      return sk
    case Language.itIT:
      return it
    case Language.huHU:
      return hu
    case Language.slSI:
      return sl
    case Language.roRO:
      return ro
    case Language.slSL:
      return sl
    default:
      return it
  }
}
