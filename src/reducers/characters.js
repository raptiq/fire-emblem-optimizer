const initialState = {
  characters : []
};

export function characters(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CHARACTER':
      return {
        ...state,
        characters: [
          ...state.characters.map(character =>
          character.id === action.id ? Object.assign({}, character, { selected: !character.selected }) : character
          )
        ]
      }
    case 'LOAD_CHARACTERS':
      return {
        ...state,
        characters: [...action.characters]
      }
    case 'RESET_SELECTED':
      return {
        ...state,
        characters: [
          ...state.characters.map((character) =>
          Object.assign({}, character, { selected: false}))
        ]
      }
    default:
      return state;
  }
}
