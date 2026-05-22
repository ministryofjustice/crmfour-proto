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

  //Take user to solicitors office code question if there is no linked claim - skips solicitors office code question when there is a linked claim
  //Take user to counsel office code queston if there is no linked claim and payment type is Assigned Counsel
  //Else skip solicitors office code question when there is a linked claim for all other payment types
  router.post('/question-laa-reference', function(request, response) {

    var linkedCRM = request.session.data['linkedCRM']
    var paymentType = request.session.data['paymentType']

    if (linkedCRM == "No" ){
        response.redirect('/' + version + "/payments/add/account-number")
    }
    else if (linkedCRM == "Yes" && paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/counsel-account-number")
    }
    else {
        response.redirect('/' + version + "/payments/add/claim-details")
    } 
  })

  //Take user to account not found screen if the solicitors office code input is less than 6 characters
  router.post('/question-account-number', function(request, response) {

    var officeAccount = request.session.data['officeAccount']

    if (officeAccount.length < 6 ){
        response.redirect('/' + version + "/payments/add/account-number-invalid")
    }
    else {
        response.redirect('/' + version + "/payments/add/account-number-check")
    } 
  })

  //Allow user to continue if solicitors office account check is valid
  router.post('/question-account-number-check', function(request, response) {

    var accountCheck = request.session.data['accountCheck']
    var paymentType = request.session.data['paymentType']

    if (accountCheck == "No"){
        response.redirect('/' + version + "/payments/add/account-number")
    }
    else if (accountCheck == "Yes" && paymentType == "Non-standard magistrates'"){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else if (accountCheck == "Yes" && paymentType == "Non-standard magistrates' - supplemental"){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else if (accountCheck == "Yes" && paymentType == "Non-standard magistrates' - appeal"){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else if (accountCheck == "Yes" && paymentType == "Non-standard magistrates' - amendment"){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else if (accountCheck == "Yes" && paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/counsel-account-number")
    }
    else if (accountCheck == "Yes" && paymentType == "Assigned counsel - appeal"){
        response.redirect('/' + version + "/payments/add/counsel-account-number")
    }
    else if (accountCheck == "Yes" && paymentType == "Assigned counsel - amendment"){
        response.redirect('/' + version + "/payments/add/counsel-account-number")
    }

  })

  //Allow user to continue if counsel office account check is valid
  router.post('/question-counsel-account-number-check', function(request, response) {

    var accountCheck = request.session.data['accountCheck']

    if (accountCheck == "Yes"){
        response.redirect('/' + version + "/payments/add/claim-details")
    }
    else {
        response.redirect('/' + version + "/payments/add/counsel-account-number")
    } 
  })