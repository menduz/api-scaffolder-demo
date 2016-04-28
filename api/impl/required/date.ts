import { DemoApi_V1 } from '../../base'


const ns = DemoApi_V1.Required.Date;

/** 
* Url: /required/date
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			param: Date;
		}
	) {
		let result = new ns.GetResult200(queryString);
		return result;
	}
}
