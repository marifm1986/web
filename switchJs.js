function goText(){
	var code;
	var txt = document.getElementById('codetest').value;

switch(txt)
{
	case "java":
		code = "i love jaava";
	break;

	case "php":
		code = "i love php";
	break;

	default:
		code = "unkown";
}


document.getElementById('show').innerHTML = code;


}