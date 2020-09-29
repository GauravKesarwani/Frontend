var HEROES = [{
    id: 11,
    name: 'Mr. Nice'
}, {
    id: 12,
    name: 'Narco'
}, ];

function getHeros() {
    return Promise.resolve(HEROES); // resolved promise
}

function getHerosSlowlyChained() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(" 1) inside setTimeout");
            resolve(2);
        }, 2000);
    }).then(function(value) {
        console.log(" 2) setTimeout resolved");
        console.log(" 2) inside 1st 'then' with value : " + value);
        return getHeros(); //return promise
    });
}

function getHerosSlowlyUnchained() { //not directly chained
    var mainPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(" 1) inside setTimeout");
            resolve(2);
        }, 2000);
    });

    mainPromise.then(function(value) {
        console.log(" 2) setTimeout resolved");
        console.log(" 2) inside 1st 'then' with value : " + value);
        return getHeros(); //return promise

    });

    return mainPromise;
}

//Chained
function getHeroChain() {

    var heroPromise = getHerosSlowlyChained();

    heroPromise.then(function(heroes) {
        console.log(" 3) inside final 'then' with heroes :");
        console.log(heroes);
    });

}
//Un-Chained
function getHeroUnChain() {

    var heroPromise = getHerosSlowlyUnchained();

    heroPromise.then(function(heroes) {
        console.log(" 3) inside final 'then' with heroes :");
        console.log(heroes);
    });

}


// What will be the output of these functions.

//getHeroChain();
//getHeroUnChain();