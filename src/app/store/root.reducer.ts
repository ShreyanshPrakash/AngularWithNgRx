import { InitialStateModel, ErrorModel, SuccessModel } from '../models/initialState.model';
import { Actions, ActionTypes } from './root.actions';


export const rootReducer = (state = new InitialStateModel(), action: Actions) => {

    switch (action.type) {

        case ActionTypes.API_CALL_SUCCESS:
            return {
                ...state,
                uiState: {
                    isPageLoading: false,
                    error: new ErrorModel(),
                    success: {
                        isSuccess: true,
                        successMessage: action.payload.successMessage,
                        successResponse: action.payload
                    }
                }
            }

        case ActionTypes.API_CALL_FAILED:
            return {
                ...state,
                isPageLoading: false,
                uiState: {
                    success: new SuccessModel(),
                    error: {
                        hasError: true,
                        errorMessage: action.payload.erorMessage,
                        errorResponse: action.payload
                    }
                }
            }

        case ActionTypes.GET_PAGE_CONTENT:
            return {
                ...state,
                uiState: {
                    error: new ErrorModel(),
                    success: new SuccessModel(),
                    isPageLoading: true
                }
            }

        default:
            return {
                ...state
            }

    }

}
