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
const ns = base_1.DemoApi_V1.Me;
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
            let result = new ns.GetResult200({ name: 'Agustin', company: 'MuleSoft' });
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMkIsU0FHM0IsQ0FBQyxDQUhtQztBQUdwQyxNQUFNLEVBQUUsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQztBQUV6Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBVlksa0JBQVUsYUFVdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlfVjEgfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaV9WMS5NZTtcblxuLyoqIFxuKiBVcmw6IC9tZVxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAoeyBuYW1lOiAnQWd1c3RpbicsIGNvbXBhbnk6ICdNdWxlU29mdCcgfSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIl19