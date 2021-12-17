import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import Config from './config';
import Cohort from './cohort';

const {start, end, depth, verbose} = yargs(hideBin(process.argv)).argv;

const config = new Config();
if(start) {
    config.start = start;
}

if(end) {
    config.end = end;
}

if(depth) {
    config.depth = depth;
}

if(verbose) {
    config.verbose = verbose;
}

const cohort = new Cohort(config);
cohort.run();