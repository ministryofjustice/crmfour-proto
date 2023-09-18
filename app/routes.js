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
    if (eligibility == "no"){
        response.redirect("/provider/form/question-ufn")
    } else {
        response.redirect("/provider/form/question-ineligible")
    }
})

//Client details  - Prison Matter (Section2)
router.post('/question2-case-prison', function(request, response) {

    var prisonLaw = request.session.data['prison-law']
    if (prisonLaw == "no"){
        response.redirect("/provider/form/question2-case")
    } else {
        response.redirect("/provider/form/question2-case")
    }
})

//Alternative quotes question (Section3)
router.post('/question3-alt-quotes', function(request, response) {

    var altQuote = request.session.data['alt-quotes-q']
    if (altQuote == "no"){
        response.redirect("/provider/form/task-list?question3-alt-quotes=complete")
    } else {
        response.redirect("/provider/form/question3-alt-quote-details")
    }
})

//Additional items summary (Section3)
router.post('/question3-quote-add', function(request, response) {

    var expendAdd = request.session.data['quote-add-other']
    if (expendAdd == "No"){
        response.redirect("/provider/form//question3-quote-summary")
    } else {
        response.redirect("/provider/form/question3-quote-add?add-cost=2&show-add=2")
    }
})


