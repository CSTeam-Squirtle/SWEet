// import actionType constants
import * as types from '../constants/actionTypes';

export const addMarketCard = marketId => ({
  type: types.ADD_MARKET_CARD,
  payload: marketId,
});

// add more action creators

export const addCardToMarket = cards => ({
  type: types.ADD_CARD_VALUE,
  payload: cards += 1,
});

export const addPercentage = percent => ({
  type: types.ADD_CARD_PERCENT,
  payload: percent,
});

