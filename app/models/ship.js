var Ship = function () {

  this.defineProperties({
      position: {type: 'object'}
    , bearing: {type: 'number'}
    , speed: {type: 'number'}
    , vector: {type: 'object'}
    , location: {type: 'object'}
    , shipType: {type: 'string'}
    , mass: {type: 'number'}
  });

  this.hasMany('Engines');
  this.hasMany('Bays');
  this.hasMany('Bridges');
  this.hasMany('Reactors');
  this.hasMany('Tanks');

};

Ship.generate = function () {



}

exports.Ship = Ship;