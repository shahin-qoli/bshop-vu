
export function formatTaxonLink (link) {
  const ln = link || ''
  var res = ln
  if (ln.includes('/t/'))
    res = ln.replace('/t/', '/c/')
  return res
}
