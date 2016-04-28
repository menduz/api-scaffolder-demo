"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const base_1 = require('../../base');
const ns = base_1.DemoApi_V1.Required.Integer;
/**
* Url: /required/integer
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTJCLFlBRzNCLENBQUMsQ0FIc0M7QUFHdkMsTUFBTSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBRXZDOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVqRDs7O09BR0c7SUFDRyxHQUFHLENBQ1IsV0FFQzs7WUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtBQUNGLENBQUM7QUFkWSxrQkFBVSxhQWN0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaV9WMSB9IGZyb20gJy4uLy4uL2Jhc2UnXG5cblxuY29uc3QgbnMgPSBEZW1vQXBpX1YxLlJlcXVpcmVkLkludGVnZXI7XG5cbi8qKiBcbiogVXJsOiAvcmVxdWlyZWQvaW50ZWdlclxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoXG5cdFx0cXVlcnlTdHJpbmc6IHtcblx0XHRcdHBhcmFtOiBudW1iZXI7XG5cdFx0fVxuXHQpIHtcblx0XHRsZXQgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMChxdWVyeVN0cmluZyk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIl19