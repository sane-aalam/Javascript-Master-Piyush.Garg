/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // promise need to resolve 
    // The goal is to create a function that pauses execution for a specified number of milliseconds before resolving
    return new Promise(function(resolve,reject){
        setTimeout(resolve,millis);
    })
}

// short ways 
// new Promise((resolve)=> setTimout(resolve,millis));

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */