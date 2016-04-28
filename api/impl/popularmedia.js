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
const ns = base_1.DemoApi_V1.Popularmedia;
/**
* Url: /popularmedia
*
*/
class Controller extends ns.AbstractHandler {
    /**
    * Get a list of what media is most popular at the moment.
    * @returns { GetResult200 | GetResult503 } instances
    */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new ns.GetResult200();
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhcm1lZGlhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9wdWxhcm1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUF5QixTQUd6QixDQUFDLENBSGlDO0FBR2xDLE1BQU0sRUFBRSxHQUFHLGlCQUFVLENBQUMsWUFBWSxDQUFDO0FBRW5DOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVqRDs7O01BR0U7SUFDSSxHQUFHOztZQUNSLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBVlksa0JBQVUsYUFVdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVtb0FwaV9WMX0gZnJvbSAnLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlfVjEuUG9wdWxhcm1lZGlhO1xuXG4vKiogXG4qIFVybDogL3BvcHVsYXJtZWRpYVxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqXG5cdCogR2V0IGEgbGlzdCBvZiB3aGF0IG1lZGlhIGlzIG1vc3QgcG9wdWxhciBhdCB0aGUgbW9tZW50LlxuXHQqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIHwgR2V0UmVzdWx0NTAzIH0gaW5zdGFuY2VzXG5cdCovXG5cdGFzeW5jIGdldCgpIHtcblx0XHRsZXQgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMCgpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiJdfQ==