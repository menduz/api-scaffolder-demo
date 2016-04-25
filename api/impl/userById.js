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
const ns = base_1.DemoApiV1.UserById;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyQnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsU0FHMUIsQ0FBQyxDQUhrQztBQUduQyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLFFBQVEsQ0FBQztBQUU5Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFaEQ7OztPQUdHO0lBQ0csR0FBRyxDQUNQLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFFOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztZQUVqRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtBQUNILENBQUM7QUF2Qlksa0JBQVUsYUF1QnRCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpVjEgfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLlVzZXJCeUlkO1xuXG4vKiogXG4qIFVybDogL3VzZXJzL3t1c2VySWR9XG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuICAvKiogXG4gICAqIEdldCBcbiAgICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcbiAgICovXG4gIGFzeW5jIGdldChcbiAgICBxdWVyeVN0cmluZzoge1xuICAgICAgZmlsdGVyPzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAoe30pO1xuICAgIFxuICAgIHJlc3VsdC5kYXRhLmZpbHRlciA9IHF1ZXJ5U3RyaW5nLmZpbHRlcjtcbiAgICBcbiAgICByZXN1bHQuZGF0YS5yZXN1bHRzID0gW107XG4gICAgXG4gICAgcmVzdWx0LmRhdGEucmVzdWx0cy5wdXNoKHtuYW1lOiAnSnVhbicsIGNvbXBhbnk6ICdNdWxlc29mdCd9KTtcbiAgICBcbiAgICByZXN1bHQuZGF0YS5yZXN1bHRzLnB1c2goe25hbWU6ICdBZ3VzdGluJywgY29tcGFueTogJ011bGVzb2Z0J30pO1xuICAgIFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG4iXX0=