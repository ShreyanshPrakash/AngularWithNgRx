
export const enum ActionTypes {

    SUCCESS_RESPONSE = "[UI] Success response"

}

export class SuccessResponseAction{
    readonly type: string = ActionTypes.SUCCESS_RESPONSE;
    constructor( public payload: any ){ }
}

export type Actions = SuccessResponseAction;