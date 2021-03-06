const shuffle = (arr) => {
    const _array = arr.slice(0)
    for (let i = 0; i < arr.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}

export const initializeDeck = () => {
  let id = 0;
  const cards = [
    "react",
    "google",
    "redux",
    "vue",
    "angular",
    "javascript",
    "ruby",
    "rails",
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type,
    });
    acc.push({
      id: id++,
      type,
    });
    return acc;
  }, []);
  return shuffle(cards);
};
