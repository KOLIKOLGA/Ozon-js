import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilters } from "./filters";

const catalog = () => {
  const buttonCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItem = document.querySelectorAll(".catalog li");

  let isOpen = false;

  buttonCatalog.addEventListener("click", () => {
    isOpen = !isOpen;

    console.log("catalog");
    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });

  catalogModalItem.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;
      getData().then((data) => {
        renderGoods(categoryFilters(data, text));
      });
    });
  });
};

export default catalog;
