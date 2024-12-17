enum CarType {
    Sedan = "Седан",
    SUV = "Внедорожник",
    Coupe = "Купе",
  }
  
  enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум",
  }
  
  interface Car extends Vehicle {
    carType: CarType;
    carClass: CarClass;
  }
  
  class CarImpl implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
  
    private _carType: CarType;
    private _carClass: CarClass;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner,
      carType: CarType,
      carClass: CarClass
    ) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._vin = vin;
      this._registrationNumber = registrationNumber;
      this._owner = owner;
      this._carType = carType;
      this._carClass = carClass;
    }
  
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get carType() { return this._carType; }
    get carClass() { return this._carClass; }
  
    printVehicleInfo(): void {
      console.log(
        `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, VIN: ${this.vin}, Рег. номер: ${this.registrationNumber}, Тип кузова: ${this.carType}, Класс: ${this.carClass}`
      );
    }
  }  