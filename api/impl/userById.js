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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyQnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBMEIsU0FHMUIsQ0FBQyxDQUhrQztBQUduQyxNQUFNLEVBQUUsR0FBRyxnQkFBUyxDQUFDLFFBQVEsQ0FBQztBQUU5Qjs7O0VBR0U7QUFDRix5QkFBZ0MsRUFBRSxDQUFDLGVBQWU7SUFFakQ7OztPQUdHO0lBQ0csR0FBRyxDQUNSLFdBRUM7O1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFFaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUVuRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQXZCWSxrQkFBVSxhQXVCdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbW9BcGlWMSB9IGZyb20gJy4uL2Jhc2UnXG5cblxuY29uc3QgbnMgPSBEZW1vQXBpVjEuVXNlckJ5SWQ7XG5cbi8qKiBcbiogVXJsOiAvdXNlcnMve3VzZXJJZH1cbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG5cdC8qKiBcblx0ICogR2V0IFxuXHQgKiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB9IGluc3RhbmNlc1xuXHQgKi9cblx0YXN5bmMgZ2V0KFxuXHRcdHF1ZXJ5U3RyaW5nOiB7XG5cdFx0XHRmaWx0ZXI/OiBzdHJpbmc7XG5cdFx0fVxuXHQpIHtcblx0XHRsZXQgcmVzdWx0ID0gbmV3IG5zLkdldFJlc3VsdDIwMCh7fSk7XG5cblx0XHRyZXN1bHQuZGF0YS5maWx0ZXIgPSBxdWVyeVN0cmluZy5maWx0ZXI7XG5cblx0XHRyZXN1bHQuZGF0YS5yZXN1bHRzID0gW107XG5cblx0XHRyZXN1bHQuZGF0YS5yZXN1bHRzLnB1c2goeyBuYW1lOiAnSnVhbicsIGNvbXBhbnk6ICdNdWxlc29mdCcgfSk7XG5cblx0XHRyZXN1bHQuZGF0YS5yZXN1bHRzLnB1c2goeyBuYW1lOiAnQWd1c3RpbicsIGNvbXBhbnk6ICdNdWxlc29mdCcgfSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=