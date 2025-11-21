const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/nsm-1-4')

const version = 'nsm-1-4'

  //Go to 'Is there an LAA ref?' question for all payment types, except Non-standard Magistrates
  router.post('/question-payment-type', function(request, response) {

    var paymentType = request.session.data['paymentType']

    if (paymentType == "Non-standard magistrates'" ){
        response.redirect('/' + version + "/payments/add/claim-details?officeAccount=&claimedProfit=&claimedTravel=&claimedWaiting=&claimedDisbursement=&allowedProfit=&allowedTravel=&allowedWaiting=&allowedDisbursement=")
    }
    else {
        response.redirect('/' + version + "/payments/add/linked-claim")
    } 
  })


  //Skip LAA reference input if no LAA reference for the original claim
  router.post('/question-linked-claim', function(request, response) {

    var linkedCRM7 = request.session.data['linkedCRM7']

    if (linkedCRM7 == "No" ){
        response.redirect('/' + version + "/payments/add/claim-details")
    } 

    else {
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
  })