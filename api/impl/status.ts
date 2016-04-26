import { DemoApiV1 } from '../base'


const ns = DemoApiV1.Status;

/** 
* Url: /status
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 | GetResult202 | GetResult401 | GetResult404 | GetResult500 | GetResult505 } instances
	 */
	async get(
		queryString: {
			desiredStatus: number;
		}
	) {
		let result: DemoApiV1.BaseControllerResponse<any>;

		switch (queryString.desiredStatus) {
			case 202:
				result = new ns.GetResult202();
				break;
			case 401:
				result = new ns.GetResult401();
				break;
			case 404:
				result = new ns.GetResult404();
				break;
			case 500:
				result = new ns.GetResult500();
				break;
			case 505:
				result = new ns.GetResult505();
				break;
			default:
				return new ns.GetResult200({ status: '200 OK!' });
		}

		result.data = `HTTP STATUS CODE: <b>${result.status}</b>`;

		return result;
	}
}
