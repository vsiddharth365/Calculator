let exp="";
let result=0;
let data="";
function saveFile(){
	const textToBLOB = new Blob([data],{type: "text/plain"});
	var filename = new Date();
	var month= new Date();
	month=month.getMonth();
	var day=new Date();
	day=day.getUTCDate();
	var year=new Date();
	year=year.getUTCFullYear();
	newdate=year+"/"+month+"/"+day;
	const sFileName=filename;
	let newLink=document.createElement("a");
	newLink.download=new Date();
	if(window.webkitURL!=null){
		newLink.href=window.webkitURL.createObjectURL(textToBLOB);
	}
	else{
		newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
	}
	newLink.click();
}
function update_history(x){
	document.getElementsByClassName("history")[0].innerHTML+=x+"<br>";
	data=data+x+"\n";
}
function history_appearance(){
	if(document.getElementsByClassName("history")[0].style.display=="block")
		document.getElementsByClassName("history")[0].style.display="none";
	else
		document.getElementsByClassName("history")[0].style.display="block";
}
function clear_all(){
	document.getElementsByClassName("cin-given")[0].innerHTML='';
	document.getElementsByTagName("input")[0].value='';
	document.getElementsByClassName("cout")[0].innerHTML='';
	exp="";
}
function clear_input() {
	document.getElementsByTagName("input")[0].value='';
	exp="";
}
function add_exp(ch){
	exp=exp.concat(ch);
	document.getElementsByTagName("input")[0].value=exp;
}
function keyboard(){
	exp=document.getElementsByTagName("input")[0].value;
}
function  evaluate(expression) {
	let tokens = expression.split('');
        let values = [];
        let ops = [];
        for (let i = 0; i < tokens.length; i++)
        {
            if (tokens[i] == ' ')
                continue;
            if ((tokens[i] >= '0' && tokens[i] <= '9') || tokens[i]=='.')
            {
                let sbuf = "";
                while (i < tokens.length && ((tokens[i] >= '0' && tokens[i] <= '9') || tokens[i]=='.'))
                    sbuf = sbuf + tokens[i++];
                values.push(parseFloat(sbuf, 10));
                  i--;
            }
            else if (tokens[i] == '(')
                ops.push(tokens[i]);
            else if (tokens[i] == ')')
            {
                while (ops[ops.length - 1] != '(')
                  values.push(applyOp(ops.pop(),values.pop(),values.pop()));
                ops.pop();
            }
            else if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' || tokens[i] == '%')
            {
                while (ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1]))
                  values.push(applyOp(ops.pop(), values.pop(), values.pop()));
                ops.push(tokens[i]);
            }
        }
        while (ops.length > 0)
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
        return values.pop();
}
function hasPrecedence(op1, op2){
    if (op2 == '(' || op2 == ')')
        return false;
    if ((op1 == '*' || op1 == '/' || op1 == '%') && (op2 == '+' || op2 == '-'))
        return false;
    else
        return true;
}
function applyOp(op, b, a){
    switch (op)
    {
	    case '+':
        {
	     	if(a==undefined)
	       		a=0;
	        return a + b;
	    }
        case '-':
        {
        	if(a==undefined)
        		a=0;
            return a - b;
        }
        case '*':
        {
        	if(a==undefined)
        		alert("Invalid product");
            return a * b;
        }
        case '/':
        {
			if (b == 0)
            	alert("Cannot divide by zero");
	        if(a==undefined)
	        	alert("Invalid division");
	        return parseFloat(a / b, 10);
	    }
	    case '%':
	    {
	    	if(b==0 || a==undefined || !Number.isInteger(a) || !Number.isInteger(b))
	    	{
	    		alert("Invalid mod");
	    		return "undefined";
	    	}
	    	return parseInt(a % b, 10);
	    }
    }
    return 0;
}
function output() {
	result=evaluate(exp);
	if(Number.isNaN(result))
		result="undefined";
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(exp+" = "+result);
	exp="";
}
function backspace(){
	exp=exp.slice(0,-1);
	document.getElementsByTagName("input")[0].value=exp;
}
function sign(){
	for(var i=exp.length-1;i>=0;i--)
	{
		if(exp[i]=='*' || exp[i]=='/' || exp[i]=='%')
		{
			if(i<exp.length-2 && exp[i+1]=='-')
				exp=exp.slice(0,i+1)+exp.slice(i+2);
			if(i<exp.length-1 && exp[i+1]!='-')
				exp=exp.slice(0,i+1)+"-"+exp.slice(i+1);
			break;
		}
		else if(exp[i]=='+' && i<exp.length-1)
		{
			exp=exp.slice(0,i)+"-"+exp.slice(i+1);
			break;
		}
		else if(exp[i]=='-' && i<exp.length-1)
		{
			exp=exp.slice(0,i)+exp.slice(i+1);
			break;
		}
	}
	if(i==-1)
		exp="-"+exp;
	document.getElementsByTagName("input")[0].value=exp;
}
function pow(x){
	result=evaluate(exp);
	result=Math.pow(result,x);
	if(x==2)
		exp="sqr("+exp+")";
	else if(x==0.5)
		exp="sqrt("+exp+")";
	else if(x==-1)
		exp="1/("+exp+")";
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(exp+" = "+result);
	exp="";
}
function absolute() {
	result=evaluate(exp);
	if(result<0)
		result=-1*result;
	exp="|"+exp+"|";
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(exp+" = "+result);
	exp="";
}
function logarithm(){
	result=evaluate(exp);
	if(result>0)
		result=Math.log(result);
	else
	{
		alert("Log not defined");
		result="undefined";
	}
	exp="log "+exp;
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(exp+" = "+result);
	exp="";
}
function factorial() {
	result=evaluate(exp);
	if(!Number.isInteger(result) || result<0)
		result="undefined";
	else
	{
		if(result==0)
			result=1;
		else
		{
			var f=1;
			for(var i=1;i<=result;i++)
				f*=i;
			result=f;
		}
	}
	exp=exp+"!";
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(exp+" = "+result);
	exp="";
}
function xpowy() {
	res=evaluate(exp);
	document.getElementsByClassName("cin-given")[0].innerHTML=res+"^";
	exp="";
	document.getElementsByTagName("input")[0].value='';
	document.getElementsByTagName("button")[29].addEventListener("click", Respond);
	function Respond(){
		exp=res+"^"+result;
		ans=Math.pow(res,result);
		document.getElementsByClassName("cout")[0].innerHTML=ans;
		document.getElementsByClassName("cin-given")[0].innerHTML=exp+" = "+ans;
		document.getElementsByTagName("input")[0].value='';
		update_history(exp+" = "+ans);
		exp="";
		document.getElementsByTagName("button")[29].removeEventListener("click",Respond);
	}
}