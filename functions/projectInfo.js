let projectInfo = {}
function changeProjectInfo(event, input) {

    projectInfo[input] = event.target.value
    console.log(projectInfo)
}