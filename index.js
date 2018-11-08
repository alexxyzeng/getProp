const getProperty = (object, property) => {
  if (isInvalid(object) || typeof object !== 'object') { 
    return object
  }

  if (typeof property === 'number') { return object[property] }
  if (typeof property !== 'string' || property === '') { return object }
  const propList = property.split('.');
  return propList.reduce((obj, prop) => {
    return obj && obj[prop]
  }, object)
}


function isInvalid(obj) {
  return obj === undefined || obj === null;
}

export const getProp = (object, property, defaultValue) => {
  if (isInvalid(defaultValue)) { return getProperty(object, property) };
  return getProperty(object, property) || defaultValue
}