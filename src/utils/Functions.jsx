import { useLocation } from "react-router-dom";

function getData(setState, id) {
  fetch("../logements.json")
    .then((response) => response.json())
    .then((data) => {
      let itemData = data;
      if (id) {
        itemData = data.find((el) => el.id === id);
      }
      setState((init) => (init = itemData));
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
}

function GetPath() {
  const location = useLocation();
  const pathname = location.pathname;
  return pathname;
}

export { getData, GetPath };
