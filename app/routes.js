//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const formData = require('./data/form_data')

// Include other version routes files
require('./routes/latest-nsm.js')
require('./routes/latest-pa.js')
require('./routes/latest-portal.js')
require('./routes/pa-1-0.js')
require('./routes/pa-1-1.js')
require('./routes/pa-1-2.js')
require('./routes/nsm-0-1.js')
require('./routes/nsm-1-0.js')
require('./routes/nsm-1-1.js')
require('./routes/nsm-1-2.js')
require('./routes/nsm-1-3.js')
require('./routes/nsm-1-4.js')
