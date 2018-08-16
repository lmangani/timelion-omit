var alter = require('../../../src/core_plugins/timelion/server/lib/alter.js')
var Chainable = require('../../../src/core_plugins/timelion/server/lib/classes/chainable')
var _ = require('lodash')

module.exports = new Chainable('omit', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    }
  ],
  help: 'Omit nulls values from series output.',

  fn: function omitFn (args, tlConfig) {

    return alter(args, function (eachSeries) {

      var data = _.filter(eachSeries.data, function(point) {
        return point[1] != null;
      });
      if (data) eachSeries.data = data;

      return eachSeries;
    });
  }

})
