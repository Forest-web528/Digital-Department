interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
  }
  
  class MotorbikeImpl implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
  
    private _frameType: string;
    private _isForSport: boolean;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner,
      frameType: string,
      isForSport: boolean
    ) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._vin = vin;
      this._registrationNumber = registrationNumber;
      this._owner = owner;
      this._frameType = frameType;
      this._isForSport = isForSport;
    }
  
    get brand(): string {
      return this._brand;
    }
    set brand(value: string) {
      this._brand = value;
    }
  
    get model(): string {
      return this._model;
    }
    set model(value: string) {
      this._model = value;
    }
  
    get year(): number {
      return this._year;
    }
    set year(value: number) {
      this._year = value;
    }
  
    get vin(): string {
      return this._vin;
    }
    set vin(value: string) {
      this._vin = value;
    }
  
    get registrationNumber(): string {
      return this._registrationNumber;
    }
    set registrationNumber(value: string) {
      this._registrationNumber = value;
    }
  
    get owner(): Owner {
      return this._owner;
    }
    set owner(value: Owner) {
      this._owner = value;
    }
  
    get frameType(): string {
      return this._frameType;
    }
    set frameType(value: string) {
      this._frameType = value;
    }
  
    get isForSport(): boolean {
      return this._isForSport;
    }
    set isForSport(value: boolean) {
      this._isForSport = value;
    }
  
    printVehicleInfo(): void {
      console.log(
        `Марка: ${this._brand}, Модель: ${this._model}, Год: ${this._year}, VIN: ${this._vin}, Рег. номер: ${this._registrationNumber}, Тип рамы: ${this._frameType}, Спортивный: ${this._isForSport}`
      );
    }
  }