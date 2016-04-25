import { DemoApiV1 } from '../base'


const ns = DemoApiV1.Me;

/** 
* Url: /me
* 
*/
export class Controller extends ns.AbstractHandler {

  /** 
   * Get 
   * @returns { GetResult200 } instances
   */
  async get() {
    let result = new ns.GetResult200({ name: 'Agustin', company: 'MuleSoft' });
    return result;
  }
}


