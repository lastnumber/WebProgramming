// Code goes here


function setup() {
    var preval=""
        preval=document.getElementById("preselectedValue").value;
        if (preval!="")  {
            restartDemo(preval)
            var x=document.getElementsByTagName("input")
            var l=x.length
            for (i=0;i<l;i++) {
                if (x[i].value==preval)  {
                        x[i].checked=true
                }
            }
            document.getElementById("rootContainer").style.display="block";
        }
}
/**
 * [getPropertyValue: retrieves the selected value and call restartDemo function]
 * @param  {[Object]} obj [DOM object that user selects]
 */
function getPropertyValue(obj) {  
    restartDemo(obj.value);
}

/**
 * [restartDemo description]
 * @param  {[string]} value [value that user selects]
 */
function restartDemo(value) {
 
    var pName = document.getElementById("propertyTitle").innerHTML;
    var x = pName + "<span id='enlargecssprop'>" + value  + "</span>";
    var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>";
    var z=y.replace("###CSSPROP###",x);

    document.getElementById("currentCode").innerHTML = z;
}


