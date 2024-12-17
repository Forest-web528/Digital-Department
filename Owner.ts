enum OwnerDocumentType  {
    Passport = "Паспорт",
    License = "Лицензия",
    ID = "ID",
  }
  
  interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: DocumentType;
    documentSeries: string;
    documentNumber: string;
  
    printOwnerInfo(): void;
  }
  
  class OwnerImpl implements Owner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: DocumentType;
    private _documentSeries: string;
    private _documentNumber: string;
  
    constructor(
      surname: string,
      name: string,
      patronymic: string,
      birthDate: Date,
      documentType: DocumentType,
      documentSeries: string,
      documentNumber: string
    ) {
      this._surname = surname;
      this._name = name;
      this._patronymic = patronymic;
      this._birthDate = birthDate;
      this._documentType = documentType;
      this._documentSeries = documentSeries;
      this._documentNumber = documentNumber;
    }
  
    get surname() {
      return this._surname;
    }
    get name() {
      return this._name;
    }
    get patronymic() {
      return this._patronymic;
    }
    get birthDate() {
      return this._birthDate;
    }
    get documentType() {
      return this._documentType;
    }
    get documentSeries() {
      return this._documentSeries;
    }
    get documentNumber() {
      return this._documentNumber;
    }
  
    printOwnerInfo(): void {
      console.log(`Информация о владельце:
        Фамилия: ${this._surname}
        Имя: ${this._name}
        Отчество: ${this._patronymic}
        Дата рождения: ${this._birthDate.toDateString()}
        Тип документа: ${this._documentType}
        Серия документа: ${this._documentSeries}
        Номер документа: ${this._documentNumber}`);
    }
  }  