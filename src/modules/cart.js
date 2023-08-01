const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");

  const openCart = () => {
    cartModal.style.display = "flex";
    console.log("open");
  };

  const closeCart = () => {
    cartModal.style.display = "";
    console.log("open");
  };

  // cartBtn.onclick = function () {
  //   openCart();
  //   console.log("clicked");
  // };

  cartBtn.addEventListener("click", openCart);

  //cartCloseBtn.onclick = closeCart; // присваиваем функцию без ее вызова  т.е без ()

  cartCloseBtn.addEventListener("click", closeCart);

  console.log(cartModal);
};

export default cart;
