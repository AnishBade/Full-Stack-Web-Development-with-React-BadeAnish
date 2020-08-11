import {createStore,combineReducers} from 'redux';
import {Leaders} from './leaders';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Comments} from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        })
    );

    return store;
}