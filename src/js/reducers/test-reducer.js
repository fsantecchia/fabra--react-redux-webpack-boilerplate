import _ from 'lodash';
import initialState from './initialState';

export default function (state = initialState.testReducer, action) {
    let newState = _.clone(state);
    switch (action.type) {
        case 'TEST_ACTION':
            break;
    }

    return newState;
}
