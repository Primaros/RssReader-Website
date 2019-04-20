
const initialStateIngredients = { onglet: 'Home', subOnglet: 'All' };

function page(state = initialStateIngredients, action) {
  const nextState = {
    ...state,
  };
  switch (action.type) {
    case 'PAGE_ONGLET':
      nextState.onglet = action.value;
      break;
    case 'PAGE_SUBONGLET':
      nextState.subOnglet = action.value;
      break;
    default:
      return state;
  }
  return nextState;
}

export default page;
