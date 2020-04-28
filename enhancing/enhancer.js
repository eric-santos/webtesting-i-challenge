module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item < 20) {
    return { ...item, enhancement: enhancement + 1 };
  } else {
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: durability - 5 };
  } else if (item.enhancement > 15) {
    return { ...item, durability: durability - 10 };
  } else if (item.enhancement > 16) {
    return { ...item, enhancement: enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}
//stretch
function get(item) {
  return { ...item };
}
