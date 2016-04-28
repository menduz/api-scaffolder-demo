"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const base_1 = require('../../../base');
const ns = base_1.DemoApi_V1.Non.Required.Number;
/**
* Url: /non-required/number
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 } instances
     */
    get(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new ns.GetResult200(queryString);
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEyQixlQUczQixDQUFDLENBSHlDO0FBRzFDLE1BQU0sRUFBRSxHQUFHLGlCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFFMUM7OztFQUdFO0FBQ0YseUJBQWdDLEVBQUUsQ0FBQyxlQUFlO0lBRWpEOzs7T0FHRztJQUNHLEdBQUcsQ0FDUixXQUVDOztZQUVELElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQWRZLGtCQUFVLGFBY3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpX1YxIH0gZnJvbSAnLi4vLi4vLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlfVjEuTm9uLlJlcXVpcmVkLk51bWJlcjtcblxuLyoqIFxuKiBVcmw6IC9ub24tcmVxdWlyZWQvbnVtYmVyXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuXHQvKiogXG5cdCAqIEdldCBcblx0ICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcblx0ICovXG5cdGFzeW5jIGdldChcblx0XHRxdWVyeVN0cmluZzoge1xuXHRcdFx0cGFyYW0/OiBudW1iZXI7XG5cdFx0fVxuXHQpIHtcblx0XHRsZXQgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMChxdWVyeVN0cmluZyk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIl19