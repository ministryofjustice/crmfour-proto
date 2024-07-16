//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const formData = require('./data/form_data')


// Add your routes here

//Autocomplete example for bringing in select lists
router.get('/provider/form/auto-complete-example', async (req, res, next) => {
    let courtLists = formData['list_of_courts']
    let hearingOutcomeLists = formData['hearing_outcome']
    let matterTypeLists = formData['matter_type']
    res.render('/provider/form/auto-complete-example', { courtLists: courtLists, hearingOutcomeLists: hearingOutcomeLists, matterTypeLists: matterTypeLists })
  })

 //Office accounts
router.post('/nscc-office', function(request, response) {

    var officeCodeQ = request.session.data['officeCodeQ']
    if (officeCodeQ == "No"){
        response.redirect("/provider/nscc-choose-office")
    } 
    if (officeCodeQ == "Yes"){
        response.redirect("provider/crm-apps")
    }
}) 

//Eligibility
router.post('/question1-eligibility', function(request, response) {

    var eligibility = request.session.data['eligibility']
    if (eligibility == "No"){
        response.redirect("/provider/form/question-ufn")
    } 
    if (eligibility == "Yes"){
        response.redirect("provider/form/question-ineligible")
    }
})

//Prison law matter (Section 2)
router.post('/question2-case-hearing', function(request, response) {

    var courtType = request.session.data['courtType']
    if (courtType == "Crown Court (excluding Central Criminal Court)"){
        response.redirect("provider/form/task-list?question2-case=complete")
    } else {
        response.redirect("/provider/form/question2-case-hearing-extra")
    }
})

//Add travel costs? (Section3)
router.post('/question3-add-travel', function(request, response) {

    var travelAdd = request.session.data['addTravel']
    if (travelAdd == "No"){
        response.redirect("/provider/form/question3-quote-add-q")
    } 
    if (travelAdd == "Yes"){
        response.redirect("/provider/form/question3-quote-travel")
    }
})

//Add Additional costs? (Section3)
router.post('/question3-add-add', function(request, response) {

    var addAdd = request.session.data['addAdd']
    if (addAdd == "No"){
        response.redirect("/provider/form/question3-quote-summary?addAdd=No")
    } 
    if (addAdd == "Yes"){
        response.redirect("/provider/form/question3-quote-add?addAdd=Yes&addCost=1")
    }
})

//Additional items summary (Section3)
router.post('/question3-quote-add-summary0', function(request, response) {

    var quoteAddOther = request.session.data['quoteAddOther']
    if (quoteAddOther == "No"){
        response.redirect("/provider/form/question3-quote-summary")
    } 
    if (quoteAddOther == "Yes"){
        response.redirect("/provider/form/question3-quote-add?addCost=1&addShow=")
    }
})

//Additional items summary (Section3)
router.post('/question3-quote-add-summary1', function(request, response) {

    var quoteAddOther = request.session.data['quoteAddOther']
    if (quoteAddOther == "No"){
        response.redirect("/provider/form/question3-quote-summary")
    } 
    if (quoteAddOther == "Yes"){
        response.redirect("/provider/form/question3-quote-add?addCost=2&addShow=2")
    }
})

//Alternative quotes question (Section3)
router.post('/question3-alt-quotes-q', function(request, response) {

    var altQuotesQ = request.session.data['altQuotesQ']
    if (altQuotesQ == "No"){
        response.redirect("/provider/form/task-list?question3-alt-quote=complete")
    } 
    if (altQuotesQ == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-details?addAlt=yes&altShow=1&addAltQuote=1")
    }
})

//Alternative quotes travel question (Section3)
router.post('/question3-alt-travel-q1', function(request, response) {

    var altTravelQ1 = request.session.data['altTravelQ1']
    if (altTravelQ1 == "No"){
        response.redirect("/provider/form/question3-alt-quote-summary")
    } 
    if (altTravelQ1 == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-travel")
    }
})

router.post('/question3-alt-travel-q2', function(request, response) {

    var altTravelQ2 = request.session.data['altTravelQ2']
    if (altTravelQ2 == "No"){
        response.redirect("/provider/form/question3-alt-quote-summary")
    } 
    if (altTravelQ2 == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-travel")
    }
})

router.post('/question3-alt-travel-q3', function(request, response) {

    var altTravelQ3 = request.session.data['altTravelQ3']
    if (altTravelQ3 == "No"){
        response.redirect("/provider/form/question3-alt-quote-summary")
    } 
    if (altTravelQ3 == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-travel")
    }
})

//Alternative quotes add 2nd quote (Section3)
router.post('/question3-alt-quote-summary2', function(request, response) {

    var altAddQuote1 = request.session.data['altAddQuote1']
    if (altAddQuote1 == "No"){
        response.redirect("/provider/form/task-list?question3-alt-quote=complete")
    } 
    if (altAddQuote1 == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-details?addAlt=yes&addAltQuote=2&showAltQuote=2")
    }
})

//Alternative quotes add 3rd quote (Section3)
router.post('/question3-alt-quote-summary3', function(request, response) {

    var altAddQuote2 = request.session.data['altAddQuote2']
    if (altAddQuote2 == "No"){
        response.redirect("/provider/form/task-list?question3-alt-quote=complete")
    } 
    if (altAddQuote2 == "Yes"){
        response.redirect("/provider/form/question3-alt-quote-details?addAlt=yes&addAltQuote=3&showAltQuote=3")
    }
})

//Additional information (Section3)
router.post('/question3-add-info', function(request, response) {

    var haveYouCompletedThisSection = request.session.data['haveYouCompletedThisSection']
    if (haveYouCompletedThisSection == "No"){
        response.redirect("/provider/form/task-list?question3-add-info=draft")
    } 
    if (haveYouCompletedThisSection == "Yes"){
        response.redirect("/provider/form/task-list?question3-add-info=complete")
    }
})


//Additional work item second time (CRM7) version 1 from review
router.post('/add-work-item-final1', function(request, response) {

    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect("/provider-nsm/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect("/provider-nsm/form/add-work-item1")
    }
})

//Additional work item first time (CRM7) version 3
router.post('/add-work-item3', function(request, response) {

    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect("/provider-nsm/form/review-all-work-items3")
    } 
    if (addAnother == "Yes"){
        response.redirect("/provider-nsm/form/add-work-item3")
    }
})

//Additional work item second time (CRM7) version 3 from view
router.post('/add-work-item-final3', function(request, response) {

    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect("/provider-nsm/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect("/provider-nsm/form/add-work-item3")
    }
})