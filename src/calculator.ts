import * as angular from 'angular';

export class Calculator {
  $http: angular.IHttpService;

  constructor($http: angular.IHttpService) {
    this.$http = $http;
  }

  async add(op1, op2) {
    let {data: {value}}:any = await this.$http.get('/add');
    return op1 + op2 + value;
  }

  subtract(op1, op2) {
    return op1 - op2;
  }
}

export const calculatorModule = angular.module('calculator', [])
  .service('Calculator', Calculator);