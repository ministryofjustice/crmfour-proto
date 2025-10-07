const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-portal')

const version = 'latest-portal'

  //Allow user to search for the original claim for all payment types, except Non-standard Magistrates
  router.post('/question-payment-type', function(request, response) {

    var paymentType = request.session.data['paymentType']

    if (paymentType == "Non-standard magistrates'" ){
        response.redirect('/' + version + "/payments/add/claim-details?officeAccount=&claimedProfit=&claimedTravel=&claimedWaiting=&claimedDisbursement=&allowedProfit=&allowedTravel=&allowedWaiting=&allowedDisbursement=")
    }
    else {
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
  })
 
//Skip claimed costs for NSM Appeal, NSM Amendment, AC Appeal, AC Amendment
  router.post('/question-claim-details', function(request, response) {

    var paymentType = request.session.data['paymentType'];

    if (paymentType == "Non-standard magistrates' - supplemental"){
        response.redirect('/' + version + "/payments/add/costs-claimed?claimedProfit=342.00&claimedTravel=0.00&claimedWaiting=60.00&claimedDisbursement=890.00&allowedProfit=332.00&allowedTravel=50.00&allowedWaiting=0.00&allowedDisbursement=890.00")
    } 

    if (paymentType == "Non-standard magistrates' - supplemental"){
        response.redirect('/' + version + "/payments/add/costs-claimed")
    }

    if (paymentType == "Non-standard magistrates' - appeal"){
        response.redirect('/' + version + "/payments/add/costs-allowed?claimedProfit=342.00&claimedTravel=0.00&claimedWaiting=60.00&claimedDisbursement=890.00&allowedProfit=332.00&allowedTravel=50.00&allowedWaiting=0.00&allowedDisbursement=890.00")
    } 

    if (paymentType == "Non-standard magistrates' - appeal"){
        response.redirect('/' + version + "/payments/add/costs-allowed")
    }

    if (paymentType == "Non-standard magistrates' - amendment"){
        response.redirect('/' + version + "/payments/add/costs-allowed?claimedProfit=342.00&claimedTravel=0.00&claimedWaiting=60.00&claimedDisbursement=890.00&allowedProfit=332.00&allowedTravel=50.00&allowedWaiting=0.00&allowedDisbursement=890.00")
    } 

    if (paymentType == "Non-standard magistrates' - amendment"){
        response.redirect('/' + version + "/payments/add/costs-allowed")
    }

    if (paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/costs-claimed?claimedCounselNet=1000.00&allowedCounselNet=900.00&claimedCounselVAT=200.00&allowedCounselVAT=180.00")
    } 

    if (paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/costs-claimed")
    }

    if (paymentType == "Assigned counsel - appeal"){
        response.redirect('/' + version + "/payments/add/costs-allowed?claimedCounselNet=1000.00&allowedCounselNet=900.00&claimedCounselVAT=200.00&allowedCounselVAT=180.00")
    } 

    if (paymentType == "Assigned counsel - appeal"){
        response.redirect('/' + version + "/payments/add/costs-allowed")
    }

    if (paymentType == "Assigned counsel - amendment"){
        response.redirect('/' + version + "/payments/add/costs-allowed??claimedCounselNet=1000.00&allowedCounselNet=900.00&claimedCounselVAT=200.00&allowedCounselVAT=180.00")
    } 

    if (paymentType == "Assigned counsel - amendment"){
        response.redirect('/' + version + "/payments/add/costs-allowed")
    }

    else {
        response.redirect('/' + version + "/payments/add/costs-claimed")
    } 
  })