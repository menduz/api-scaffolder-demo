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
const ns = base_1.DemoApiV1.Popularmedia;
/**
* Url: /popularmedia
*
*/
class Controller extends ns.AbstractHandler {
    /**
    * Get a list of what media is most popular at the moment.
    * @returns { GetResult200 | GetResult503 } instances
    */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new ns.GetResult200();
            return result;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhcm1lZGlhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9wdWxhcm1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUF3QixTQUd4QixDQUFDLENBSGdDO0FBR2pDLE1BQU0sRUFBRSxHQUFHLGdCQUFTLENBQUMsWUFBWSxDQUFDO0FBRWxDOzs7RUFHRTtBQUNGLHlCQUFnQyxFQUFFLENBQUMsZUFBZTtJQUVqRDs7O01BR0U7SUFDSSxHQUFHOztZQUNSLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7QUFDRixDQUFDO0FBVlksa0JBQVUsYUFVdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVtb0FwaVYxfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLlBvcHVsYXJtZWRpYTtcblxuLyoqIFxuKiBVcmw6IC9wb3B1bGFybWVkaWFcbiogXG4qL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBucy5BYnN0cmFjdEhhbmRsZXIge1xuXG5cdC8qKlxuXHQqIEdldCBhIGxpc3Qgb2Ygd2hhdCBtZWRpYSBpcyBtb3N0IHBvcHVsYXIgYXQgdGhlIG1vbWVudC5cblx0KiBAcmV0dXJucyB7IEdldFJlc3VsdDIwMCB8IEdldFJlc3VsdDUwMyB9IGluc3RhbmNlc1xuXHQqL1xuXHRhc3luYyBnZXQoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBucy5HZXRSZXN1bHQyMDAoKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iXX0=