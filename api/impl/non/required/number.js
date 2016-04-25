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
const ns = base_1.DemoApiV1.Non.Required.Number;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEwQixlQUcxQixDQUFDLENBSHdDO0FBR3pDLE1BQU0sRUFBRSxHQUFHLGdCQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFFekM7OztFQUdFO0FBQ0YseUJBQWdDLEVBQUUsQ0FBQyxlQUFlO0lBRWhEOzs7T0FHRztJQUNHLEdBQUcsQ0FDUCxXQUVDOztZQUVELElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtBQUNILENBQUM7QUFkWSxrQkFBVSxhQWN0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaVYxIH0gZnJvbSAnLi4vLi4vLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlWMS5Ob24uUmVxdWlyZWQuTnVtYmVyO1xuXG4vKiogXG4qIFVybDogL25vbi1yZXF1aXJlZC9udW1iZXJcbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG4gIC8qKiBcbiAgICogR2V0IFxuICAgKiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB9IGluc3RhbmNlc1xuICAgKi9cbiAgYXN5bmMgZ2V0KFxuICAgIHF1ZXJ5U3RyaW5nOiB7XG4gICAgICBwYXJhbT86IG51bWJlcjtcbiAgICB9XG4gICkge1xuICAgIGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHF1ZXJ5U3RyaW5nKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuIl19