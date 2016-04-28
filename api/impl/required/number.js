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
const ns = base_1.DemoApi_V1.Required.Number;
/**
* Url: /required/number
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEyQixZQUczQixDQUFDLENBSHNDO0FBR3ZDLE1BQU0sRUFBRSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUV0Qzs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRyxDQUNSLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBZFksa0JBQVUsYUFjdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlfVjEgfSBmcm9tICcuLi8uLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaV9WMS5SZXF1aXJlZC5OdW1iZXI7XG5cbi8qKiBcbiogVXJsOiAvcmVxdWlyZWQvbnVtYmVyXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuXHQvKiogXG5cdCAqIEdldCBcblx0ICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcblx0ICovXG5cdGFzeW5jIGdldChcblx0XHRxdWVyeVN0cmluZzoge1xuXHRcdFx0cGFyYW06IG51bWJlcjtcblx0XHR9XG5cdCkge1xuXHRcdGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHF1ZXJ5U3RyaW5nKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=