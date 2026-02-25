import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec"
// const exect = require('@actions/exec')

function run(){
  // 1) get some input values
  const bucket_name = core.getInput('bucket', { required: true})
  const bucket_region =  core.getInput('region', { required: false})
  const dist_folder = core.getInput('dist-folder', { required: true})

  const s3Uri = `s3://${bucket_name}`

  // 2) upload files
  exec.exec(`aws s3 sync ${dist_folder} ${s3Uri} --region ${bucket_region}`)

  core.notice("Hello form the js custom job")
}

run();