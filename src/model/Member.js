/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.Member = factory(root.PeatioSdk.ApiClient, root.PeatioSdk.Account);
  }
}(this, function(ApiClient, Account) {
  'use strict';




  /**
   * The Member model module.
   * @module model/Member
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Member} obj Optional instance to populate.
   * @return {module:model/Member} The populated <code>Member</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sn')) {
        obj['sn'] = ApiClient.convertToType(data['sn'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [Account]);
      }
    }
    return obj;
  }

  /**
   * @member {String} sn
   */
  exports.prototype['sn'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Array.<module:model/Account>} accounts
   */
  exports.prototype['accounts'] = undefined;



  return exports;
}));


