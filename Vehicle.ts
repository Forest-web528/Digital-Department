interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
  
    printVehicleInfo(): void;
  }
  
  class VehicleImpl implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner
    ) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._vin = vin;
      this._registrationNumber = registrationNumber;
      this._owner = owner;
    }
  
    get brand() {
      return this._brand;
    }
    get model() {
      return this._model;
    }
    get year() {
      return this._year;
    }
    get vin() {
      return this._vin;
    }
    get registrationNumber() {
      return this._registrationNumber;
    }
    get owner() {
      return this._owner;
    }
  
    printVehicleInfo(): void {
      console.log(`Информация о транспортном средстве:
        Марка: ${this._brand}
        Модель: ${this._model}
        Год: ${this._year}
        VIN: ${this._vin}
        Регистрационный номер: ${this._registrationNumber}`);
    }
  }  