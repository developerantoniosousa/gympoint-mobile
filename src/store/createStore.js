import { createStore, applyMiddleware, compose } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = __DEV__
    ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
    : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer);
}
