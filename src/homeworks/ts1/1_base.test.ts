import { Customer, CustomerMap, removeFirstZeros, removePlus, transformCustomers } from './1_base';

describe('all', () => {
  it('transformCustomers should return CustomerMap with id as key', () => {
    // Arrange
    const customers: Customer[] = [
      { id: 1, name: 'John', age: 25, isSubscribed: true },
      { id: 2, name: 'Mary', age: 40, isSubscribed: false },
      { id: 3, name: 'Bob', age: 32, isSubscribed: true },
      { id: 4, name: 'Alice', age: 22, isSubscribed: true },
      { id: 5, name: 'David', age: 48, isSubscribed: false },
    ];
    const expectedCostumerMap: CustomerMap = {
      1: { name: 'John', age: 25, isSubscribed: true },
      2: { name: 'Mary', age: 40, isSubscribed: false },
      3: { name: 'Bob', age: 32, isSubscribed: true },
      4: { name: 'Alice', age: 22, isSubscribed: true },
      5: { name: 'David', age: 48, isSubscribed: false },
    };

    // Act
    const actualCostumerMap = transformCustomers(customers);

    // Assert
    expect(actualCostumerMap).toEqual(expectedCostumerMap);
  });

  it('removePlus should return string without "+"', () => {
    // Arrange
    const string = 'string+string';
    const expectedString = string.replace(/^\+/, '');

    // Act
    const actualString = removePlus(string);

    // Assert
    expect(actualString).toEqual(expectedString);
  });

  it('removeFirstZero should return the number as a string with no significant zeros', () => {
    // Arrange
    const numberRegEx = /^(-)?[0]+(-?\d+.*)$/;
    const numberWithSignificantZeros = '-000015.123';
    const expectedNumberString = numberWithSignificantZeros.replace(numberRegEx, '$1$2');

    // Act
    const actualNumberString = removeFirstZeros(numberWithSignificantZeros);

    // Assert
    expect(actualNumberString).toEqual(expectedNumberString);
  });

  it('removeFirstZero should throw Error for invalid number format', () => {
    // Arrange
    const invalidNumberFormat = '00InvalidNumber';
    const expectedErrorMessage = 'Invalid number format.';

    // Act, Assert
    expect(() => removeFirstZeros(invalidNumberFormat)).toThrow(expectedErrorMessage);
  });
});
