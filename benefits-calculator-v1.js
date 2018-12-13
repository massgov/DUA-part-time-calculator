var theForm = document.forms["benCalc"];

function getBenefits()
{
    //Assume form with id="benCalc"
    var theForm = document.forms["benCalc"];
    var benefits_determination = theForm.elements["benefits_determination"];
    var benefits = 0;
    //If the textbox is not blank
    if(benefits_determination.value != "")
    {
        benefits = parseInt(benefits_determination.value);
    }
    console.log(benefits);
return benefits;
}

function getEarnings()
{
    //Assume form with id="benCalc"
    var theForm = document.forms["benCalc"];
    var pt_earnings = theForm.elements["pt_earnings"];
    var earnings = 0;
    //If the textbox is not blank
    if(pt_earnings.value != "")
    {
        earnings = parseInt(pt_earnings.value);
    }
    console.log(earnings);
return earnings;
}


function calcBenefits()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    if (getEarnings() > ((1/3) * (getBenefits())))
    {
        var disregard = getBenefits() / 3;
        var benefits = getBenefits() - (getEarnings() - ((1/3) * (getBenefits())));
        //var earnings = getEarnings();
        var take_home = benefits + earnings;
 }
 else
 {
        var disregard = getBenefits() / 3;
        var benefits = getBenefits();
        //var earnings = getEarnings();
        var take_home = benefits + earnings;
}
    document.getElementById('disregard').value = disregard
    //document.getElementById('earnings').value = earnings
    document.getElementById('benefits').value = benefits
    document.getElementById('take_home').value = take_home
    console.log((1/3)*(benefits))
}
