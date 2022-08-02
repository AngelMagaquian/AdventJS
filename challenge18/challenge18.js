const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) //= ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']


function fixFiles(files) {
  let arr = []
  let aux =[]
  files.map(e => {
    arr.includes(e) ? arr.push(`${e}(${aux.filter(i => i ===e).length})`) : arr.push(e)
    aux.push(e)
  })
  return arr
}