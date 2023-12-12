const fs = require('fs')
const path = require('path')

const assetsDir = 'src/assets' // Directory where your assets are stored
const sourceDirs = ['src'] // Directories where your source code files are located
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css'] // Source code file extensions

function findFilesInDir(startPath, filter) {
  let results = []
  if (!fs.existsSync(startPath)) {
    console.log('Directory not found:', startPath)
    return results
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i])
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      results = results.concat(findFilesInDir(filename, filter)) // Recurse into subdirectories
    } else if (filter.test(filename)) results.push(filename)
  }
  return results
}

function deleteUnusedAssets() {
  const allAssets = findFilesInDir(assetsDir, /\.(png|jpg|jpeg|gif|svg|webp)$/) // Adjust the regex for your asset file types
  const sourceFiles = sourceDirs.flatMap((dir) =>
    findFilesInDir(dir, new RegExp(fileExtensions.join('|')))
  )

  const unusedAssets = allAssets.filter((asset) => {
    const assetRelativePath = asset.slice(4)
    return !sourceFiles.some((file) => {
      const fileContent = fs.readFileSync(file, 'utf8')
      return fileContent.includes(assetRelativePath)
    })
  })

  if (unusedAssets.length > 0) {
    unusedAssets.forEach((asset) => {
      fs.unlinkSync(asset)
      console.log('Deleted:', asset)
    })
  }

  return unusedAssets
}

const unusedAssets = deleteUnusedAssets()
if (unusedAssets.length > 0) {
  console.log('Unused assets:', unusedAssets)
} else {
  console.log('No unused assets found.')
}
