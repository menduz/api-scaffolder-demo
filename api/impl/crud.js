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
const ns = base_1.DemoApi_V1.Crud;
/**
* Url: /crud
*
*/
class Controller extends ns.AbstractHandler {
    /**
     * Get
     * @returns { GetResult200 } instances
     */
    get(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            //  return result;
            throw new base_1.HttpError.NotImplemented;
        });
    }
    /**
     * Put
     * @returns { PutResult200 } instances
     */
    put() {
        return __awaiter(this, void 0, void 0, function* () {
            //  let result = new ns.PutResult200();
            //  return result;
            throw new base_1.HttpError.NotImplemented;
        });
    }
    /**
     * Post
     * @returns { PostResult201 } instances
     */
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            //  let result = new ns.PostResult200();
            //  return result;
            throw new base_1.HttpError.NotImplemented;
        });
    }
    /**
     * Patch
     * @returns { PatchResult200 | PatchResult404 } instances
     */
    patch() {
        return __awaiter(this, void 0, void 0, function* () {
            //  let result = new ns.PatchResult200();
            //  return result;
            throw new base_1.HttpError.NotImplemented;
        });
    }
    /**
     * Delete
     * @returns { DeleteResult200 | DeleteResult204 | DeleteResult404 } instances
     */
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            //  let result = new ns.DeleteResult200();
            //  return result;
            throw new base_1.HttpError.NotImplemented;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNydWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXNDLFNBR3RDLENBQUMsQ0FIOEM7QUFHL0MsTUFBTSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxJQUFJLENBQUM7QUFFM0I7OztFQUdFO0FBQ0YseUJBQWdDLEVBQUUsQ0FBQyxlQUFlO0lBRWpEOzs7T0FHRztJQUNHLEdBQUcsQ0FDUixXQUdDOztZQUdELGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0csR0FBRzs7WUFDUix1Q0FBdUM7WUFDdkMsa0JBQWtCO1lBQ2xCLE1BQU0sSUFBSSxnQkFBUyxDQUFDLGNBQWMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDRyxJQUFJOztZQUNULHdDQUF3QztZQUN4QyxrQkFBa0I7WUFDbEIsTUFBTSxJQUFJLGdCQUFTLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEtBQUs7O1lBQ1YseUNBQXlDO1lBQ3pDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0csTUFBTTs7WUFDWCwwQ0FBMEM7WUFDMUMsa0JBQWtCO1lBQ2xCLE1BQU0sSUFBSSxnQkFBUyxDQUFDLGNBQWMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7QUFDRixDQUFDO0FBeERZLGtCQUFVLGFBd0R0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVtb0FwaV9WMSwgSHR0cEVycm9yIH0gZnJvbSAnLi4vYmFzZSdcblxuXG5jb25zdCBucyA9IERlbW9BcGlfVjEuQ3J1ZDtcblxuLyoqIFxuKiBVcmw6IC9jcnVkXG4qIFxuKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgbnMuQWJzdHJhY3RIYW5kbGVyIHtcblxuXHQvKiogXG5cdCAqIEdldCBcblx0ICogQHJldHVybnMgeyBHZXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcblx0ICovXG5cdGFzeW5jIGdldChcblx0XHRxdWVyeVN0cmluZzoge1xuXHRcdFx0LyoqIFJlc291cmNlIElEICovXG5cdFx0XHRpZDogbnVtYmVyO1xuXHRcdH1cblx0KSB7XG5cblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgSHR0cEVycm9yLk5vdEltcGxlbWVudGVkO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBQdXQgXG5cdCAqIEByZXR1cm5zIHsgUHV0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBwdXQoKSB7XG5cdFx0Ly8gIGxldCByZXN1bHQgPSBuZXcgbnMuUHV0UmVzdWx0MjAwKCk7XG5cdFx0Ly8gIHJldHVybiByZXN1bHQ7XG5cdFx0dGhyb3cgbmV3IEh0dHBFcnJvci5Ob3RJbXBsZW1lbnRlZDtcblx0fVxuXG5cdC8qKiBcblx0ICogUG9zdCBcblx0ICogQHJldHVybnMgeyBQb3N0UmVzdWx0MjAxIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBwb3N0KCkge1xuXHRcdC8vICBsZXQgcmVzdWx0ID0gbmV3IG5zLlBvc3RSZXN1bHQyMDAoKTtcblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgSHR0cEVycm9yLk5vdEltcGxlbWVudGVkO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBQYXRjaCBcblx0ICogQHJldHVybnMgeyBQYXRjaFJlc3VsdDIwMCB8IFBhdGNoUmVzdWx0NDA0IH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBwYXRjaCgpIHtcblx0XHQvLyAgbGV0IHJlc3VsdCA9IG5ldyBucy5QYXRjaFJlc3VsdDIwMCgpO1xuXHRcdC8vICByZXR1cm4gcmVzdWx0O1xuXHRcdHRocm93IG5ldyBIdHRwRXJyb3IuTm90SW1wbGVtZW50ZWQ7XG5cdH1cblxuXHQvKiogXG5cdCAqIERlbGV0ZSBcblx0ICogQHJldHVybnMgeyBEZWxldGVSZXN1bHQyMDAgfCBEZWxldGVSZXN1bHQyMDQgfCBEZWxldGVSZXN1bHQ0MDQgfSBpbnN0YW5jZXNcblx0ICovXG5cdGFzeW5jIGRlbGV0ZSgpIHtcblx0XHQvLyAgbGV0IHJlc3VsdCA9IG5ldyBucy5EZWxldGVSZXN1bHQyMDAoKTtcblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgSHR0cEVycm9yLk5vdEltcGxlbWVudGVkO1xuXHR9XG59XG4iXX0=