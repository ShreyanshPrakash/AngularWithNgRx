import { InitialStateModel, UIStateModel, ErrorModel } from '../models/initialState.model';
import { Actions, ActionTypes } from './root.actions';


export const rootReducer = ( state = new InitialStateModel(), action: Actions ) => {

    switch( action.type ){

        case ActionTypes.SUCCESS_RESPONSE:
            return{
                ...state,
                uiState: {
                    error: new ErrorModel(),
                    success : {
                        isSuccess: true,
                        ...action.payload
                    }
                }
            }
    }

}
