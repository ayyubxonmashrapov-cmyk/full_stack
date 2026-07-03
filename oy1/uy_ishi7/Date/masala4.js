const ONEDAY = 24 * 60 * 60 * 1000;

(function(){
    const now = Date.now()

    console.log(new Date(now + 100 * ONEDAY))
}())