"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const base_1 = require('../base');
const ns = base_1.DemoApiV1.Status;
/**
* Url: /status
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 | GetResult202 | GetResult401 | GetResult404 | GetResult500 | GetResult505 } instances
     */
    get(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            switch (queryString.desiredStatus) {
                case 202:
                    result = new ns.GetResult202();
                    break;
                case 401:
                    result = new ns.GetResult401();
                    break;
                case 404:
                    result = new ns.GetResult404();
                    break;
                case 500:
                    result = new ns.GetResult500();
                    break;
                case 505:
                    result = new ns.GetResult505();
                    break;
                default:
                    result = new ns.GetResult200();
            }
            result.data = `HTTP STATUS CODE: <b>${result.status}</b><pre>` + JSON.stringify(queryString, null, 2) + '</pre><pre>' + JSON.stringify(this.currentContext.request.params, null, 2) + '</pre>';
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEwQixTQUcxQixDQUFDLENBSGtDO0FBR25DLE1BQU0sRUFBRSxHQUFHLGdCQUFTLENBQUMsTUFBTSxDQUFDO0FBRTVCOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVoRDs7O09BR0c7SUFDRyxHQUFHLENBQ1AsV0FFQzs7WUFFRCxJQUFJLE1BQW1DLENBQUM7WUFFeEMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssR0FBRztvQkFDTixNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsS0FBSyxDQUFDO2dCQUNSLEtBQUssR0FBRztvQkFDTixNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1I7b0JBQ0UsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25DLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLHdCQUF3QixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBRS9MLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQXJDWSxrQkFBVSxhQXFDdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlWMSB9IGZyb20gJy4uL2Jhc2UnXG5cblxuY29uc3QgbnMgPSBEZW1vQXBpVjEuU3RhdHVzO1xuXG4vKiogXG4qIFVybDogL3N0YXR1c1xuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cbiAgLyoqIFxuICAgKiBHZXQgXG4gICAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIHwgR2V0UmVzdWx0MjAyIHwgR2V0UmVzdWx0NDAxIHwgR2V0UmVzdWx0NDA0IHwgR2V0UmVzdWx0NTAwIHwgR2V0UmVzdWx0NTA1IH0gaW5zdGFuY2VzXG4gICAqL1xuICBhc3luYyBnZXQoXG4gICAgcXVlcnlTdHJpbmc6IHtcbiAgICAgIGRlc2lyZWRTdGF0dXM6IG51bWJlcjtcbiAgICB9XG4gICkge1xuICAgIGxldCByZXN1bHQ6IERlbW9BcGlWMS5TdGF0dXMuR2V0UmVzdWx0cztcblxuICAgIHN3aXRjaCAocXVlcnlTdHJpbmcuZGVzaXJlZFN0YXR1cykge1xuICAgICAgY2FzZSAyMDI6XG4gICAgICAgIHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwMTpcbiAgICAgICAgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDQwMSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0NDA0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1MDA6XG4gICAgICAgIHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQ1MDAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwNTpcbiAgICAgICAgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDUwNSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAoKTtcbiAgICB9XG5cbiAgICByZXN1bHQuZGF0YSA9IGBIVFRQIFNUQVRVUyBDT0RFOiA8Yj4ke3Jlc3VsdC5zdGF0dXN9PC9iPjxwcmU+YCArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5U3RyaW5nLCBudWxsLCAyKSArICc8L3ByZT48cHJlPicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRDb250ZXh0LnJlcXVlc3QucGFyYW1zLCBudWxsLCAyKSArICc8L3ByZT4nO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cbiJdfQ==