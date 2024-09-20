const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/latest-nsm')

const version = 'latest-nsm'


//Additional work item second time (CRM7) version 1 from review
router.post('/add-work-item-final1', function(request, response) {

    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item")
    }
  })
  
  //Adding work items Option 1 - 1 item
  router.post('/review-all-work-1items1', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item?add1=2")
    }
  })
  
  //Adding work items Option 1 - 2 items
  router.post('/review-all-work-2items1', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item?add1=3")
    }
  })
  
  //Adding work items Option 1 - 3 items
  router.post('/review-all-work-3items1', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item?add1=4")
    }
  })
  
  //Adding work items Option 1 - 4 plus items
  router.post('/review-all-work-4items1', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/check-payment-claim")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item?add1=4")
    }
  })

  //Additional work item second time (CRM7) version 1 from review
    router.post('/add-work-item-final2', function(request, response) {

        var addAnother = request.session.data['add-another']
        if (addAnother == "No"){
            response.redirect('/' + version + "/provider/form/")
        } 
        if (addAnother == "Yes"){
            response.redirect('/' + version + "/provider/form/add-work-item2")
        }
    })
  
//Adding work items Option 2 - 1 item
router.post('/review-all-work-1items2', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/review-all-work-items2")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item2?add2=2")
    }
})
  
  //Adding work items Option 2 - 2 items
  router.post('/review-all-work-2items2', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/review-all-work-items2")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item2?add2=3")
    }
  })
  
  //Adding work items Option 2 - 3 items
  router.post('/review-all-work-3items2', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/review-all-work-items2")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item2?add2=4")
    }
  })
  
  //Adding work items Option 2 - 4 plus items
  router.post('/review-all-work-4items2', function(request, response) {
  
    var addAnother = request.session.data['add-another']
    if (addAnother == "No"){
        response.redirect('/' + version + "/provider/form/review-all-work-items2")
    } 
    if (addAnother == "Yes"){
        response.redirect('/' + version + "/provider/form/add-work-item2?add2=4")
    }
  })

//Create a new claim
router.post('/question-claimType', function(request, response) {

    var claimType = request.session.data['claimType']
    if (claimType == "Breach of injunction"){
        response.redirect('/' + version + "/provider/form/task-list?question-claimType=complete&stage=PROG")
    } 
    if (claimType == "Non-standard magistrates' court payment"){
        response.redirect('/' + version + "/provider/form/question-stageProvider?question-claimType=complete")
    }
    if (claimType == "Supplemental claim"){
        response.redirect('/' + version + "/provider/form/supplemental")
    }
})

//Create a new claim
router.post('/change-claimType', function(request, response) {

    var claimType = request.session.data['claimType']
    if (claimType == "Breach of injunction"){
        response.redirect('/' + version + "/provider/form/check-answers?question-claimType=complete&stage=PROG")
    } 
    if (claimType == "Non-standard magistrates' court payment"){
        response.redirect('/' + version + "/provider/form/question-stageProvider?question-claimType=complete")
    }
})

//Designated provider
router.post('/question-stageProvider', function(request, response) {

    var stageProvider = request.session.data['stageProvider']
    if (stageProvider == "No"){
        response.redirect('/' + version + "/provider/form/task-list?question-stage=complete&stage=PROM")
    } 
    if (stageProvider == "Yes"){
        response.redirect('/' + version + "/provider/form/question-stageCourt")
    }
})

//Designated provider
router.post('/change-stageProvider', function(request, response) {

    var stageProvider = request.session.data['stageProvider']
    if (stageProvider == "No"){
        response.redirect('/' + version + "/provider/form/check-answers?question-stage=complete&stage=PROM")
    } 
    if (stageProvider == "Yes"){
        response.redirect('/' + version + "/provider/form/question-stageCourt")
    }
})

//Designated court
router.post('/question-stageCourt', function(request, response) {

    var stageCourt = request.session.data['stageCourt']
    
    if (stageCourt == "No") {
        response.redirect('/' + version + "/provider/form/question-stageTrans")
    } 
    else {
        response.redirect('/' + version + "/provider/form/task-list?question-stage=complete&stage=PROG")
    }
})

//Designated court
router.post('/change-stageCourt', function(request, response) {

    var stageCourt = request.session.data['stageCourt']
    
    if (stageCourt == "No") {
        response.redirect('/' + version + "/provider/form/question-stageTrans")
    } 
    else {
        response.redirect('/' + version + "/provider/form/task-list?question-stage=complete&stage=PROG")
    }
})

//Transfered court
router.post('/question-stageTrans', function(request, response) {

    var stageTrans = request.session.data['stageTrans']
    
    if (stageTrans == "Yes") {
        response.redirect('/' + version + "/provider/form/task-list?question-stage=complete&stage=PROG")
    } 
    else {
        response.redirect('/' + version + "/provider/form/task-list?question-stage=complete&stage=PROM")
    }
})

//Transfered court
router.post('/change-stageTrans', function(request, response) {

    var stageTrans = request.session.data['stageTrans']
    
    if (stageTrans == "Yes") {
        response.redirect('/' + version + "/provider/form/check-answers?question-stage=complete&stage=PROG")
    } 
    else {
        response.redirect('/' + version + "/provider/form/check-answers?question-stage=complete&stage=PROM")
    }
})
