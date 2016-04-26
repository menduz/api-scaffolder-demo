import { DemoApiV1 } from '../../base'


const ns = DemoApiV1.Me.Payments;

/** 
* Url: /me/payments
* 
*/
export class Controller extends ns.AbstractHandler {

	/** 
	 * Get 
	 * @returns { GetResult200 } instances
	 */
	async get() {
		//  let result = new ns.GetResult200();
		//  return result;
		throw new DemoApiV1.HttpError.NotImplemented;
	}
}
