const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-portal')

const version = 'latest-portal'

  //Take user to search for the original claim for all payment types, except Non-standard Magistrates
  router.post('/question-payment-type', function(request, response) {

    var paymentType = request.session.data['paymentType']

    if (paymentType == "Non-standard magistrates'" ){
        response.redirect('/' + version + "/payments/add/account-number")
    }
    else {
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
  })

  //Take user to office code question if there is no linked claim - skips office code question when there is a linked claim
  router.post('/question-laa-reference', function(request, response) {

    var linkedCRM = request.session.data['linkedCRM']

    if (linkedCRM == "No" ){
        response.redirect('/' + version + "/payments/add/account-number")
    }
    else {
        response.redirect('/' + version + "/payments/add/claim-details")
    } 
  })

  //Take user to account not found screen if the office code input is less than 6 characters
  router.post('/question-account-number', function(request, response) {

    var officeAccount = request.session.data['officeAccount']

    if (officeAccount.length < 6 ){
        response.redirect('/' + version + "/payments/add/account-number-invalid")
    }
    else {
        response.redirect('/' + version + "/payments/add/account-number-check")
    } 
  })

  //Allow user to continue if office account check is valid
  router.post('/question-account-number-check', function(request, response) {

    var accountCheck = request.session.data['accountCheck']

    if (accountCheck == "Yes" ){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else {
        response.redirect('/' + version + "/payments/add/account-number")
    } 
  })