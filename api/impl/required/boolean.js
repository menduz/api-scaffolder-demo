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
const ns = base_1.DemoApiV1.Required.Boolean;
/**
* Url: /required/boolean
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTBCLFlBRzFCLENBQUMsQ0FIcUM7QUFHdEMsTUFBTSxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBRXRDOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVqRDs7O09BR0c7SUFDRyxHQUFHLENBQ1IsV0FFQzs7WUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtBQUNGLENBQUM7QUFkWSxrQkFBVSxhQWN0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaVYxIH0gZnJvbSAnLi4vLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlWMS5SZXF1aXJlZC5Cb29sZWFuO1xuXG4vKiogXG4qIFVybDogL3JlcXVpcmVkL2Jvb2xlYW5cbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG5cdC8qKiBcblx0ICogR2V0IFxuXHQgKiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB9IGluc3RhbmNlc1xuXHQgKi9cblx0YXN5bmMgZ2V0KFxuXHRcdHF1ZXJ5U3RyaW5nOiB7XG5cdFx0XHRwYXJhbTogYm9vbGVhbjtcblx0XHR9XG5cdCkge1xuXHRcdGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHF1ZXJ5U3RyaW5nKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=