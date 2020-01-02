import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        const { id } = action.payload;
        draft.loading = false;
        draft.signed = true;
        draft.id = id;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
