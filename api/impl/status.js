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
const ns = base_1.DemoApi_V1.Status;
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
                    return new ns.GetResult200({ status: '200 OK!' });
            }
            result.data = `HTTP STATUS CODE: <b>${result.status}</b>`;
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEyQixTQUczQixDQUFDLENBSG1DO0FBR3BDLE1BQU0sRUFBRSxHQUFHLGlCQUFVLENBQUMsTUFBTSxDQUFDO0FBRTdCOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVqRDs7O09BR0c7SUFDRyxHQUFHLENBQ1IsV0FFQzs7WUFFRCxJQUFJLE1BQThDLENBQUM7WUFFbkQsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssR0FBRztvQkFDUCxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUCxLQUFLLEdBQUc7b0JBQ1AsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1AsS0FBSyxHQUFHO29CQUNQLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsS0FBSyxDQUFDO2dCQUNQLEtBQUssR0FBRztvQkFDUCxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUCxLQUFLLEdBQUc7b0JBQ1AsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1A7b0JBQ0MsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLHdCQUF3QixNQUFNLENBQUMsTUFBTSxNQUFNLENBQUM7WUFFMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtBQUNGLENBQUM7QUFyQ1ksa0JBQVUsYUFxQ3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpX1YxIH0gZnJvbSAnLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlfVjEuU3RhdHVzO1xuXG4vKiogXG4qIFVybDogL3N0YXR1c1xuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIHwgR2V0UmVzdWx0MjAyIHwgR2V0UmVzdWx0NDAxIHwgR2V0UmVzdWx0NDA0IHwgR2V0UmVzdWx0NTAwIHwgR2V0UmVzdWx0NTA1IH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoXG5cdFx0cXVlcnlTdHJpbmc6IHtcblx0XHRcdGRlc2lyZWRTdGF0dXM6IG51bWJlcjtcblx0XHR9XG5cdCkge1xuXHRcdGxldCByZXN1bHQ6IERlbW9BcGlfVjEuQmFzZUNvbnRyb2xsZXJSZXNwb25zZTxhbnk+O1xuXG5cdFx0c3dpdGNoIChxdWVyeVN0cmluZy5kZXNpcmVkU3RhdHVzKSB7XG5cdFx0XHRjYXNlIDIwMjpcblx0XHRcdFx0cmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDAxOlxuXHRcdFx0XHRyZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0NDAxKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MDQ6XG5cdFx0XHRcdHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQ0MDQoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDUwMDpcblx0XHRcdFx0cmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDUwMCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNTA1OlxuXHRcdFx0XHRyZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0NTA1KCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG5ldyBucy5HZXRSZXN1bHQyMDAoeyBzdGF0dXM6ICcyMDAgT0shJyB9KTtcblx0XHR9XG5cblx0XHRyZXN1bHQuZGF0YSA9IGBIVFRQIFNUQVRVUyBDT0RFOiA8Yj4ke3Jlc3VsdC5zdGF0dXN9PC9iPmA7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=