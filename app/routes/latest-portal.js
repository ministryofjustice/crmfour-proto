const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-portal')

const version = 'latest-portal'

//Payment type?
router.post('/question-payment-type', function(request, response) {

    var paymentType = request.session.data['paymentType']

    if (paymentType == "Non-standard Magistrates'"){
        response.redirect('/' + version + "/payments/add/claim-details")
    } 

    if (paymentType == "Supplemental Non-standard Magistrates'"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 

    if (paymentType == "Amendment to Non-standard Magistrates'"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
     if (paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
    if (paymentType == "Amendment to assigned counsel"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
  })
