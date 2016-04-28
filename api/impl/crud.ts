import { DemoApi_V1, HttpError } from '../base'


const ns = DemoApi_V1.Crud;

/** 
* Url: /crud
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			/** Resource ID */
			id: number;
		}
	) {

		//  return result;
		throw new HttpError.NotImplemented;
	}

	/** 
	 * Put 
	 * @returns { PutResult200 } instances
	 */
	async put() {
		//  let result = new ns.PutResult200();
		//  return result;
		throw new HttpError.NotImplemented;
	}

	/** 
	 * Post 
	 * @returns { PostResult201 } instances
	 */
	async post() {
		//  let result = new ns.PostResult200();
		//  return result;
		throw new HttpError.NotImplemented;
	}

	/** 
	 * Patch 
	 * @returns { PatchResult200 | PatchResult404 } instances
	 */
	async patch() {
		//  let result = new ns.PatchResult200();
		//  return result;
		throw new HttpError.NotImplemented;
	}

	/** 
	 * Delete 
	 * @returns { DeleteResult200 | DeleteResult204 | DeleteResult404 } instances
	 */
	async delete() {
		//  let result = new ns.DeleteResult200();
		//  return result;
		throw new HttpError.NotImplemented;
	}
}
