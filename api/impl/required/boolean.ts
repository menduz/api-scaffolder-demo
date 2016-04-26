import { DemoApiV1 } from '../../base'


const ns = DemoApiV1.Required.Boolean;

/** 
* Url: /required/boolean
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			param: boolean;
		}
	) {
		let result = new ns.GetResult200(queryString);
		return result;
	}
}
