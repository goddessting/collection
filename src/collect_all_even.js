'use strict';
function buildEvenCollection(collection, evenCollection){
  collection.forEach(function(evenElement){
    if(evenElement % 2 === 0){
        evenCollection.push(evenElement);
    }
  });
}

function collect_all_even(collection) {
  var evenCollection = [];
  buildEvenCollection(collection, evenCollection);

  return evenCollection;
}

module.exports = collect_all_even;
