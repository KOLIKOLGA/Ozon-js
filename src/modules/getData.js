const getData = () => {
  return fetch(
    "https://ozon-on-js-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
