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
const ns = base_1.DemoApiV1.Required.Number;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUEwQixZQUcxQixDQUFDLENBSHFDO0FBR3RDLE1BQU0sRUFBRSxHQUFHLGdCQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUVyQzs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFaEQ7OztPQUdHO0lBQ0csR0FBRyxDQUNQLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQWRZLGtCQUFVLGFBY3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpVjEgfSBmcm9tICcuLi8uLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLlJlcXVpcmVkLk51bWJlcjtcblxuLyoqIFxuKiBVcmw6IC9yZXF1aXJlZC9udW1iZXJcbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG4gIC8qKiBcbiAgICogR2V0IFxuICAgKiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB9IGluc3RhbmNlc1xuICAgKi9cbiAgYXN5bmMgZ2V0KFxuICAgIHF1ZXJ5U3RyaW5nOiB7XG4gICAgICBwYXJhbTogbnVtYmVyO1xuICAgIH1cbiAgKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAocXVlcnlTdHJpbmcpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG4iXX0=