/*tslint bitwise: false*/

/*
  Generated GUID using https://github.com/Steve-Fenton/TypeScriptUtilities implementation
 */

export class Guid {

  static newMediaGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static newUserGuid() {
    return 'xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 18 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(18);
    });
  }
}
