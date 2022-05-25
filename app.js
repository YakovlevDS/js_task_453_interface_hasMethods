// solution 1

// const isSantaClausable=obj=>
//    ["sayHoHoHo", "distributeGifts", "goDownTheChimney"]
//      .every(item=>typeof obj[item] == "function")

// solution 2

const isSantaClausable = (obj) =>
  "function" ==
  typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
// ==================================

var santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

var notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },
  // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE

console.log(isSantaClausable(santa));
isSantaClausable(notSanta);

console.log(isSantaClausable(notSanta));
