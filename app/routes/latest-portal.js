const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-portal')

const version = 'latest-portal'

//Payments - Existing claim?
router.post('/question-existing-claim-ref', function(request, response) {

    var existingRef = request.session.data['existingRef']

    if (existingRef == "Yes"){
        response.redirect('/' + version + "/payments/add/laa-reference")
    } 

    else {
        response.redirect('/' + version + "/payments/add/claim-details")
    } 
    
  })

  