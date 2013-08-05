
var classes = require('classes');


/**
 * Expose `loading`.
 */

module.exports = loading;


/**
 * Allow multiple states, like success, failure, or finish
 * states.
 *
 * @param {Element} el
 * @return {Function}
 */

function loading (el) {
  classes(el).add('loading');
  return {
  	success: function(){
  		classes(el).add('loading-success');
  	},
  	failure: function(){
  		classes(el).add('loading-failure');
  	},
  	finish: function(){
  		classes(el).remove('loading');
  	},
  	reset: function(){
  		classes(el)
  			.remove('loading')
  			.remove('loading-failure')
  			.remove('loading-success');
  	}
  }
}