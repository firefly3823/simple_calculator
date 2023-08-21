function display(content) {
    result.value +=content
}
function reset() {
    result.value = ""
}
function expEval() {
    try {
        result.value = eval(result.value)
    } catch{
        result.value = "invalid"
    }
}
function backspace(){
    result.value = result.value.slice(0,-1)
}