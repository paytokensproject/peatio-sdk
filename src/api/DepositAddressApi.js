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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.DepositAddressApi = factory(root.PeatioSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * DepositAddress service.
   * @module api/DepositAddressApi
   * @version 0.2.4
   */

  /**
   * Constructs a new DepositAddressApi. 
   * @alias module:api/DepositAddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2DepositAddress operation.
     * @callback module:api/DepositAddressApi~getV2DepositAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.
     * Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.
     * @param {module:model/String} currency The account to which you want to deposit. Available values: usd, btc, xrp
     * @param {module:api/DepositAddressApi~getV2DepositAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2DepositAddress = function(currency, callback) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getV2DepositAddress");
      }


      var pathParams = {
      };
      var queryParams = {
        'currency': currency
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/deposit_address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
