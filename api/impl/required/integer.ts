import { DemoApi_V1 } from '../../base'


const ns = DemoApi_V1.Required.Integer;

/** 
* Url: /required/integer
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			param: number;
		}
	) {
		let result = new ns.GetResult200(queryString);
		return result;
	}
}
