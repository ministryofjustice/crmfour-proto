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