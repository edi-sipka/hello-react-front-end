import axios from 'axios';

const LOADING = 'LOADING';
const SHOW_GREETING = 'SHOW_GREETING';

const initialState = {
  loading: false,
  greetings: [],
};

const messageReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case SHOW_GREETING:
      return {
        loading: false,
        greetings: payload,
      };

    default:
      return state;
  }
};

export const setLoading = () => ({
  type: LOADING,
});

export const showGreetings = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axios.get(
      'http://localhost:3000/api/messages',
      config,
    );
    dispatch({
      type: SHOW_GREETING,
      payload: data[0],
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default messageReducer;
