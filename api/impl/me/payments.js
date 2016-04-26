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
const ns = base_1.DemoApiV1.Me.Payments;
/**
* Url: /me/payments
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 } instances
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            //  let result = new ns.GetResult200();
            //  return result;
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsWUFHMUIsQ0FBQyxDQUhxQztBQUd0QyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFFakM7OztFQUdFO0FBQ0YseUJBQWdDLEVBQUUsQ0FBQyxlQUFlO0lBRWpEOzs7T0FHRztJQUNHLEdBQUc7O1lBQ1IsdUNBQXVDO1lBQ3ZDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtBQUNGLENBQUM7QUFYWSxrQkFBVSxhQVd0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaVYxIH0gZnJvbSAnLi4vLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlWMS5NZS5QYXltZW50cztcblxuLyoqIFxuKiBVcmw6IC9tZS9wYXltZW50c1xuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoKSB7XG5cdFx0Ly8gIGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKCk7XG5cdFx0Ly8gIHJldHVybiByZXN1bHQ7XG5cdFx0dGhyb3cgbmV3IERlbW9BcGlWMS5IdHRwRXJyb3IuTm90SW1wbGVtZW50ZWQ7XG5cdH1cbn1cbiJdfQ==