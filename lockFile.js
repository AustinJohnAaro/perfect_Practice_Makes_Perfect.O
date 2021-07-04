const fs = require('fs')
const path = require('path')

// Create the path to the lock file
const lockFile = path.join(__dirname, './lock')
// Test the lock file
const lock = fs.statSync(lockFile)

if (lock.isFile()) {
  // The file already exists, exit the process
  process.exit()
} else {
  // The file does not exist, let's create it
  fs.writeFileSync(lockFile, '')

  // Before the application quits, remove the lock file
  process.on('beforeExit', () => fs.unlinkSync(lockFile))
} 
