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
        response.redirect('/' + version + "/payments/add/existing-claim-question")
    } 

    if (paymentType == "Amendment to Non-standard Magistrates'"){
        response.redirect('/' + version + "/payments/add/existing-claim-question")
    } 
     if (paymentType == "Assigned counsel"){
        response.redirect('/' + version + "/payments/add/existing-claim-question")
    } 
    if (paymentType == "Amendment to assigned counsel"){
        response.redirect('/' + version + "/payments/add/existing-claim-question")
    } 
  })
  
//Payments - Existing claim?
router.post('/question-existing-claim-ref', function(request, response) {

    var existingRef = request.session.data['existingRef']

    if (existingRef == "Yes"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 
    if (existingRef == "No") {
        response.redirect('/' + version + "/payments/add/claim-details")
    } 
  })

//Payments - Existing claim - counsel assigned?
router.post('/question-existing-counsel-ref', function(request, response) {

    var existingRefCounsel = request.session.data['existingRefCounsel']

    if (existingRefCounsel == "Yes"){
        response.redirect('/' + version + "/payments/add/claim-details?laa-ref=LAA-5a7d3c&dateReceived=24 July 2025&officeAccount=1A33E4&ufn=100323/234&counselOfficeAccount=4A33E9&defendantLastName=Blackbeard")
    } 
    if (existingRefCounsel == "No") {
        response.redirect('/' + version + "/payments/add/existing-claim-question?laa-ref=&dateReceived=&officeAccount=&ufn=&counselOfficeAccount=&defendantLastName=")
    } 
  })

