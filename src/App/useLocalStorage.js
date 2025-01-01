import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItems = [];
  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = [];
  }
  if (localStorageItems) {
    parsedItems = JSON.parse(localStorageItems) || [];
  }

  const [items, setItems] = useState(parsedItems);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return [items, saveItems];
}

export { useLocalStorage };
