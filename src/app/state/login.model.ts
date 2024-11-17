import { HttpResponseBase, HttpStatusCode } from "@angular/common/http";

export interface loginSuccessModel{
    message: String,
    statusCode: number
}
export interface loginFailModel{
    message: String,
    statusCode: number
}