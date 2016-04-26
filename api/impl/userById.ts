import { DemoApiV1 } from '../base'


const ns = DemoApiV1.UserById;

/** 
* Url: /users/{userId}
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get(
		queryString: {
			filter?: string;
		}
	) {
		let result = new ns.GetResult200({});

		result.data.filter = queryString.filter;

		result.data.results = [];

		result.data.results.push({ name: 'Juan', company: 'Mulesoft' });

		result.data.results.push({ name: 'Agustin', company: 'Mulesoft' });

		return result;
	}
}
