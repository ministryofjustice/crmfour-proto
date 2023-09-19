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
router.post('/question3-quote-add', function(request, response) {

    var quoteAddOther = request.session.data['quoteAddOther']
    if (quoteAddOther == "No"){
        response.redirect("/provider/form/task-list?question3-quote=complete")
    } 
    if (quoteAddOther == "Yes"){
        response.redirect("/provider/form/question3-quote-add?addCost=2&addShow=2")
    }
})

//Alternative quotes question (Section3)
router.post('/question3-alt-quotes', function(request, response) {

    var altQuote = request.session.data['alt-quotes-q']
    if (altQuote == "No"){
        response.redirect("/provider/form/task-list?question3-alt-quotes=complete")
    } else {
        response.redirect("/provider/form/question3-alt-quote-details")
    }
})




