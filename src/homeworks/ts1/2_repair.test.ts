import { Data, getDataValue, Kind, Money } from './2_repair';
import { v4 as uuidv4 } from 'uuid';

describe('all', () => {
  it('getDataValue should return Money.amount', () => {
    // Arrange
    const data: Data = new Data();
    const money: Money = { amount: Math.random(), currency: '$' };
    const expectedAmount = money.amount;
    data.setMoney(money);

    // Act
    const actualAmount = getDataValue(data);

    // Assert
    expect(actualAmount).toEqual(expectedAmount);
    expect(data.kind).toEqual(Kind.Money);
  });

  it('getDataValue should throw Error for invalid kind', () => {
    // Arrange
    const invalidData: Data = new Data();
    const invalidKind = uuidv4();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    invalidData._kind = invalidKind;

    const expectedErrorMessage = `Unknown type: ${invalidData.kind}.`;

    // Act, Assert
    expect(() => getDataValue(invalidData)).toThrow(expectedErrorMessage);
  });
});
