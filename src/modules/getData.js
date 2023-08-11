const getData = (str) => {
  return fetch(
    // `https://ozon-on-js-default-rtdb.firebaseio.com/goods.json?${
    //   str ? `search${str}` : ""
    // }`
    `https://ozon-on-js-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
