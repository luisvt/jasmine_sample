import {mock} from 'angular';
import 'angular-mocks';
import {calculatorModule} from "./calculator";
import {Calculator} from './calculator';
import {$it} from "async-await-jasmine";
import {IHttpBackendService, IRootScopeService} from "angular";


describe('Calculator', () => {
  let calculator: Calculator;
  let $httpBackend: IHttpBackendService;
  let $rootScope: IRootScopeService;

  beforeEach(() => {
    mock.module(calculatorModule.name);
    mock.inject((Calculator, _$httpBackend_, _$rootScope_) => {
      calculator = Calculator;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
    });
  });

  $it('should add two numbers', async () => {
    $httpBackend.when('GET', '/add').respond('{"value": 5}');
    $rootScope.$digest();
    let sum = calculator.add(1, 4);
    $httpBackend.flush();

    expect(await sum).toBe(10);
  });
  it('should subtract two numbers', () => {
    let sum = calculator.subtract(4, 1);
    expect(sum).toBe(3);
  });
});