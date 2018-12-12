<!-- hide this script tag's contents from old browsers

//check if the control can accept focus 
window.onload = initFormFieldFocus;
function initFormFieldFocus(){
	focusField(document.getElementById("mb"));
	return true;
}

function focusField(target)
{
	// The form elements that will be tested. Anything with a dot indicates the "type" attribute of the element
	var formElements = ["input.text", "input.checkbox", "input.radio", "select", "textarea"];
	var selectedNode = null;

	// IE's selection method
	if (typeof document.selection != "undefined" && document.selection != null && typeof window.opera == "undefined")
	{
		var theSelection = document.selection;
		var textRange = document.selection.createRange();

		selectedNode = textRange.parentElement();
	}
	// W3 selection method. Currently only Mozilla & Safari support it. However, neither of them support ranges inside form objects, so this part is redundant. Merely included in case they decide to include support in the future
	else if (typeof window.getSelection != "undefined")
	{
		var theSelection = window.getSelection();

		// The Safari way to get the node that a selection starts in
		if (typeof theSelection.baseNode != "undefined")
		{
			selectedNode = theSelection.baseNode;
		}
		// The Mozilla way to get the node that a selection starts in
		else if (typeof theSelection.getRangeAt != "undefined" && theSelection.rangeCount > 0)
		{
			selectedNode = theSelection.getRangeAt(0).startContainer;
		}
	}

	// If a selected node was found above, check whether it's a selection inside one of the specified form element types
	if (selectedNode != null)
	{
		for (var i = 0; i < formElements.length; i++)
		{
			if (selectedNode.nodeName.toLowerCase() == formElements[i].replace(/([^.]*)\..*/, "$1"))
			{
				return false;
			}
		}
	}

	var forms = document.forms;

	// Do a check of each form element on the page. If one of them has a value, do not focus
	for (var i = 0; i < forms.length; i++)
	{
		var formElements = forms[i];

		for (var j = 0; j < formElements.length; j++)
		{
			if (formElements[j].getAttribute("type") == "checkbox" || formElements[j].getAttribute("type") == "radio")
			{
				if (formElements[j].checked != formElements[j].defaultChecked)
				{
					return false;
				}
			}
			else
			{
				if (typeof formElements[j].defaultValue != "undefined" && formElements[j].value != formElements[j].defaultValue)
				{
					return false;
				}
			}
		}
	}

	// If no form elements were found to be focused -- or with values -- go ahead and focus
	//target.focus(); 
	//Can't move focus to the control because it is invisible, not enabled, or of a type that does not accept the focus.
	
	try{
		target.focus();
		//element.focus();
		//blah blah whatever
	}
	catch(er){
		//ignore and continue, or do something else
	}
	
	return false;
}


function checkNumber(input, min, max, msg)
{   
	msg = msg + " field has invalid data: " + input.value;
    var str = input.value;	
    for (var i = 0; i < str.length; i++) {
        var ch = str.substring(i, i + 1)
        if ((ch < "0" || "9" < ch) && ch != '.') {
            alert(msg);
			input.focus();
			//input.select();
            return false;
        }
    }
	
    var num = 0 + str
    if (num < min || max < num) {
        alert(msg + " not in range [" + min + ".." + max + "]");
        return false;
    }
    input.value = str;
    return true;
}

function custRound(x,places) {
    return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places)
}

function CurrencyFormatted(amount)
{
    var n = parseFloat(amount);
    if(isNaN(n)) { n = 0.00; }
    var minus = '';
    if(n < 0) { minus = '-'; }
    n = Math.abs(n);
    n = parseInt((n + .005) * 100);
    n = n / 100;
    s = new String(n);
    if(s.indexOf('.') < 0) { s += '.00'; }
    if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
    s = minus + s;
    return s;
} // function CurrencyFormatted()

function CommaFormatted(amount)
{
    var delimiter = ",";
    var a = amount.split('.',2)
    var d = a[1];
    var i = parseInt(a[0]);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3)
    {
        var nn = n.substr(n.length-3);
        a.unshift(nn);
        n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if(d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
} // function CommaFormatted()

function validateYRAverageSalary(field){
 var input = field.value;
    if ((!input == null || !input.length == 0)){
		//$3,000,000
        if (!checkNumber(document.frmCal.YRAverageSalary, 1, 3000000, "6. Enter your highest 5-year salary average"))
        {
        document.frmCal.YRAverageSalary.value = "Invalid";		
        }
    }
	field.focus();
    computeForm();
    return true;
}// function validateYRAverageSalary(field)

// GB code begins
var YRAverageSalary2 = 

if (YRAverageSalary2 > (1/3)(YRAverageSalary)){ 
	OpAyaservicedisplay = YRAverageSalary - (YRAverageSalary2 - (1/3)(YRAverageSalary))
	PercentFactor = YRAverageSalary2
	YaAdisplayonly = OpAyaservicedisplay + PercentFactor
}else{
	OpAyaservicedisplay = YRAverageSalary
	PercentFactor = YRAverageSalary2
	YaAdisplayonly = OpAyaservicedisplay + PercentFactor
}
// GB code ends
	
/* TODO: redo validation function
function validateChkBox(chk){ 
  if (chk.checked == 1){  // I agree, disable = false
		//alert("Thank You");
		document.frmCal.mb.disabled = false;
		document.frmCal.db.disabled = false;
		document.frmCal.yb.disabled = false;
		document.frmCal.mp.disabled = false;
		document.frmCal.dp.disabled = false;
		document.frmCal.yp.disabled = false;
		document.frmCal.groupmember.disabled = false;
		document.frmCal.militaryveteran.disabled = false;
		document.frmCal.YRofServices.disabled = false;
		document.frmCal.yrserMM.disabled = false;
		document.frmCal.YRAverageSalary.disabled = false;
		//document.frmCal.R7q.disabled = false;
		document.frmCal.yaAdisplayonly.disabled = false;
		document.frmCal.OpAyaservicedisplay.disabled = false;
		document.frmCal.PercentFactor.disabled = false;
		document.frmCal.YRAverageSalarydisplay.disabled = false;
		document.frmCal.Aveteranbenf.disabled = false;
		document.frmCal.AmountOptionA.disabled = false;
		document.frmCal.MonthlyBenefit.disabled = false;
		document.frmCal.txtOptionB.disabled = false;
		document.frmCal.txtOptionBmonthly.disabled = false;
		document.frmCal.myResultOptionC.disabled = false;
		document.frmCal.myResultOptionCmonthly.disabled = false;
		document.frmCal.myResultOptionCTwoThirdYearly.disabled = false;
		document.frmCal.myResultOptionCTwoThirdMonthly.disabled = false;
		document.frmCal.R7q.disabled = false;	
  }else{		
		if (!document.frmCal.checkboxAgree.checked){      //I do not agree, disable = true
			alert("To use the calculator, please check  'I Agree, continue filling form. '");
			document.frmCal.checkboxAgree.focus()
			document.frmCal.mb.disabled = true;
			document.frmCal.db.disabled = true;
			document.frmCal.yb.disabled = true;
			document.frmCal.mp.disabled = true;
			document.frmCal.dp.disabled = true;
			document.frmCal.yp.disabled = true;
			document.frmCal.groupmember.disabled = true;
			document.frmCal.militaryveteran.disabled = true;
			document.frmCal.YRofServices.disabled = true;
			document.frmCal.yrserMM.disabled = true;
			document.frmCal.YRAverageSalary.disabled = true;
			//document.frmCal.R7q.disabled = true;
			document.frmCal.yaAdisplayonly.disabled = true;
			document.frmCal.OpAyaservicedisplay.disabled = true;
			document.frmCal.PercentFactor.disabled = true;
			document.frmCal.YRAverageSalarydisplay.disabled = true;
			document.frmCal.Aveteranbenf.disabled = true;
			document.frmCal.AmountOptionA.disabled = true;
			document.frmCal.MonthlyBenefit.disabled = true;
			document.frmCal.txtOptionB.disabled = true;
			document.frmCal.txtOptionBmonthly.disabled = true;
			document.frmCal.myResultOptionC.disabled = true;
			document.frmCal.myResultOptionCmonthly.disabled = true;
			document.frmCal.myResultOptionCTwoThirdYearly.disabled = true;
			document.frmCal.myResultOptionCTwoThirdMonthly.disabled = true;
			document.frmCal.R7q.disabled = true;
			
			blankRequiredvalue();
			blankRetireeDOB();
			blankBeneficiaryDOB();
			blankOptionAvalue();
			blankOptionCvalue();
			blankCalbyDOB();
			blankCalbyAge();
		}//if (!document.frmCal.checkboxAgree.checked) 
    //chk.checked = 1; // open the code to check for client
   }//if (chk.checked == 1) else
}//function validateChkBox(chk)
*/ 

/* TODO: redo validation function
function blankRequiredvalue(){
	document.frmCal.mb.value = "null";
	document.frmCal.db.value = "null";
	document.frmCal.yb.value = "";
	document.frmCal.mp.value = "null";
	document.frmCal.dp.value = "null";
	document.frmCal.yp.value = "";
	document.frmCal.groupmember.value = 1;
	document.frmCal.militaryveteran.value = "No";
	document.frmCal.YRofServices.value = 10;
	document.frmCal.yrserMM.value = 0;
	document.frmCal.YRAverageSalary.value = "";
	return;
}//function blankRequiredvalue()


function blankOptionAvalue(){
	//Option A blank
	document.frmCal.grpmember.value = "";
	document.frmCal.yaAdisplayonly.value = "";
	document.frmCal.yaC6690.value = "";
	document.frmCal.yaA.value = "";
	document.frmCal.AmountOptionAbeforeVeteranBenf.value = "";
	document.frmCal.txtOptionBbeforeVeteranBenf.value = "";	
	//document.frmCal.YRAverageSalary.value = "";	
	
	document.frmCal.AgeFactor.value = ""; //Option A age factor array		
	document.frmCal.PercentFactor.value = "";
	document.frmCal.OpAyaservicedisplay.value = "";
	document.frmCal.OpAyaservice.value = "";
	document.frmCal.OpAyaserviceVeteran.value = "";			
	document.frmCal.AmountOptionA.value = "";
	document.frmCal.Aveteranbenf.value = "";
	document.frmCal.MonthlyBenefit.value = "";
	
	// Option B blank
	
	document.frmCal.YRAverageSalarydisplay.value = "";
	document.frmCal.txtOptionB.value = "";
	document.frmCal.txtOptionBmonthly.value = "";		
	//Option C blank
	document.frmCal.myResultOptionCfator.value = "";
	document.frmCal.AmountOptionAC.value = "";		
	document.frmCal.myResultOptionC.value = "";
	document.frmCal.myResultOptionCmonthly.value = "";
	//Option C blank 2/3 of option A	
	document.frmCal.yaBenydispay.value = "";										
	document.frmCal.maBenydisplay.value = "";				
	document.frmCal.OptCbenfAge.value = ""			
	document.frmCal.myResultOptionCTwoThirdYearly.value = "";
	document.frmCal.myResultOptionCTwoThirdMonthly.value = "";	
	return;
}//function blankOptionAvalue(){
*/

/* TODO: check this text
//Option A factor calculation function(?,?,?,?)
//Added on 6-13-2017 varYRofS
function f_calOptionA(OptA, varGroup, varVeteran, varYRofS){ 
//YRofS
       var YRofS = varYRofS; // Added on 6-13-2017  for YearOfServices // if Year of Service YRofS >= 30 then use 2nd set of Array
		YRofS = parseInt(YRofS) //Added on 6-13-2017
		//varYRofS = YRofS;
	//document.frmCal.yaA.value = ya;
	var ya = OptA;
	var varLessthan36 = false;
	var varGroupmember = varGroup;
	var varOnOfffalse = false;	
	if ((ya >= 55) && (varGroupmember == 2)){
  			 ya = (ya + 5);	//add 5 years for option A group #2
	}
	///if ((ya >= 45) && (varGroupmember == 4)){ OLD
	if ((ya >= 50) && (varGroupmember == 4)){
			ya = (ya + 10);	//add 10 years for option A group #4
	}	
	//if (ya >= 65){ //comment out on 6/19/2017
	//	ya = 65		 //comment out 6/19/2017
		
	if (ya >= 67){ //Change on 6/19/2017
		ya = 67    //Change on 6/19/2017
		var OptionAARRY = "0.025";
		document.frmCal.AgeFactor.value = OptionAARRY; //Option A age factor array
		//document.frmCal.yaA.value = 65; //comment out on 6/19/2017
		document.frmCal.yaA.value = 67;//Change on 6/19/2017
		document.frmCal.grpmember.value = varGroupmember;
	}else if (ya < 36){ //less than 36
		blankOptionAvalue();		
		alert("Sorry, your age entered is less than the minimum age of 36. Please check the date or the Benefit Guide for more details.");
	}else{ // between age 36 and 67			
			//alert("ARRY[ya] " + ARRY[ya])
			if (isNaN(ya)){
				blankOptionAvalue();
				blankOptionCvalue();
			}else{
				// 5-30-2017
				// Substring 7 string after the age and Age factor Ex. Age 36 and 0.00000
				///ARRY[36]="360.00000"	
				///var OptionAARRY = ARRY[ya].substr(2, 7); // using 1st set Option A   ARRY = new Array(ya.value)	
				// 6-13-2017
				// if Year of Service YRofS >= 30 then use 2nd set of Array
				 if (ya >= 50 && YRofS >= 30){ //Change on 6-13-2017				 
					// alert("Line 996 ya is =" + ya);
					 //alert("Line 997 YRofS is =" + YRofS);
					 if (varGroupmember == 1){
						// alert("1068 varGroupmember is = " + varGroupmember);
						 var OptionAARRY = ARRY_30plusYOS_Group1[ya].substr(2, 7); // using Option A   ARRY = new Array(ya.value)						 
						 }
						 
					 if (varGroupmember == 2){
						 //alert("1084 varGroupmember is = " + varGroupmember);
						 var OptionAARRY = ARRY_30plusYOS_Group2[ya].substr(2, 7); // using Option A   ARRY = new Array(ya.value)						 
						 }
						 
					 if (varGroupmember == 4){
						 //alert("1089 varGroupmember is = " + varGroupmember);
						 var OptionAARRY = ARRY_30plusYOS_Group4[ya].substr(2, 7); // using Option A   ARRY = new Array(ya.value)						 
						 }						 
					
				 }else{
						var OptionAARRY = ARRY[ya].substr(2, 7); // using Option A   ARRY = new Array(ya.value)
					 }//end of if (ya >= 46 && YRofS >= 30){ //Change on 6-13-2017
									
				document.frmCal.AgeFactor.value = OptionAARRY; // OptionAARRY; //Option A age factor array	
				document.frmCal.yaA.value = ya; //year +  months
				//alert("932 document.frmCal.yaA.value = ya;" + ya);
				document.frmCal.grpmember.value = varGroupmember;
			}//if (isNaN(ya))
	}//if (ya >= 67){ //Change on 6/19/2017
}//function f_calOptionA(OptA, varGroup, varVeteran, varYRofS){ 
*/

/* TODO: validate output
function checkForm(form) {
    if (validateAgeFactor(form.AgeFactor)) {
        if (validateYRofServices(form.YRofService)){
            if (validateYRAverageSalary(form.YRAverageSalary)) {				
				if (validateisYear(form.yb)){
					if (validateisYear(form.yp)){
						if (validateisYearybBeny(form.ybBeny)){
								if (validateChkBox(form.checkboxAgree)){
									return true;
								}//if (checkAll(form.checkboxAgree))
						} //if (validateisYearybBeny(form.ybBeny))
					}//if (validateisYear(form.yp))
				}//if (validateisYear(form.yb))
            }//if (validateYRAverageSalary(form.YRAverageSalary))
        }//if (validateYRofServices(form.YRofService))
    }//if (validateAgeFactor(form.AgeFactor))
    return false;
}// function checkForm(form)
*/

// End of retirement estimator scripts

/**
* Update Date: 5/30/2017 for the new law changes 
* for new hires on and after 4-2-2012
* Author: WJL
* Date: 1-04-2007 Author: WJL
* The javscript has been tested on the follow OS.
* SUSE Linux 10.1  
*  Browser: Konqueror Version 3.5.1 (Using KDE 3.5.1 level "a")
*  Browser: Mozilla Firefox Version 1.5.0.3
* Windows 2000, XP pro
*  Browser: IE Version 6.0, 7.0
*  Browser: Mozilla Firefox Version 1.5, 2.0.0.1
*  Browser: Opera Version 9.02
*
*/
//done hiding from old browsers -->





