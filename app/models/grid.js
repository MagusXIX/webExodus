var Grid = function () {

  this.defineProperties({
      position: {type: 'object'}
    , size: {type: 'object'}
  });

  this.hasMany('Stars');
  this.hasMany('Planets');
  this.hasMany('Ships');
  this.hasOne('System');

};

Grid.generate = function (object) {

  var size = [1000000000000, 1000000000000];

  if (object.planetType) {
    var position = geddy.model.Planet.locationFinder(object);
  } else if (object.starType) {
    var position = object.visualPosition
  }

  var gridProperties = {
      position: position
    , size: size
  }

  var grid = geddy.model.Grid.create(gridProperties);

  grid.save(function (err, data) {

    if (object.planetType) {
      grid.addPlanet(object);

      if (object.systemId) {

        geddy.model.System.first({id: object.systemId}, function (system) {
          grid.addSystem(system);
        })

      }

    } else if (object.starType) {
      grid.addStar(object);

      if(object.systemId) {

        geddy.model.System.first({id: object.systemId}, function (system) {
          grid.addSystem(system);
        })

      }

    }

    grid.save(function (err, data) {

      if (err) {
        geddy.log.error(err);
      }

    })

    if (object.planetType) {
      grid.addPlanet(object);

      if (object.systemId) {

        geddy.model.System.first({id: object.systemId}, function (system) {
          grid.addSystem(system);
        })

      }

    } else if (object.starType) {
      grid.addStar(object);

      if(object.systemId) {

        geddy.model.System.first({id: object.systemId}, function (system) {
          grid.addSystem(system);
        })

      }

    }

    grid.save(function (err, data) {

      if (err) {
        geddy.log.error(err);
      }

    })

  })

}

exports.Grid = Grid;

