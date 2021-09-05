export function manageFriends(state = { friends: [] }, action){
    switch(state, action) {
        case "ADD_FRIEND":
          return { ...state, friends: [...state.friends, action.friend] };
        case "REMOVE_FRIEND":
          return state.friends.filter(friend => (friend.id !== action.friend.id));
        default:
          return state
    }
}
