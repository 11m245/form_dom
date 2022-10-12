
function createLabels(tagname,attrname,value,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, value);
    ele.innerHTML=content;
    return ele;
}


function createInput(tagname,attrname,value, attrname1,value1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname, value);
    ele.setAttribute(attrname1, value1);
    return ele;
}

function createLineBreak(br){
    var ele=document.createElement(br);
    return ele;
}

var br=createLineBreak("br");

var firstname = createLabels("label","for","fsname","Firstname");
var br1=createLineBreak("br");
var fnameinput = createInput("input","type", "text", "id","fsname")
var br2=createLineBreak("br");
var middlename= createLabels("label","for","mname","Middlename");
var br3=createLineBreak("br");
var mnameinput = createInput("input","type", "text", "id","mname");
var br4=createLineBreak("br");
var lastname = createLabels("label","for","lname","Lastname");
var br5=createLineBreak("br");
var lnameinput = createInput("input","type", "text", "id","lname");
var br6=createLineBreak("br");
var phone= createLabels("label","for","pno","PhoneNumber");
var br7=createLineBreak("br");
var pnoinput = createInput("input","type", "number", "id","pno");

document.body.append(firstname,br1,fnameinput,br2,middlename,br3,mnameinput,br4,lastname,br5,lnameinput,br6,phone,br7,pnoinput);




