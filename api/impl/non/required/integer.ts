import { DemoApi_V1 } from '../../../base'


const ns = DemoApi_V1.Non.Required.Integer;

/** 
* Url: /non-required/integer
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			param?: number;
		}
	) {
		let result = new ns.GetResult200(queryString);
		return result;
	}
}
