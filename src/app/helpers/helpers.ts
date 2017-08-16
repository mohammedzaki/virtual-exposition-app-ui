import { Injectable } from '@angular/core';

@Injectable()
export class Helpers {

  /**
  * remove Item from object and return it
  * @param id
  * @param object
  * @return filteredObject
  * */
  removeItem(id, object) {
    object = object.filter(item => item.id !== id);
    return object;
  }
  /**
  * check if object empty
  * @param obj
  * @return boolean
  * */
  isEmpty(obj): boolean{
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  isempty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  /**
   * check file ending in string
   * @param str
   * @param suffix
   * @returns {boolean}
   */
  endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
}
