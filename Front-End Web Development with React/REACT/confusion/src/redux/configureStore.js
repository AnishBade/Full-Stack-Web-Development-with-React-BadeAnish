import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Leaders} from './leaders';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Comments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}