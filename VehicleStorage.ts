interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
  
    getAllVehicles(): T[];
  }
  
  class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];
  
    constructor(creationDate: Date, vehicles: T[]) {
      this.creationDate = creationDate;
      this.vehicles = vehicles;
    }
  
    getAllVehicles(): T[] {
      return this.vehicles;
    }
  }
    