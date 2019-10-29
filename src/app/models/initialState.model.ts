import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export class InitialStateModel{

    uiState: UIStateModel;

    constructor(){
        this.uiState = new UIStateModel();
    }
    
}


export class UIStateModel{

    error: ErrorModel;
    success: SuccessModel;

    constructor(){
        this.error = new ErrorModel();
        this.success = new SuccessModel();
    }

}


export class ErrorModel{

    hasError: boolean;
    erroMessage: string;
    errorResponse: HttpErrorResponse;

    constructor(){
        this.hasError = false;
        this.erroMessage = '';
        this.errorResponse = null;
    }

}

export class SuccessModel{

    isSuccess: boolean;
    successMessage: string;
    successResponse: HttpResponse<any>;

    constructor(){
        this.isSuccess = false;
        this.successMessage = '';
        this.successResponse = null;
    }

}