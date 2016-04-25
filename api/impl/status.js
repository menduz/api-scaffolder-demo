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
                    return new ns.GetResult200({ status: '200 OK!' });
            }
            result.data = `HTTP STATUS CODE: <b>${result.status}</b>`;
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEwQixTQUcxQixDQUFDLENBSGtDO0FBR25DLE1BQU0sRUFBRSxHQUFHLGdCQUFTLENBQUMsTUFBTSxDQUFDO0FBRTVCOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVoRDs7O09BR0c7SUFDRyxHQUFHLENBQ1AsV0FFQzs7WUFFRCxJQUFJLE1BQW1DLENBQUM7WUFFeEMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssR0FBRztvQkFDTixNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsS0FBSyxDQUFDO2dCQUNSLEtBQUssR0FBRztvQkFDTixNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLHdCQUF3QixNQUFNLENBQUMsTUFBTSxNQUFNLENBQUM7WUFFMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7QUFDSCxDQUFDO0FBckNZLGtCQUFVLGFBcUN0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaVYxIH0gZnJvbSAnLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlWMS5TdGF0dXM7XG5cbi8qKiBcbiogVXJsOiAvc3RhdHVzXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuICAvKiogXG4gICAqIEdldCBcbiAgICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfCBHZXRSZXN1bHQyMDIgfCBHZXRSZXN1bHQ0MDEgfCBHZXRSZXN1bHQ0MDQgfCBHZXRSZXN1bHQ1MDAgfCBHZXRSZXN1bHQ1MDUgfSBpbnN0YW5jZXNcbiAgICovXG4gIGFzeW5jIGdldChcbiAgICBxdWVyeVN0cmluZzoge1xuICAgICAgZGVzaXJlZFN0YXR1czogbnVtYmVyO1xuICAgIH1cbiAgKSB7XG4gICAgbGV0IHJlc3VsdDogRGVtb0FwaVYxLlN0YXR1cy5HZXRSZXN1bHRzO1xuXG4gICAgc3dpdGNoIChxdWVyeVN0cmluZy5kZXNpcmVkU3RhdHVzKSB7XG4gICAgICBjYXNlIDIwMjpcbiAgICAgICAgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0NDAxKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDQ6XG4gICAgICAgIHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQ0MDQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDUwMCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTA1OlxuICAgICAgICByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0NTA1KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG5ldyBucy5HZXRSZXN1bHQyMDAoeyBzdGF0dXM6ICcyMDAgT0shJyB9KTtcbiAgICB9XG5cbiAgICByZXN1bHQuZGF0YSA9IGBIVFRQIFNUQVRVUyBDT0RFOiA8Yj4ke3Jlc3VsdC5zdGF0dXN9PC9iPmA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuIl19