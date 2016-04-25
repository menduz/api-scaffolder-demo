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
const ns = base_1.DemoApiV1.Me;
/**
* Url: /me
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 } instances
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new ns.GetResult200({ itsMe: 'Mario' });
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsU0FHMUIsQ0FBQyxDQUhrQztBQUduQyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztBQUV4Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFaEQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtBQUNILENBQUM7QUFWWSxrQkFBVSxhQVV0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaVYxIH0gZnJvbSAnLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlWMS5NZTtcblxuLyoqIFxuKiBVcmw6IC9tZVxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cbiAgLyoqIFxuICAgKiBHZXQgXG4gICAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG4gICAqL1xuICBhc3luYyBnZXQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAoeyBpdHNNZTogJ01hcmlvJyB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuIl19