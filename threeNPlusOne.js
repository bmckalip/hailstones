module.exports = {
    threeNPlusOne: (n, depth =-1, handleDeepNumber=()=>{}) => {
        const hailstones = [];
        while(n > 1) {
            hailstones.push(n);
    
            //handle numbers that exceed the requested depth of analysis
            if(depth !== -1 && hailstones.length >= depth){
                handleDeepNumber(n);
                break;
            }
    
            //handle base case
            if(hailstones.length >= 3){
                const lastThree = hailstones.slice(hailstones.length - 3);
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
        return hailstones;
    }
}