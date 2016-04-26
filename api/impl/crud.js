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
const ns = base_1.DemoApiV1.Crud;
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
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
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
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
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
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
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
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
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
            throw new base_1.DemoApiV1.HttpError.NotImplemented;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNydWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQTBCLFNBRzFCLENBQUMsQ0FIa0M7QUFHbkMsTUFBTSxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7QUFFMUI7OztFQUdFO0FBQ0YseUJBQWdDLEVBQUUsQ0FBQyxlQUFlO0lBRWpEOzs7T0FHRztJQUNHLEdBQUcsQ0FDUixXQUdDOztZQUdELGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEdBQUc7O1lBQ1IsdUNBQXVDO1lBQ3ZDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLElBQUk7O1lBQ1Qsd0NBQXdDO1lBQ3hDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEtBQUs7O1lBQ1YseUNBQXlDO1lBQ3pDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLE1BQU07O1lBQ1gsMENBQTBDO1lBQzFDLGtCQUFrQjtZQUNsQixNQUFNLElBQUksZ0JBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7S0FBQTtBQUNGLENBQUM7QUF4RFksa0JBQVUsYUF3RHRCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZW1vQXBpVjEgfSBmcm9tICcuLi9iYXNlJ1xuXG5cbmNvbnN0IG5zID0gRGVtb0FwaVYxLkNydWQ7XG5cbi8qKiBcbiogVXJsOiAvY3J1ZFxuKiBcbiovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIG5zLkFic3RyYWN0SGFuZGxlciB7XG5cblx0LyoqIFxuXHQgKiBHZXQgXG5cdCAqIEByZXR1cm5zIHsgR2V0UmVzdWx0MjAwIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBnZXQoXG5cdFx0cXVlcnlTdHJpbmc6IHtcblx0XHRcdC8qKiBSZXNvdXJjZSBJRCAqL1xuXHRcdFx0aWQ6IG51bWJlcjtcblx0XHR9XG5cdCkge1xuXG5cdFx0Ly8gIHJldHVybiByZXN1bHQ7XG5cdFx0dGhyb3cgbmV3IERlbW9BcGlWMS5IdHRwRXJyb3IuTm90SW1wbGVtZW50ZWQ7XG5cdH1cblxuXHQvKiogXG5cdCAqIFB1dCBcblx0ICogQHJldHVybnMgeyBQdXRSZXN1bHQyMDAgfSBpbnN0YW5jZXNcblx0ICovXG5cdGFzeW5jIHB1dCgpIHtcblx0XHQvLyAgbGV0IHJlc3VsdCA9IG5ldyBucy5QdXRSZXN1bHQyMDAoKTtcblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgRGVtb0FwaVYxLkh0dHBFcnJvci5Ob3RJbXBsZW1lbnRlZDtcblx0fVxuXG5cdC8qKiBcblx0ICogUG9zdCBcblx0ICogQHJldHVybnMgeyBQb3N0UmVzdWx0MjAxIH0gaW5zdGFuY2VzXG5cdCAqL1xuXHRhc3luYyBwb3N0KCkge1xuXHRcdC8vICBsZXQgcmVzdWx0ID0gbmV3IG5zLlBvc3RSZXN1bHQyMDAoKTtcblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgRGVtb0FwaVYxLkh0dHBFcnJvci5Ob3RJbXBsZW1lbnRlZDtcblx0fVxuXG5cdC8qKiBcblx0ICogUGF0Y2ggXG5cdCAqIEByZXR1cm5zIHsgUGF0Y2hSZXN1bHQyMDAgfCBQYXRjaFJlc3VsdDQwNCB9IGluc3RhbmNlc1xuXHQgKi9cblx0YXN5bmMgcGF0Y2goKSB7XG5cdFx0Ly8gIGxldCByZXN1bHQgPSBuZXcgbnMuUGF0Y2hSZXN1bHQyMDAoKTtcblx0XHQvLyAgcmV0dXJuIHJlc3VsdDtcblx0XHR0aHJvdyBuZXcgRGVtb0FwaVYxLkh0dHBFcnJvci5Ob3RJbXBsZW1lbnRlZDtcblx0fVxuXG5cdC8qKiBcblx0ICogRGVsZXRlIFxuXHQgKiBAcmV0dXJucyB7IERlbGV0ZVJlc3VsdDIwMCB8IERlbGV0ZVJlc3VsdDIwNCB8IERlbGV0ZVJlc3VsdDQwNCB9IGluc3RhbmNlc1xuXHQgKi9cblx0YXN5bmMgZGVsZXRlKCkge1xuXHRcdC8vICBsZXQgcmVzdWx0ID0gbmV3IG5zLkRlbGV0ZVJlc3VsdDIwMCgpO1xuXHRcdC8vICByZXR1cm4gcmVzdWx0O1xuXHRcdHRocm93IG5ldyBEZW1vQXBpVjEuSHR0cEVycm9yLk5vdEltcGxlbWVudGVkO1xuXHR9XG59XG4iXX0=