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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsU0FHMUIsQ0FBQyxDQUhrQztBQUduQyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztBQUV4Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBVlksa0JBQVUsYUFVdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlWMSB9IGZyb20gJy4uL2Jhc2UnXG5cblxuY29uc3QgbnMgPSBEZW1vQXBpVjEuTWU7XG5cbi8qKiBcbiogVXJsOiAvbWVcbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG5cdC8qKiBcblx0ICogR2V0IFxuXHQgKiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB9IGluc3RhbmNlc1xuXHQgKi9cblx0YXN5bmMgZ2V0KCkge1xuXHRcdGxldCByZXN1bHQgPSBuZXcgbnMuR2V0UmVzdWx0MjAwKHsgbmFtZTogJ0FndXN0aW4nLCBjb21wYW55OiAnTXVsZVNvZnQnIH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiJdfQ==