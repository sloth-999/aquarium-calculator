window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('txtWidth');
	costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalcCost').onclick = calcCost;
}
function resetInputs() {
    lengthObj.value = '';
    heightObj.value = '';
    widthObj.value = '';
	costObj.innerHTML = '';	
}
function calcCost() {
    var length = new Number(lengthObj.value);
    var height = new Number(heightObj.value);
	var width = new Number(widthObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(height) || isNaN(width)) {
        alert('Invalid length or height or width');
        return;
    }


    if (height >24.9){
        costObj.innerHTML = "$" + (2*(length*height+width*height+length*width)*0.1+(height*4+length*2+width*2)*0.1+ 2*(length*height+width*height+length*width)*0.01)*1.1
    } else {
        costObj.innerHTML = "$" + (2*(length*height+width*height+length*width)*0.06+(height*4+length*2+width*2)*0.1+ 2*(length*height+width*height+length*width)*0.01)*1.1
    }

}