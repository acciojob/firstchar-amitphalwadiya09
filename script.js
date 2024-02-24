function firstChar(text) {
  // your code here
	if(text.length>0)
	{
		return text[0];
	}
	else
	{ 
		return "";
	}
}

// Do not change the code below 

const text = prompt("Enter text:");
alert(firstChar(text));
