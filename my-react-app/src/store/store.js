// Placeholder store entry for HRnet React
// TODO: remplacer par Context + useReducer ou Redux selon le choix final.

export const initialState = {
  employees: [],
};

export function placeholderDispatch(action) {
  // Ceci est un placeholder : la logique doit être implémentée.
  console.warn("placeholderDispatch called with", action);
}

export default {
  initialState,
  placeholderDispatch,
};
