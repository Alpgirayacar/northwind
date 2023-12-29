import { ResponseModel } from "./responseModel";
import { Category} from "./category"
export interface ategoryResponseModel extends ResponseModel{

    data:Category[];
}