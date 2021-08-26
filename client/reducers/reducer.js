//  import * as types from "../constants/actionTypes";

//  const initialState = {
//    totalMarkets: 0,
//    totalCards: 0,
//    marketList: [],
//    lastMarketId: 10000,
//    newLocation: "",
//  };
 
//  const marketsReducer = (state = initialState, action) => {
//    let marketList;
//    let marketId;
//    let totalMarkets;
//    let location;
//    let totalCards;
//    let cards;
 
//    switch (action.type) {
//      case types.ADD_MARKET_CARD: {
//        // increment lastMarketId and totalMarkets counters
//          state.lastMarketId += 1;
//          state.totalMarkets += 1;
         
//        // create the new market object from provided data
//        const newMarket = {
//          marketID: lastMarketId,
//          location: action.payload, 
//          cards: state.totalCards
//        };
 
//        // push the new market onto a copy of the market list
//        marketList = state.marketList.slice();
//        marketList.push(newMarket);
 
//        // return updated state
//        return {
//          ...state,
//          marketList,
//          lastMarketId: marketId,
//          totalMarkets,
//          newLocation: "",
//        };
//      }
//      // case types.SET_NEW_LOCATION: 
     
//      case types.ADD_CARD_VALUE: {
//        console.log('Hello World');
//        // increment lastMarketId and totalMarkets counters
//        state.totalCards += 1;
//        state.totalMarkets += 1;
         
//        // create the new market object from provided data
//        const newMarket = {
//          marketID: lastMarketId,
//          location: action.payload, 
//          cards: state.totalCards
//        };
 
//        // push the new market onto a copy of the market list
//        marketList = state.marketList.slice(); 
//        marketList.push(newMarket);
 
//        // return updated state
//        return {
//          ...state,
//          marketList,
//          lastMarketId,
//          totalMarkets,
//          newLocation: '',
//        };
 
//      }
 
//      // case types.DELETE_CARD:
 
//      default: {
//        return state;
//      }
//    }
//  };
 
//  export default marketsReducer;
 