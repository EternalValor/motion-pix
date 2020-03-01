const mapReducer = (sourceObj, mapping) => {
  return mapping.reduce((targetObj, mapEl) => {
    if (typeof mapEl[1] === 'string') {
      targetObj[mapEl[1]] = sourceObj[mapEl[0]];
    } else {
      const result = mapEl[1](sourceObj);
      Object.assign(targetObj, result);
    }
    return targetObj;
  }, {});
};

export default function(apiObj, modelMap, modelPrototype) {
  const data = mapReducer(apiObj, modelMap);
  return new modelPrototype(data);
}
