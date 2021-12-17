export default class Config {
    start = 1
    end = 1000
    depth = 1000
    verbose = false

    constructor(start, end, depth, verbose){
        this.start = start
        this.end = end
        this.depth = depth
        this.verbose = verbose
    }
}