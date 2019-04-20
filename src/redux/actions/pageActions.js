import Store from '../configureStore';

const changeOnglet = (name) => {
  const action = { type: 'PAGE_ONGLET', value: name };
  Store.dispatch(action);
};

const changeSubOnglet = (name) => {
  const action = { type: 'PAGE_SUBONGLET', value: name };
  Store.dispatch(action);
};

export { changeOnglet, changeSubOnglet };
