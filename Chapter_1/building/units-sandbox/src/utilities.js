function strEqual (str1, str2) {
  return str1.localeCompare (str2) === 0;
}

function objEqual (obj1, obj2) {
  return JSON.stringify (obj1) === JSON.stringify (obj2);
}

export {strEqual, objEqual};
