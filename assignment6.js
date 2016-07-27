// JavaScript

// --------- part 1 b -------
    
 otheropt.addEventListener("click", function () {
     var hide = document.getElementById("othert");
    var selection = document.getElementById("otheropt").value;
    if (selection == "other") {
        hide.style.display = "block";
        
        } else {
            hide.style.display = "none";

        } 
        
});

// --------- part 1 c -------
 
finished.addEventListener("click", function validate(){    
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
})

// --------- part 2 step 2 -------
HT.addEventListener("click", function () {
    
      if (HT.checked == true )   
    {  
    cps1.style.display = "block";
        
    } else {
    cps1.style.display = "none";

        } 
        
});

TC.addEventListener("click", function () {
    
      if (TC.checked == true )   
    {  
    cps2.style.display = "block";
        
    }   else {
    cps2.style.display = "none";

        } 
        
});

NY.addEventListener("click", function () {
    
      if (NY.checked == true )   
    {  
    cps3.style.display = "block";
        
    }   else {
    cps3.style.display = "none";

        } 
        
});

GF.addEventListener("click", function () {
    
      if (GF.checked == true )   
    {  
    cps4.style.display = "block";
        
    }   else {
    cps4.style.display = "none";

        } 
        
});

// --------- General Things to Consider 1 -------
cheese.addEventListener("click", function validate() {
var a = 0, btn=document.getElementsByName("infra")
for(i=0;i<btn.length;i++) {
if(btn.item(i).checked == false) {
a++;
}
}
if(a == btn.length) {
alert("Choose the type of dough you need");
document.getElementById("dough").style.border = "2px solid red";
return false;
} else {
document.getElementById("dough").style.border = "";
}
});

cheese.addEventListener("click", function validatea() {
var combo1 = document.getElementsByName("Size")
if(combo1.value == null || combo1.value == "") {
alert("Please Choose Pizza size");
document.getElementById("sizenprice").style.border = "2px solid red";
return false;
} else {
document.getElementById("sizenprice").style.border = "";
}
})

// --------- General Things to Consider 3 -------

done.addEventListener("click", function () {
    
   var doneMake = confirm("Are you sure you are done building your pizza?");
    if (doneMake) {
        alert("Go to the billing section! :)");
    } else {
        return false;
    }
        
    
})

// ---------------General things to consider 2 ------
var grandTotal = 0.00; 
//function what () {
    grandTotal = 0.00;
var toppingResult = 0.99 * toppingTotal;
grandTotal += toppingResult;
    

function toppingTotal () {
var topping = document.getElementsByName("top");
var toppingNumber = 0;
for (i=0; i < topping.length; i++)
    {
    if (topping[i].type === "checkbox" && topping[i].checked === true) {
        toppingNumber++;
        
    }
    }
    return toppingNumber;
   
    }

document.getElementById("totalCost").innerHTML = grandTotal.toFixed(2);

/* finished1.addEventListener("click", function () {
    alert("you choose " + toppingNumber);
})*/



/*if ((document.getElementById("dough").checked == false) &&     
    (document.getElementById("sizenprice").checked == false))*/

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