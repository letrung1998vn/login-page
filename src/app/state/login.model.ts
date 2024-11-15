import { HttpStatusCode } from "@angular/common/http";

export interface loginModel{
    message:String|null;
    statusCode: HttpStatusCode|null;
}