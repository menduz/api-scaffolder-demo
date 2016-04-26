import {DemoApiV1} from '../base'


const ns = DemoApiV1.Popularmedia;

/** 
* Url: /popularmedia
* 
*/
export class Controller extends ns.AbstractHandler {

	/**
	* Get a list of what media is most popular at the moment.
	* @returns { GetResult200 | GetResult503 } instances
	*/
	async get() {
		let result = new ns.GetResult200();
		return result;
	}
}
