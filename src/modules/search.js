import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilters } from "./filters";
import { debounce } from "./helpers";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");

  const debounceSearch = debounce(() => {});

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value;
    getData(value).then((data) => {
      renderGoods(searchFilters(data, value));
    });
  });
};
export default search;
