
// Gets the approximate memory used (in Mb)
const approxTotalMemory = () => {
    return process.memoryUsage().rss / 1024 / 1024
}

console.log('Base: ', approxTotalMemory())

TIME_TO_WAIT=10000

setTimeout(() => {

    console.log('Later: ', approxTotalMemory())

}, TIME_TO_WAIT)

/**
 *   Results:
 * 
 *   When TIME_TO_WAIT=3000 
 * 
 *     Base:  17.4609375
 *     Later:  18.8203125
 * 
 *   When TIME_TO_WAIT=10000 
 * 
 *     Base:  17.3984375
 *     Later:  17.43359375
 * 
 */

