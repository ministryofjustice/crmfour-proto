const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-portal')

const version = 'latest-portal'

//Payment type?
router.post('/question-payment-type', function(request, response) {

    var paymentType = request.session.data['paymentType']

    if (paymentType == "Non-standard magistrates'" ){
        response.redirect('/' + version + "/payments/add/claim-details?claimedProfit=&claimedTravel=&claimedWaiting=&claimedDisbursement=&allowedProfit=&allowedTravel=&allowedWaiting=&allowedDisbursement=")
    } 

    if (paymentType == "Non-standard magistrates' - supplemental"){
        response.redirect('/' + version + "/payments/add/laa-reference?claimedProfit=342.00&claimedTravel=0.00&claimedWaiting=60.00&claimedDisbursement=890.00&allowedProfit=332.00&allowedTravel=50.00&allowedWaiting=0.00&allowedDisbursement=890.00")
    } 

    else {
        response.redirect('/' + version + "/payments/add/laa-reference?claimedProfit=342.00&claimedTravel=0.00&claimedWaiting=10.00&claimedDisbursement=890.00&allowedProfit=342.00&allowedTravel=0.00&allowedWaiting=10.00&allowedDisbursement=890.00")
    } 
  })
