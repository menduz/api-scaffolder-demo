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
const ns = base_1.DemoApiV1.Non.Required.Date;
/**
* Url: /non-required/date
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTBCLGVBRzFCLENBQUMsQ0FId0M7QUFHekMsTUFBTSxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUV2Qzs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFaEQ7OztPQUdHO0lBQ0csR0FBRyxDQUNQLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQWRZLGtCQUFVLGFBY3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpVjEgfSBmcm9tICcuLi8uLi8uLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLk5vbi5SZXF1aXJlZC5EYXRlO1xuXG4vKiogXG4qIFVybDogL25vbi1yZXF1aXJlZC9kYXRlXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuICAvKiogXG4gICAqIEdldCBcbiAgICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcbiAgICovXG4gIGFzeW5jIGdldChcbiAgICBxdWVyeVN0cmluZzoge1xuICAgICAgcGFyYW0/OiBEYXRlO1xuICAgIH1cbiAgKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAocXVlcnlTdHJpbmcpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG4iXX0=