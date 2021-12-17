const { threeNPlusOne } = require('./threeNPlusOne.js') 

class Cohort {
    config = null
    tooDeep = []
    newBestStoppingTimes = []
    longestStoppingTime = {
        testNumber: null,
        stoppingTime: null
    }

    constructor(config) {
        this.config = config;
    }

    handleDeepNumber = n => {
        console.log(`depth limit reached for test number:${n}`);
        tooDeep.push(n);
    }

    executeTest = testNumber => {
        const hailstones = threeNPlusOne(testNumber, this.config.depth);
        const lastThree = hailstones.slice(hailstones.length - 3);
        const result = lastThree === [4, 2, 1];
        const stoppingTime = hailstones.length;
        return {testNumber, result, stoppingTime, hailstones};
    }

    printResult = result => {
        const {testNumber, stoppingTime, hailstones} = result;
        console.log("-----------------------------");
        console.log(`Test Number: ${testNumber} had the longest stopping time of: ${stoppingTime}`);
        console.log("-----------------------------");
        console.log("It's hailstones were:");
        console.log(hailstones);
        console.log(`There were ${this.tooDeep.length} test numbers exceeding the specified depth of: ${this.config.MAX_DEPTH}`);
        if(this.tooDeep.length > 0){
            console.log(`They were: ${this.tooDeep}`);
        }
    }

    run = () => {
        const {START_NUM, END_NUM, MAX_DEPTH, VERBOSE} = this.config;

        let n = START_NUM;
        while(n <= END_NUM) {
            const {testNumber, result, stoppingTime, hailstones} = this.executeTest(n, MAX_DEPTH);

            if(VERBOSE) {
                console.log(`Number: ${testNumber}, Result: ${result}, stopped in: ${stoppingTime} operations.`);
            }

            if(stoppingTime > this.longestStoppingTime.stoppingTime) {
                console.log(`[NEW BEST] Number: ${testNumber}, Result: ${result}, stopped in: ${stoppingTime} operations.`);
                this.newBestStoppingTimes.push(stoppingTime);
                this.longestStoppingTime.stoppingTime = stoppingTime;
                this.longestStoppingTime.testNumber = testNumber;
                this.longestStoppingTime.hailstones = hailstones;
            }
            n++;
        }
        this.printResult(this.longestStoppingTime);
    }
}

module.exports = Cohort;