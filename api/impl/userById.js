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
const ns = base_1.DemoApi_V1.UserById;
/**
* Url: /users/{userId}
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 } instances
     */
    get(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new ns.GetResult200({});
            result.data.filter = queryString.filter;
            result.data.results = [];
            result.data.results.push({ name: 'Juan', company: 'Mulesoft' });
            result.data.results.push({ name: 'Agustin', company: 'Mulesoft' });
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyQnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMkIsU0FHM0IsQ0FBQyxDQUhtQztBQUdwQyxNQUFNLEVBQUUsR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztBQUUvQjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRyxDQUNSLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFFaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUVuRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQXZCWSxrQkFBVSxhQXVCdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlfVjEgfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaV9WMS5Vc2VyQnlJZDtcblxuLyoqIFxuKiBVcmw6IC91c2Vycy97dXNlcklkfVxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoXG5cdFx0cXVlcnlTdHJpbmc6IHtcblx0XHRcdGZpbHRlcj86IHN0cmluZztcblx0XHR9XG5cdCkge1xuXHRcdGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHt9KTtcblxuXHRcdHJlc3VsdC5kYXRhLmZpbHRlciA9IHF1ZXJ5U3RyaW5nLmZpbHRlcjtcblxuXHRcdHJlc3VsdC5kYXRhLnJlc3VsdHMgPSBbXTtcblxuXHRcdHJlc3VsdC5kYXRhLnJlc3VsdHMucHVzaCh7IG5hbWU6ICdKdWFuJywgY29tcGFueTogJ011bGVzb2Z0JyB9KTtcblxuXHRcdHJlc3VsdC5kYXRhLnJlc3VsdHMucHVzaCh7IG5hbWU6ICdBZ3VzdGluJywgY29tcGFueTogJ011bGVzb2Z0JyB9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiJdfQ==