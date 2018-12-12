var theForm = document.forms["benCalc"];

function getBenefits()
{
    //Assume form with id="benCalc"
    var theForm = document.forms["benCalc"];
    //Get a reference to the TextBox
    var benefits_determination = theForm.elements["benefits_determination"];
    var benefits = 0;
    //If the textbox is not blank
    if(benefits_determination.value != "")
    {
        benefits = parseInt(benefits_determination.value);
    }
return benefits;
}

function getEarnings()
{
    //Assume form with id="benCalc"
    var theForm = document.forms["benCalc"];
    //Get a reference to the TextBox
    var pt_earnings = theForm.elements["pt_earnings"];
    var earnings = 0;
    //If the textbox is not blank
    if(pt_earnings.value != "")
    {
        earnings = parseInt(pt_earnings.value);
    }
return earnings;
}


function calcBenefits()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    if (getEarnings() > ((1/3) * (getBenefits())))
    {
        var benefits = getBenefits() - (getEarnings() - ((1/3) * (getBenefits())));
        var earnings = getEarnings();
        var take_home = benefits + earnings;
 }
 else
        var benefits = getBenefits();
        var earnings = getEarnings();
        var take_home = benefits + earnings;
    
    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Cake $"+cakePrice;
 
}

        
        
