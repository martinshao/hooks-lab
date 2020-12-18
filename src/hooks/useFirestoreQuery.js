import {useEffect, useReducer} from 'react';
import useMemoCompare from './useMemoCompare';

const initialState = {
  status: undefined,
  data: undefined,
  error: undefined,
};

// action types
const IDLE_TYPE = 'idle';
const ERROR_TYPE = 'error';
const SUCCESS_TYPE = 'success';
const LOADING_TYPE = 'loading';

// action creators
const setIdle = () => ({type: IDLE_TYPE});
const setLoading = () => ({type: LOADING_TYPE});
const setSuccess = (data) => ({type: SUCCESS_TYPE, payload: data});
const setError = (error) => ({type: ERROR_TYPE, payload: error});

// const reducer = (state, action) => {
const reducer = (state, {type, payload}) => {
  switch (type) {
    case IDLE_TYPE:
      return {...initialState, status: IDLE_TYPE};
    case LOADING_TYPE:
      return {...initialState, status: LOADING_TYPE};
    case SUCCESS_TYPE:
      return {...initialState, status: SUCCESS_TYPE, data: payload};
    case ERROR_TYPE:
      return {...initialState, status: ERROR_TYPE, error: payload};
    default:
      throw new Error('invalid action');
  }
};

const isLoading = (query) => (query ? LOADING_TYPE : IDLE_TYPE);

function useFirestoreQuery(query) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    status: isLoading(query),
  });

  const queryCached = useMemoCompare(query, (preQuery) => {
    return preQuery && query && query.isEqual(preQuery);
  });

  useEffect(() => {
    if (!queryCached) {
      dispatch(setIdle());
      return;
    }

    dispatch(setLoading());

    return queryCached.onSnapshot(
      (response) => {
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response);
        dispatch(setSuccess(data));
      },
      (error) => {
        dispatch(setError(error));
      }
    );
  }, [queryCached]);

  return state;
}

function getDocData(doc) {
  return doc.exists === true ? {id: doc.id, ...doc.data()} : null;
}

function getCollectionData(collection) {
  return collection.docs.map(getDocData);
}

export default useFirestoreQuery;
