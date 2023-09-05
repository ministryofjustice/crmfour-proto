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
    if (eligibility == "yes"){
        response.redirect("/provider/form/question-ufn")
    } else {
        response.redirect("/provider/form/question1-ineligible")
    }
})

//Additional expenditures (Section3)
router.post('/question3-expend', function(request, response) {

    var additional = request.session.data['add-expend-question']
    if (additional == "yes"){
        response.redirect("/provider/form/task-list?question3-expend=complete")
    } else {
        response.redirect("/provider/form/question3-additional")
    }
})


