import { DemoApiV1 } from '../base'


const ns = DemoApiV1.Crud;

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
    //  let result = new ns.GetResult200();
    //  return result;
    return new Error('Get not implemented yet') as any;
  }

  /** 
   * Put 
   * @returns { PutResult200 } instances
   */
  async put() {
    //  let result = new ns.PutResult200();
    //  return result;
    return new Error('Put not implemented yet') as any;
  }

  /** 
   * Post 
   * @returns { PostResult201 } instances
   */
  async post() {
    //  let result = new ns.PostResult200();
    //  return result;
    return new Error('Post not implemented yet') as any;
  }

  /** 
   * Patch 
   * @returns { PatchResult200 | PatchResult404 } instances
   */
  async patch() {
    //  let result = new ns.PatchResult200();
    //  return result;
    return new Error('Patch not implemented yet') as any;
  }

  /** 
   * Delete 
   * @returns { DeleteResult200 | DeleteResult204 | DeleteResult404 } instances
   */
  async delete() {
    //  let result = new ns.DeleteResult200();
    //  return result;
    return new Error('Delete not implemented yet') as any;
  }
}
