const config = require('./config.js')
const Cohort = require('./cohort.js');

const cohort = new Cohort(config);
cohort.run();