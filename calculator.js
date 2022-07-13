let exp="";
let result=0;
let data="";
let b=0;
document.getElementsByTagName('input')[0].addEventListener("keypress",function (event) {
	if(event.key=="Enter"){
		event.preventDefault();
		document.getElementsByTagName('button')[30].click();
	}
});
document.getElementsByTagName('input')[0].addEventListener("keydown",function (event) {
	if(event.key=="Backspace"){
		event.preventDefault();
		document.getElementsByTagName('button')[4].click();
	}
});
function common(expression,result){
	if(Number.isNaN(result))
		result=undefined;
	document.getElementsByClassName("cout")[0].innerHTML=result;
	document.getElementsByClassName("cin-given")[0].innerHTML=expression+" = "+result;
	document.getElementsByTagName("input")[0].value='';
	update_history(expression+" = "+result);
	exp="";
	b=0;
	document.getElementsByTagName("button")[20].innerHTML="(";
}
function trigonometry(){
	if(document.getElementsByTagName('button')[26].innerHTML=='Trig')
		document.getElementsByTagName('button')[26].innerHTML="Alg";
	else
		document.getElementsByTagName('button')[26].innerHTML="Trig";
	if(document.getElementsByTagName('button')[11].innerHTML=='7')
	{
		document.getElementsByTagName('button')[11].innerHTML="sin";
		document.getElementsByTagName("button")[11].onclick=function () {
			result=evaluate(exp);
			result=Math.sin(result);
			exp="sin "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[11].innerHTML='7';
		document.getElementsByTagName('button')[11].onclick=function(){
			add_exp('7');
		}
	}
	if(document.getElementsByTagName('button')[12].innerHTML=='8')
	{
		document.getElementsByTagName('button')[12].innerHTML="cos";
		document.getElementsByTagName('button')[12].onclick=function(){
			result=evaluate(exp);
			result=Math.cos(result);
			exp="cos "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[12].innerHTML='8';
		document.getElementsByTagName('button')[12].onclick=function () {
			add_exp('8');
		}
	}
	if(document.getElementsByTagName('button')[13].innerHTML=='9')
	{
		document.getElementsByTagName('button')[13].innerHTML="tan";
		document.getElementsByTagName('button')[13].onclick=function(){
			result=evaluate(exp);
			result=Math.tan(result);
			exp="tan "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[13].innerHTML='9';
		document.getElementsByTagName('button')[13].onclick=function () {
			add_exp('9');
		}
	}
	if(document.getElementsByTagName('button')[16].innerHTML=='4')
	{
		document.getElementsByTagName('button')[16].innerHTML="sec";
		document.getElementsByTagName('button')[16].onclick=function () {
			result=evaluate(exp);
			result=Math.cos(result);
			result=1.0/result;
			exp="sec "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[16].innerHTML='4';
		document.getElementsByTagName('button')[16].onclick=function(){
			add_exp('4');
		}
	}
	if(document.getElementsByTagName('button')[17].innerHTML=='5')
	{
		document.getElementsByTagName('button')[17].innerHTML="cosec";
		document.getElementsByTagName('button')[17].onclick=function () {
			result=evaluate(exp);
			result=Math.sin(result);
			result=1.0/result;
			exp="cosec "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[17].innerHTML='5';
		document.getElementsByTagName('button')[17].onclick=function(){
			add_exp('5');
		}
	}
	if(document.getElementsByTagName('button')[18].innerHTML=='6')
	{
		document.getElementsByTagName('button')[18].innerHTML="cot";
		document.getElementsByTagName('button')[18].onclick=function () {
			result=evaluate(exp);
			result=Math.tan(result);
			result=1.0/result;
			exp="cot "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[18].innerHTML='6';
		document.getElementsByTagName('button')[18].onclick=function () {
			add_exp('6');
		}
	}
	if(document.getElementsByTagName('button')[22].innerHTML=='1')
	{
		document.getElementsByTagName('button')[22].innerHTML="sin"+`<sup>-1</sup>`;
		document.getElementsByTagName('button')[22].onclick=function () {
			result=evaluate(exp);
			result=Math.asin(result);
			exp="sin"+`<sup>-1</sup>`+" "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[22].innerHTML='1';
		document.getElementsByTagName('button')[22].onclick=function () {
			add_exp('1');
		}
	}
	if(document.getElementsByTagName('button')[23].innerHTML=='2')
	{
		document.getElementsByTagName('button')[23].innerHTML="cos"+`<sup>-1</sup>`;
		document.getElementsByTagName('button')[23].onclick=function(){
			result=evaluate(exp);
			result=Math.acos(result);
			exp="cos"+`<sup>-1</sup>`+" "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[23].innerHTML='2';
		document.getElementsByTagName('button')[23].onclick=function () {
			add_exp('2');
		}
	}
	if(document.getElementsByTagName('button')[24].innerHTML=='3')
	{
		document.getElementsByTagName('button')[24].innerHTML="tan"+`<sup>-1</sup>`;
		document.getElementsByTagName('button')[24].onclick=function () {
			result=evaluate(exp);
			result=Math.atan(result);
			exp="tan"+`<sup>-1</sup>`+" "+exp;
			common(exp,result);
		}
	}
	else
	{
		document.getElementsByTagName('button')[24].innerHTML='3';
		document.getElementsByTagName('button')[24].onclick=function () {
			add_exp('3');
		}
	}
	if(document.getElementsByTagName('button')[27].innerHTML=="+/-")
	{
		document.getElementsByTagName('button')[27].innerHTML=`&#960;`;
		document.getElementsByTagName('button')[27].onclick=function () {
			document.getElementsByTagName("input")[0].value+="3.141592653589793238";
			exp+="3.141592653589793238";
		}
	}
	else
	{
		document.getElementsByTagName('button')[27].innerHTML="+/-";
		document.getElementsByTagName('button')[27].onclick=function () {
			sign();
		}
	}
}
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
	b=0;
	document.getElementsByTagName("button")[20].innerHTML="(";
}
function clear_input() {
	document.getElementsByTagName("input")[0].value='';
	exp="";
	b=0;
	document.getElementsByTagName("button")[20].innerHTML="(";
}
function add_exp(ch){
	if(!((ch>='0' && ch<='9') || ch=='.' || ch=='+' || ch=='-' || ch=='*' || ch=='/' || ch=='%' || ch=='(' || ch==')'))
	{
		ch="";
		alert("Invalid input");
	}
	if(ch=='(')
		b++;
	else if(ch==')')
		b--;
	if(b>=0)
		exp=exp.concat(ch);
	else
		b=0;
	if(b)
		document.getElementsByTagName("button")[20].innerHTML="("+`<sub>${b}</sub>`;
	else
		document.getElementsByTagName("button")[20].innerHTML="(";
	if(exp.length>=2)
	{
		let ch=exp[exp.length-2];
		if(exp[exp.length-1]=='(' && ch!='*' && ch!='/' && ch!='+' && ch!='-' && ch!='%' && ch!='(')
			exp=exp.slice(0,exp.length-1)+"*"+exp[exp.length-1];
		else if(exp[exp.length-1]==')' && exp[exp.length-2]=='(')
			exp=exp.slice(0,exp.length-1)+"0"+exp[exp.length-1];
	}
	document.getElementsByTagName("input")[0].value=exp;
}
function keyboard(){
	let x=document.getElementsByTagName("input")[0].value;
	let ch=x[x.length-1];
	if(!((ch>='0' && ch<='9') || ch=='.' || ch=='+' || ch=='-' || ch=='*' || ch=='/' || ch=='%' || ch=='(' || ch==')'))
	{
		x=x.slice(0,-1);
		alert("Invalid input");
	}
	if(ch=='(')
		b++;
	else if(ch==')')
		b--;
	if(b>=0)
		exp=x;
	else
		b=0;
	if(b)
		document.getElementsByTagName("button")[20].innerHTML="("+`<sub>${b}</sub>`;
	else
		document.getElementsByTagName("button")[20].innerHTML="(";
	if(exp.length>=2)
	{
		let ch=exp[exp.length-2];
		if(exp[exp.length-1]=='(' && ch!='*' && ch!='/' && ch!='+' && ch!='-' && ch!='%' && ch!='(')
			exp=exp.slice(0,exp.length-1)+"*"+exp[exp.length-1];
		else if(exp[exp.length-1]==')' && exp[exp.length-2]=='(')
			exp=exp.slice(0,exp.length-1)+"0"+exp[exp.length-1];
	}
	document.getElementsByTagName("input")[0].value=exp;
}
function  evaluate(expression) {
	let tokens = expression.split('');
	if(tokens[tokens.length-1]=='-' || tokens[tokens.length-1]=='+')
        	return undefined;
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
                while (ops.length>0 && ops[ops.length - 1] != '(')
                	values.push(applyOp(ops.pop(),values.pop(),values.pop()));
                if(ops.length>0)
	                ops.pop();
            }
            else if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' || tokens[i] == '%')
            {
                while (ops.length>0 && hasPrecedence(tokens[i], ops[ops.length - 1]))
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
        	{
        		alert("Invalid product");
        		return undefined;
        	}
            return a * b;
        }
        case '/':
        {
			if (b == 0)
            {
            	alert("Cannot divide by zero");
            	return undefined;
            }
	        if(a==undefined)
	       	{
	       		alert("Invalid division");
	       		return undefined;
	       	}
	        return parseFloat(a / b, 10);
	    }
	    case '%':
	    {
	    	if(b==0 || a==undefined || !Number.isInteger(a) || !Number.isInteger(b))
	    	{
	    		alert("Invalid mod");
	    		return undefined;
	    	}
	    	return parseInt(a % b, 10);
	    }
    }
    return 0;
}
function output() {
	result=evaluate(exp);
	common(exp,result);
}
function backspace(){
	if(exp[exp.length-1]=='(')
		b--;
	else if(exp[exp.length-1]==')')
		b++;
	if(b>0)
		document.getElementsByTagName("button")[20].innerHTML="("+`<sub>${b}</sub>`;
	else
		document.getElementsByTagName("button")[20].innerHTML="(";
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
	common(exp,result);
}
function absolute() {
	result=evaluate(exp);
	if(result<0)
		result=-1*result;
	exp="|"+exp+"|";
	common(exp,result);
}
function logarithm(){
	result=evaluate(exp);
	if(result>0)
		result=Math.log(result);
	else
	{
		alert("Log not defined");
		result=undefined;
	}
	exp="log "+exp;
	common(exp,result);
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
	common(exp,result);
}
function xpowy() {
	res=evaluate(exp);
	document.getElementsByClassName("cin-given")[0].innerHTML=res+"^";
	exp="";
	document.getElementsByTagName("input")[0].value='';
	document.getElementsByTagName("button")[30].addEventListener("click", Respond);
	function Respond(){
		exp=res+"^"+result;
		ans=Math.pow(res,result);
		common(exp,ans);
		document.getElementsByTagName("button")[30].removeEventListener("click", Respond);
	}
}
