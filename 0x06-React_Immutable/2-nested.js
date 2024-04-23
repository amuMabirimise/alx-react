const { fromJS } = require('immutable');

function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}

module.exports = accessImmutableObject;
