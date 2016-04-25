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
            let result = new ns.GetResult200({ name: 'Agustin', company: 'MuleSoft' });
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsU0FHMUIsQ0FBQyxDQUhrQztBQUduQyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztBQUV4Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFaEQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQVZZLGtCQUFVLGFBVXRCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpVjEgfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLk1lO1xuXG4vKiogXG4qIFVybDogL21lXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuICAvKiogXG4gICAqIEdldCBcbiAgICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcbiAgICovXG4gIGFzeW5jIGdldCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMCh7IG5hbWU6ICdBZ3VzdGluJywgY29tcGFueTogJ011bGVTb2Z0JyB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuIl19