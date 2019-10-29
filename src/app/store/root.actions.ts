import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export const enum ActionTypes {

    SUCCESS_RESPONSE = "[UI] Success response",
    GET_PAGE_CONTENT = "[API] [CONTENT] Get page content",
    API_CALL_SUCCESS = "[API] Api call resolved successfully",
    API_CALL_FAILED = "[API] Api call failed"

}

export class SuccessResponseAction{
    readonly type: string = ActionTypes.SUCCESS_RESPONSE;
    constructor( public payload: any ){ }
}

export class ApiCallSuccessAction{
    readonly type: string = ActionTypes.API_CALL_SUCCESS;
    constructor( public payload: HttpResponse<any> ){ }
}

export class ApiCallFailedAction{
    readonly type: string = ActionTypes.API_CALL_FAILED;
    constructor( public payload: HttpErrorResponse ){ }
}

export class GetPageContentAction{
    readonly type: string = ActionTypes.GET_PAGE_CONTENT;
    constructor( public payload: any ){ }
}

export type Actions = SuccessResponseAction | GetPageContentAction | ApiCallSuccessAction |
ApiCallFailedAction;