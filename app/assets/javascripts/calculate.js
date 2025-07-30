// PA calculator
function calGeneralCost() {

  var generalCost = parseFloat(document.getElementById("generalCost").value) || 0
  var numberHours = parseInt(document.getElementById("generalNoHours-hours").value) || 0
  var numberMins = parseInt(document.getElementById("generalNoHours-mins").value) || 0

  rate1minsHours = numberMins / 60;
  timeCost = generalCost * (rate1minsHours + numberHours);

  // Forces it to be a number and 2 decimal places
  document.getElementById("showGeneralTotal").innerHTML = Number(timeCost).toFixed(2);
  document.getElementById("actualGeneralTotal").value = Number(timeCost).toFixed(2);
}

function calMultiRateCost() {

  var generalCost = parseFloat(document.getElementById("generalCost").value) || 0
  var numberHours = parseInt(document.getElementById("generalNoHours-hours").value) || 0
  var numberMins = parseInt(document.getElementById("generalNoHours-mins").value) || 0
  var general2Cost = parseFloat(document.getElementById("general2Cost").value) || 0
  var numberHours2 = parseInt(document.getElementById("general2NoHours-hours").value) || 0
  var numberMins2 = parseInt(document.getElementById("general2NoHours-mins").value) || 0

  rate1minsHours = numberMins / 60;
  rate1Cost = generalCost * (rate1minsHours + numberHours);

  rate2minHours = numberMins2 / 60;
  rate2Cost = general2Cost * (rate2minHours + numberHours2);
  timeCost = rate1Cost + rate2Cost

  // Forces it to be a number and 2 decimal places
  document.getElementById("rate1GeneralTotal").value = Number(rate1Cost).toFixed(2);
  document.getElementById("rate2GeneralTotal").value = Number(rate2Cost).toFixed(2);
  document.getElementById("showGeneralTotal").innerHTML = Number(timeCost).toFixed(2);
  document.getElementById("actualGeneralTotal").value = Number(timeCost).toFixed(2);
}

function calTravelCost() {

  var travelCostTime = parseFloat(document.getElementById("travelCostTime").value) || 0
  var travelHours = parseInt(document.getElementById("travelTime-hours").value) || 0
  var travelMins = parseInt(document.getElementById("travelTime-mins").value) || 0

  travelminsHours = travelMins / 60;
  travelTime = travelminsHours + travelHours;
  travelCost = travelCostTime * (travelminsHours + travelHours);

  document.getElementById("showTravelTotal").innerHTML = Number(travelCost).toFixed(2);
  document.getElementById("actualTravelTotal").value = Number(travelCost).toFixed(2);
}

function calAdd1CWCost() {
  let Add1Cost = 0.00
  var addCostTime1 = parseFloat(document.getElementById("addCostTime1").value) || 0
  var addHours1 = parseInt(document.getElementById("addTime1-hours").value) || 0
  var addMins1 = parseInt(document.getElementById("addTime1-mins").value) || 0

  addminsHours1 = addMins1 / 60;
  addTotalTime1 = addminsHours1 + addHours1;
  Add1Cost = addCostTime1 * addTotalTime1;

  document.getElementById("showAdd1Total").innerHTML = Number(Add1Cost).toFixed(2);
  document.getElementById("actualAdd1Total").value = Number(Add1Cost).toFixed(2);
}

function calPaymentClaimedTotal() {
  var claimedProfit = parseFloat(document.getElementById("claimedProfit").value) || 0.00
  var claimedTravel = parseFloat(document.getElementById("claimedTravel").value)|| 0.00
  var claimedWaiting = parseFloat(document.getElementById("claimedWaiting").value)|| 0.00
  var claimedDisbursement = parseFloat(document.getElementById("claimedDisbursement").value)|| 0.00

  ClaimedTotal = claimedProfit + claimedTravel + claimedWaiting + claimedDisbursement ;

  document.getElementById("claimedDisbursement").innerHTML = Number(claimedDisbursement).toFixed(2);
  document.getElementById("showpaymentClaimedTotal").innerHTML = Number(ClaimedTotal).toFixed(2);
  document.getElementById("paymentClaimedTotal").value = Number(ClaimedTotal).toFixed(2);
}

function calCounselPaymentClaimedTotal() {
  var claimedCounselNet = parseFloat(document.getElementById("claimedCounselNet").value) || 0
  var claimedCounselVAT = parseFloat(document.getElementById("claimedCounselVAT").value)|| 0,

  ClaimedTotal = claimedCounselNet + claimedCounselVAT ;

  document.getElementById("showpaymentClaimedTotal").innerHTML = Number(ClaimedTotal).toFixed(2);
  document.getElementById("paymentClaimedTotal").value = Number(ClaimedTotal).toFixed(2);
}

function calPaymentAllowedTotal() {
  var allowedProfit = parseFloat(document.getElementById("allowedProfit").value) || 0
  var allowedTravel = parseFloat(document.getElementById("allowedTravel").value)|| 0
  var allowedWaiting = parseFloat(document.getElementById("allowedWaiting").value)|| 0
  var allowedDisbursement = parseFloat(document.getElementById("allowedDisbursement").value)|| 0

  AllowedTotal = allowedProfit + allowedTravel + allowedWaiting + allowedDisbursement  ;

  document.getElementById("showpaymentAllowedTotal").innerHTML = Number(AllowedTotal).toFixed(2);
  document.getElementById("paymentAllowedTotal").value = Number(AllowedTotal).toFixed(2);
}

function calCounselPaymentAllowedTotal() {
  var allowedCounselNet = parseFloat(document.getElementById("allowedCounselNet").value) || 0
  var allowedCounselVAT = parseFloat(document.getElementById("allowedCounselVAT").value)|| 0

  AllowedTotal = allowedCounselNet + allowedCounselVAT ;

  document.getElementById("showpaymentAllowedTotal").innerHTML = Number(AllowedTotal).toFixed(2);
  document.getElementById("paymentAllowedTotal").value = Number(AllowedTotal).toFixed(2);
}

function calalt1GeneralCost() {

  var alt1generalCost = parseInt(document.getElementById("alt1generalCost").value)
  var alt1numberHours = parseInt(document.getElementById("alt1generalNoHours-hours").value)
  var alt1numberMins = parseInt(document.getElementById("alt1generalNoHours-mins").value),

  alt1minsHours = alt1numberMins / 60;
  alt1totalTime = alt1minsHours + alt1numberHours;
  alt1timeCost = alt1generalCost * alt1totalTime;
  document.getElementById("showalt1GeneralTotal").innerHTML = alt1timeCost;
  document.getElementById("actualalt1GeneralTotal").value = alt1timeCost;
}

function calOtherCost() {

  var otherChargeType = parseInt(document.getElementById("otherChargeType").value)

  var otherCostTime = parseInt(document.getElementById("otherCostTime").value)
  var numberHours = parseInt(document.getElementById("otherNoHours-hours").value)
  var numberMins = parseInt(document.getElementById("otherNoHours-mins").value)

  var otherNoItems = parseInt(document.getElementById("otherNoItems").value)
  var otherItemsCost = parseInt(document.getElementById("otherItemsCost").value)

  if (otherChargeType === "Charged by the hour"){
    minsHours = numberMins / 60;
    totalTime = minsHours + numberHours;
    otherCost = otherCostTime * totalTime;
    document.getElementById("showOtherTotal").innerHTML = otherCost;
    document.getElementById("actualOtherTotal").value = otherCost;

    } else {
      otherCost = otherNoItems * otherItemsCost;
      document.getElementById("showOtherTotal").innerHTML = otherCost;
      document.getElementById("actualOtherTotal").value = otherCost;
    }
  }

function calPhotoCost() {

  var photoCostPage = parseInt(document.getElementById("photoCostPage").value)
  var photoNoPages = parseInt(document.getElementById("photoNoPages").value)

  photoCost = photoCostPage * photoNoPages;
  document.getElementById("showPhotoTotal").innerHTML = photoCost;
  document.getElementById("actualPhotoTotal").value = photoCost;
}

function calTranslatorCost() {

  var translatorWords = parseInt(document.getElementById("translatorWords").value)
  var translatorCostWord = parseInt(document.getElementById("translatorCostWord").value)

  translatorCost = (translatorWords * translatorCostWord) / 1000;
  document.getElementById("showTranslatorTotal").innerHTML = translatorCost;
  document.getElementById("actualTranslatorTotal").value = translatorCost;
}

function calTransTransCost() {

  var transtransNoMins = parseInt(document.getElementById("transtransNoMins").value)
  var transtransCostMin = parseInt(document.getElementById("transtransCostMin").value)

  transtransCost = transtransNoMins * transtransCostMin;
  document.getElementById("showTransTransTotal").innerHTML = transtransCost;
  document.getElementById("actualTransTransTotal").value = transtransCost;
}

function calTransCost() {

  var transNoMins = parseInt(document.getElementById("transNoMins").value)
  var transCostMin = parseInt(document.getElementById("transCostMin").value)

  transCost = transNoMins * transCostMin;
  document.getElementById("showTransTotal").innerHTML = transCost;
  document.getElementById("actualTransTotal").value = transCost;
}

function calDNACost() {

  var dnaNoReport = parseInt(document.getElementById("dnaNoReport").value)
  var dnaReportCost = parseInt(document.getElementById("dnaReportCost").value)

  dnaCost = dnaReportCost * dnaNoReport;
  document.getElementById("showDNATotal").innerHTML = dnaCost;
  document.getElementById("actualDNATotal").value = dnaCost;
}

function calAdd2Cost() {
  let Add2Cost = 0
  var addCostTime2 = parseInt(document.getElementById("addCostTime2").value)
  var addHours2 = parseInt(document.getElementById("addTime2-hours").value)
  var addMins2 = parseInt(document.getElementById("addTime2-mins").value)

  var addQuantity2 = parseInt(document.getElementById("addQuantity2").value)
  var addNonhourRate2 = parseInt(document.getElementById("addNonhourRate2").value)

  if (addChargeType2 == "Charged by the hour"){
    addminsHours2 = addMins2 / 60;
    addTotalTime2 = addminsHours2 + addHours2;
    Add2Cost = addCostTime2 * addTotalTime2;
    document.getElementById("showAdd2Total").innerHTML = Add2Cost;
    document.getElementById("actualAdd2Total").value = Add2Cost;
  } else {
    Add2Cost = addQuantity2 * addNonhourRate2;
    document.getElementById("showAdd2Total").innerHTML = Add2Cost;
    document.getElementById("actualAdd2Total").value = Add2Cost;
  } 
}

function calAdd1Cost() {
 
  var addCostTime1 = parseFloat(document.getElementById("addCostTime1").value)
  var addHours1 = parseInt(document.getElementById("addTime1-hours").value)
  var addMins1 = parseInt(document.getElementById("addTime1-mins").value)

  var addQuantity1 = parseInt(document.getElementById("addQuantity1").value)
  var addNonhourRate1 = parseFloat(document.getElementById("addNonhourRate1").value)

  if (addChargeType1 == "Charged by the hour"){
    addminsHours1 = addMins1 / 60;
    addTotalTime1 = addminsHours1 + addHours1;
    Add1Cost = addCostTime1 * addTotalTime1;
    document.getElementById("showAdd1Total").innerHTML = Number(Add1Cost).toFixed(2);
    document.getElementById("actualAdd1Total").value = Number(Add1Cost).toFixed(2);
  } else {
    Add1Cost = addQuantity1 * addNonhourRate1;
    document.getElementById("showAdd1Total").innerHTML = Number(Add1Cost).toFixed(2);
    document.getElementById("actualAdd1Total").value = Number(Add1Cost).toFixed(2);
  }
}

function calAddTotal() {
  addTotalCost = Add1Cost + Add2Cost;  
  document.getElementById("actualAddTotalCost").value = addTotalCost;
}

function calAlt1Cost() {

  var altCostTime1 = parseInt(document.getElementById("altCostTime1").value)
  var altHours1 = parseInt(document.getElementById("altTime1-hours").value)
  var altMins1 = parseInt(document.getElementById("altTime1-mins").value),

  altminsHours1 = altMins1 / 60;
  altTotalTime1 = altminsHours1 + altHours1;
  Alt1Cost = altCostTime1 * altTotalTime1;
  document.getElementById("showAlt1Total").innerHTML = Alt1Cost;
  document.getElementById("actualAlt1Total").value = Alt1Cost;
}

function calAlt2Cost() {

  var altCostTime2 = parseInt(document.getElementById("altCostTime2").value)
  var altHours2 = parseInt(document.getElementById("altTime2-hours").value)
  var altMins2 = parseInt(document.getElementById("altTime2-mins").value),

  altminsHours2 = altMins2 / 60;
  altTotalTime2 = altminsHours2 + altHours2;
  Alt2Cost = altCostTime2 * altTotalTime2;
  document.getElementById("showAlt2Total").innerHTML = Alt2Cost;
  document.getElementById("actualAlt2Total").value = Alt2Cost;
}

function calAlt3Cost() {

  var altCostTime3 = parseInt(document.getElementById("altCostTime3").value)
  var altHours3 = parseInt(document.getElementById("altTime3-hours").value)
  var altMins3 = parseInt(document.getElementById("altTime3-mins").value),

  altminsHours3 = altMins3 / 60;
  altTotalTime3 = altminsHours3 + altHours3;
  Alt3Cost = altCostTime3 * altTotalTime3;
  document.getElementById("showAlt3Total").innerHTML = Alt3Cost;
  document.getElementById("actualAlt3Total").value = Alt3Cost;
}

function calAltTravel1Cost() {

  var altTravel1CostTime = parseInt(document.getElementById("altTravel1Cost").value)
  var altTravel1Hours = parseInt(document.getElementById("altTravel1-hours").value)
  var alt1travelMins = parseInt(document.getElementById("altTravel1-mins").value),

  alttravel1MinsHours = alt1travelMins / 60;
  alttravel1Time = alttravel1MinsHours + altTravel1Hours;
  alttravel1Cost = altTravel1CostTime * alttravel1Time;
  document.getElementById("showAltTravel1Total").innerHTML = alttravel1Cost;
  document.getElementById("actualAltTravel1Total").value = alttravel1Cost;
}

function calAltTravel2Cost() {

  var altTravel2CostTime = parseInt(document.getElementById("altTravel2Cost").value)
  var altTravel2Hours = parseInt(document.getElementById("altTravel2-hours").value)
  var alt2travelMins = parseInt(document.getElementById("altTravel2-mins").value),

  alttravel2MinsHours = alt2travelMins / 60;
  alttravel2Time = alttravel2MinsHours + altTravel2Hours;
  alttravel2Cost = altTravel2CostTime * alttravel2Time;
  document.getElementById("showAltTravel2Total").innerHTML = alttravel2Cost;
  document.getElementById("actualAltTravel2Total").value = alttravel2Cost;
}

function calAltTravel3Cost() {

  var altTravel3CostTime = parseInt(document.getElementById("altTravel3Cost").value)
  var altTravel3Hours = parseInt(document.getElementById("altTravel3-hours").value)
  var alt3travelMins = parseInt(document.getElementById("altTravel3-mins").value),

  alttravel3MinsHours = alt3travelMins / 60;
  alttravel3Time = alttravel3MinsHours + altTravel3Hours;
  alttravel3Cost = altTravel3CostTime * alttravel3Time;
  document.getElementById("showAltTravel3Total").innerHTML = alttravel3Cost;
  document.getElementById("actualAltTravel3Total").value = alttravel3Cost;
}