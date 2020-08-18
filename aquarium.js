window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
    costObj = document.getElementById('tdcost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calccost;
}
function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
    costObj.innerHTML = '';
}
function calccost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(wdith)) {
        alert('Invalid length or width');
        return;
    }
    costObj.innerHTML = length*Math.pow(width,2)/800;
}