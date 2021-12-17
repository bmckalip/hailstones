const testNumbersOfInterest = [];

const threeNPlusOne = (n, depth =-1) => {
	const hailstoneNumbers = [];
	while(n > 1) {
		hailstoneNumbers.push(n);

        //handle numbers that exceed the requested depth of analysis
        if(depth !== -1 && hailstoneNumbers.length >= depth){
            console.log(`depth limit reached for test number:${n}`);
            testNumbersOfInterest.push(n);
            break;
        }

        //handle base case
        if(hailstoneNumbers.length >= 3){
            const lastThree = hailstoneNumbers.slice(hailstoneNumbers.length - 3);
            if(lastThree === [4, 2, 1]){
                break;
            }
        }

        //apply the operation to the number
		if(n % 2 == 0){
            n /= 2;
		} else {
			n = (n * 3) + 1;
		}
	}
	return hailstoneNumbers;
}

const runTest = (testNumber, depth) => {
	const hailstones = threeNPlusOne(testNumber, depth);
	const lastThree = hailstones.slice(hailstones.length - 3);
	const result = lastThree === [4, 2, 1];
	const stoppingTime = hailstones.length;
	
    return {testNumber, result, stoppingTime, hailstones}
}

const displayResults = (longestStoppingTime) => {
    const {testNumber, stoppingTime, hailstones} = longestStoppingTime;
    console.log("-----------------------------");
    console.log(`Test Number: ${testNumber} had the longest stopping time of: ${stoppingTime}`);
    console.log("-----------------------------");
    console.log("It's hailstones were:");
    console.log(hailstones);

    console.log(`There were ${testNumbersOfInterest.length} test numbers exceeding the specified depth of: ${MAX_DEPTH}`);
    if(testNumbersOfInterest.length > 0){
        console.log(`They were: ${testNumbersOfInterest}`);
    }
}

const main = () => {
    const newBestStoppingTimes = [];
    const longestStoppingTime = {
        testNumber: null,
        stoppingTime: null
    };

    let n = START_NUM;
    while(n <= END_NUM) {
        const {testNumber, result, stoppingTime, hailstones} = runTest(n, MAX_DEPTH);

        if(VERBOSE) {
            console.log(`Number: ${testNumber}, Result: ${result}, stopped in: ${stoppingTime} operations.`);
        }

        if(stoppingTime > longestStoppingTime.stoppingTime) {
            console.log(`[NEW BEST] Number: ${testNumber}, Result: ${result}, stopped in: ${stoppingTime} operations.`);
            newBestStoppingTimes.push(stoppingTime);
            longestStoppingTime.stoppingTime = stoppingTime;
            longestStoppingTime.testNumber = testNumber;
            longestStoppingTime.hailstones = hailstones;
        }
        n++;
    }

    displayResults(longestStoppingTime);
}

const VERBOSE = false;
const MAX_DEPTH = 1000;
const START_NUM = 100000000;
const END_NUM = 1000000000;
main();

/*
inspiration for this program:
https://www.youtube.com/watch?v=094y1Z2wpJg

largest find to date:

30m - 100m cohort: Test Number: 63728127 had the longest stopping time of: 949
100m - 1B cohort:
*/
