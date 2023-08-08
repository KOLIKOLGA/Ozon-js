//import getData from "./getData";

const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");

  const openCart = () => {
    cartModal.style.display = "flex";
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };

  // cartBtn.onclick = function () {
  //   openCart();
  //   console.log("clicked");
  // };

  cartBtn.addEventListener("click", openCart);

  //cartCloseBtn.onclick = closeCart; // присваиваем функцию без ее вызова  т.е без ()

  cartCloseBtn.addEventListener("click", closeCart);

  //getData("getData23");//вызов импортируемой функции
};

export default cart;
