// Disbursement type calculator
function calGeneralCost() {

  var generalCost = parseInt(document.getElementById("generalCost").value)
  var numberHours = parseInt(document.getElementById("generalNoHours-hours").value)
  var numberMins = parseInt(document.getElementById("generalNoHours-mins").value),

  minsHours = numberMins / 60;
  totalTime = minsHours + numberHours;
  timeCost = generalCost * totalTime;
  document.getElementById("showGeneralTotal").innerHTML = timeCost;
  document.getElementById("actualGeneralTotal").value = timeCost;
}

function calOtherCost() {

  var otherCostTime = parseInt(document.getElementById("otherCostTime").value)
  var numberHours = parseInt(document.getElementById("otherNoHours-hours").value)
  var numberMins = parseInt(document.getElementById("otherNoHours-mins").value),

  minsHours = numberMins / 60;
  totalTime = minsHours + numberHours;
  otherCost = otherCostTime * totalTime;
  document.getElementById("showOtherTotal").innerHTML = otherCost;
  document.getElementById("actualOtherTotal").value = otherCost;
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

  translatorCost = translatorWords * translatorCostWord;
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

function calTravelCost() {

  var travelCostTime = parseInt(document.getElementById("travelCostTime").value)
  var travelHours = parseInt(document.getElementById("travelTime-hours").value)
  var travelMins = parseInt(document.getElementById("travelTime-mins").value),

  travelminsHours = travelMins / 60;
  travelTime = travelminsHours + travelHours;
  travelCost = travelCostTime * travelTime;
  document.getElementById("showTravelTotal").innerHTML = travelCost;
  document.getElementById("actualTravelTotal").value = travelCost;
}

function calTransCost() {

  var transNoMins = parseInt(document.getElementById("transNoMins").value)
  var transCostMin = parseInt(document.getElementById("transCostMin").value)

  transCost = transNoMins * transCostMin;
  document.getElementById("showTransTotal").innerHTML = transCost;
  document.getElementById("actualTransTotal").value = transCost;
}

function calAdd1Cost() {

  var addCostTime1 = parseInt(document.getElementById("addCostTime1").value)
  var addHours1 = parseInt(document.getElementById("addTime1-hours").value)
  var addMins1 = parseInt(document.getElementById("addTime1-mins").value),

  addminsHours1 = addMins1 / 60;
  addTotalTime1 = addminsHours1 + addHours1;
  Add1Cost = addCostTime1 * addTotalTime1;
  document.getElementById("showAdd1Total").innerHTML = Add1Cost;
  document.getElementById("actualAdd1Total").value = Add1Cost;
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

function calAdd2Cost() {
  let Add2Cost = 0
  var addCostTime2 = parseInt(document.getElementById("addCostTime2").value)
  var addHours2 = parseInt(document.getElementById("addTime2-hours").value)
  var addMins2 = parseInt(document.getElementById("addTime2-mins").value),

  addminsHours2 = addMins2 / 60;
  addTotalTime2 = addminsHours2 + addHours2;
  Add2Cost = addCostTime2 * addTotalTime2;
  document.getElementById("showAdd2Total").innerHTML = Add2Cost;
  document.getElementById("actualAdd2Total").value = Add2Cost;
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










function calculate() {
  var panel = parseInt(document.getElementById("panel").value),
      panelv = 65,
      panelt = panel * panelv,
      derating_value = 2,
      total_hours_standby = panelt * derating_value;

  document.getElementById("total_hours").innerHTML = total_hours_standby;
}







// Work item - claim_items
const claim_type_radio_group = document.querySelectorAll(
  "input[name='claim_items[claim_types]']",
)
const time_spent_hr = document.querySelector('input[name="claim_items[time_spent][hr]"]');
const time_spent_min = document.querySelector('input[name="claim_items[time_spent][min]"]');
const claim_total_amount = document.getElementById('claim-items-total');
let item_cost = 0
let claim_type_selected = false
let total_cost = 0
const cost_per_work_item = {
  'attendance with counsel assigned': 31.03,
  'attendance without counsel assigned': 31.03,
  'preperation': 45.35,
  'advocacy': 56.89,
  'travel': 24,
  'waiting': 24
}

function calculate_work_item(){
  let item_cost_per_minute = item_cost / 60
  let total_spent_hour_to_minutes = Number(time_spent_hr.value * 60)
  let total_spent_minutes = Number(time_spent_min.value)
  let total_time_in_minutes = total_spent_hour_to_minutes + total_spent_minutes
  total_cost = total_time_in_minutes * item_cost_per_minute
  return total_cost
}

function update_total_value(value) {
  let total_in_two_decimal
  value ? total_in_two_decimal = value : total_in_two_decimal = calculate_work_item().toFixed(2)
  claim_total_amount.innerHTML = '£' + total_in_two_decimal
}

claim_type_radio_group.forEach((element) => {
  element.addEventListener('change', () => {
      claim_type_selected = true
      var selectValue = Array.from(claim_type_radio_group).find(radio => radio.checked);
      item_cost = cost_per_work_item[selectValue.value]
      if(time_spent_hr.value && time_spent_min.value) {
          update_total_value()
      }
  })
});

time_spent_min.addEventListener('blur',()=>{
  update_total_value()
})

time_spent_hr.addEventListener('blur',()=>{
  update_total_value()
})

  // Calculation for the uplift checkbox
const uplift_checkbox = document.getElementById('claim-items-uplift')
const uplift_percentage = document.getElementById('claim-items-uplift-percentage')
const uplift_calculation_section = document.getElementById('claim-items-calculation-section')
const before_uplift_value = document.getElementById('claim-items-calculation-before-uplift-value')
const after_uplift_value = document.getElementById('claim-items-calculation-after-uplift-value')

function has_all_the_required_value(){
  return (claim_type_selected && time_spent_hr.value && time_spent_min.value)? true : false
}

function calculate_uplift(percent) {
  let percentAsDecimal = Number(percent / 100)
  let percentAmount = Number(percentAsDecimal) * total_cost
  let total_after_adding_percent = total_cost + percentAmount
  return total_after_adding_percent.toFixed(2)
}

uplift_percentage.addEventListener('blur',() => {
  if(has_all_the_required_value() && uplift_percentage.value) {
      let new_total = calculate_uplift(uplift_percentage.value)
      before_uplift_value.innerHTML= '£' + total_cost.toFixed(2)
      after_uplift_value.innerHTML= '£' + new_total
      update_total_value(new_total)
      uplift_calculation_section.classList.remove('hidden')
  }
})

uplift_checkbox.addEventListener('change',()=>{
  if(uplift_checkbox.checked === false){
      uplift_percentage.value = null
      update_total_value(total_cost.toFixed(2))
      uplift_calculation_section.classList.add('hidden')
  }
})
