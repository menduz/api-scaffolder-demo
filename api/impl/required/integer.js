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
const ns = base_1.DemoApiV1.Required.Integer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTBCLFlBRzFCLENBQUMsQ0FIcUM7QUFHdEMsTUFBTSxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBRXRDOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVoRDs7O09BR0c7SUFDRyxHQUFHLENBQ1AsV0FFQzs7WUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7QUFDSCxDQUFDO0FBZFksa0JBQVUsYUFjdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlWMSB9IGZyb20gJy4uLy4uL2Jhc2UnXG5cblxuY29uc3QgbnMgPSBEZW1vQXBpVjEuUmVxdWlyZWQuSW50ZWdlcjtcblxuLyoqIFxuKiBVcmw6IC9yZXF1aXJlZC9pbnRlZ2VyXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuICAvKiogXG4gICAqIEdldCBcbiAgICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcbiAgICovXG4gIGFzeW5jIGdldChcbiAgICBxdWVyeVN0cmluZzoge1xuICAgICAgcGFyYW06IG51bWJlcjtcbiAgICB9XG4gICkge1xuICAgIGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHF1ZXJ5U3RyaW5nKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuIl19