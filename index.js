const program = require('commander')

program.version('1.0.0').description('A Simple Node password Generator --for folks too busy')

program.Command('generate').action(() => {
    console.log('Generated')
})
program
.option('--l,--length <number>','length of password').parse()

g