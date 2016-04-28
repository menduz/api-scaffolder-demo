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
const ns = base_1.DemoApi_V1.Non.Required.Integer;
/**
* Url: /non-required/integer
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTJCLGVBRzNCLENBQUMsQ0FIeUM7QUFHMUMsTUFBTSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUUzQzs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRyxDQUNSLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBZFksa0JBQVUsYUFjdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlfVjEgfSBmcm9tICcuLi8uLi8uLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaV9WMS5Ob24uUmVxdWlyZWQuSW50ZWdlcjtcblxuLyoqIFxuKiBVcmw6IC9ub24tcmVxdWlyZWQvaW50ZWdlclxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoXG5cdFx0cXVlcnlTdHJpbmc6IHtcblx0XHRcdHBhcmFtPzogbnVtYmVyO1xuXHRcdH1cblx0KSB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAocXVlcnlTdHJpbmcpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiJdfQ==