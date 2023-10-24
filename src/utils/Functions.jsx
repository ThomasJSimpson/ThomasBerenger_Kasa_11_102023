function getData(setState, id) {
  fetch("/logements.json")
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

export { getData };
