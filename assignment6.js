// JavaScript
    
/* otheropt.addEventListener("click", function () {
     var hide = document.getElementById("othert");
    var selection = document.getElementById("otheropt").value;
    if (selection == "other") {
        hide.style.display = "block";
        
        } else {
            hide.style.display = "none";

        } 
        
});*/

 
/*finished.addEventListener("click", function validate(){    
    var re = /^[A-Za-z]+$/;
    var zc = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var phn = /^\d{10}$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(re.test(document.getElementById("username").value))
       {}
    else
       {alert('Invalid Name')};
    
    if(zc.test(document.getElementById("zip").value))
       {}
    else
       {alert('Invalid Zip Code')};
    
    if(phn.test(document.getElementById("mail").value))
       {}
    else
       {alert('Invalid Email Address')};
})*/

HT.addEventListener("click", function () {
    
      if ( (document.forms[2].infra[0].checked == true ) // (document.forms[0].radio1[1].checked == true ) )  
    {  
    alert ( "You have selected one option" );  
    }  
     
    /* var pizzaSize = document.getElementById("cps");
    var selection = document.getElementById("dough").value;
    if (selection == "HT") {
        pizzaSize.style.display = "block";
        
        } else {
            pizzaSize.style.display = "none";

        } */
        
});
/*window.addEventListener("load", function{
                        
        button1.addEventListener("click",myFunction, false);
        button2.addEventListener("click",myFunction, false);
        button3.addEventListener("click",myFunction, false);
        button4.addEventListener("click",myFunction, false);
        button5.addEventListener("click",myFunction, false);
                        }, false)
                        
        function myFunction() {
            alert(you didn enter your name correctly);
        }*/




/*var check = 

function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}*/