const core = require('@actions/core')
const github = require('@actions/github')
// const exect = require('@actions/exec')

function run(){
  core.notice("Hello form the js custom job")
}

run();