// create package.json and README for packages that don't have one yet

const fs = require('fs')
const path = require('path')
const baseVersion = require('../packages/@svel/cli-service/package.json').version

const packagesDir = path.resolve(__dirname, '../packages/@svel')
const files = fs.readdirSync(packagesDir)

files.forEach(pkg => {
  if (pkg.charAt(0) === '.') return

  const isPlugin = /^cli-plugin-/.test(pkg)
  const desc = isPlugin
    ? `${pkg.replace('cli-plugin-', '')} plugin for svelte-cli`
    : `${pkg.replace('cli-', '')} for svelte-cli`

  const pkgPath = path.join(packagesDir, pkg, `package.json`)
  if (!fs.existsSync(pkgPath)) {
    const json = {
      'name': `@svel/${pkg}`,
      'version': baseVersion,
      'description': desc,
      'main': 'index.js',
      'publishConfig': {
        'access': 'public'
      },
      'repository': {
        'type': 'git',
        'url': 'git+https://github.com/wmzy/svelte-cli.git'
      },
      'keywords': [
        'svelte',
        'cli'
      ],
      'author': 'Evan You',
      'license': 'MIT',
      'bugs': {
        'url': 'https://github.com/wmzy/svelte-cli/issues'
      },
      'homepage': `https://github.com/wmzy/svelte-cli/tree/dev/packages/@svel/${pkg}#readme`
    }
    fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2))
  }

  const readmePath = path.join(packagesDir, pkg, `README.md`)
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# @svel/${pkg}\n\n> ${desc}`)
  }

  const npmIgnorePath = path.join(packagesDir, pkg, `.npmignore`)
  if (!fs.existsSync(npmIgnorePath)) {
    fs.writeFileSync(npmIgnorePath, `__tests__\n__mocks__`)
  }
})
