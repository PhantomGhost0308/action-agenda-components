import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import { getUnLocale                                  } from '@houlagins/locale'

const scbdCMSLocale = () => {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}
const name     = '@action-agenda/search'
const basePath = '/'
const locale   = scbdCMSLocale() || getUnLocale()
const smTop      = '0'
const mdTop      = '0'
const lgTop      = '0'

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale, smTop, mdTop, lgTop }
const stg           = { hostname: 'staging.cbd.int', ...dev }
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }

// #region snippet
const validationMap =
{ forceEnv        : String,  /* default: production */
  basePath        : String,  /* default: '/' */
  locale          : String,  /* default: derives from the client automatically otherwise 'en' */
  api             : String,  /* default: api/cbd.int/api/actions */
  hostname        : String,  /* default: cbd.int - this is also used to derive the env if set. */
  listenExternally: Boolean, /* default: false - listen for js event $scbdFilterChange */
  preLoadFilter   : String,  /* preload a single filter by identifier 'AICHI-TARGET-01' */
  smTop           : String,  /* offset sticky header in small devices */
  mdTop           : String,  /* offset sticky header in medium devices */
  lgTop           : String   /* offset sticky header in large devices */
}
// #endregion snippet


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)