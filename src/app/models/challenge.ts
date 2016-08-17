/**
 * Created by ravi.hamsa on 8/14/16.
 */
let getUniqueId = (function () {
  let counter = 100;
  return function () {
    return '' + (++counter);
  }
})();

export default class Challenge {
  constructor(public name:string = '', public id:string = getUniqueId(), status:string="active") {

  }
}
