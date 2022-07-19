const _ = require('lodash')
const chalk = require('chalk')

const arr = [1, 2, 3, 4, 5]
const arr2 = [2, 4, 6, 7, 8]

const diff = _.difference(arr, arr2)

console.log(chalk.red.bold(diff))