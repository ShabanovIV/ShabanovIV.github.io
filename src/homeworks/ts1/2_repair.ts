/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  public set: Set<number>;
  public channel: BroadcastChannel;
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export const Kind = {
  Money: 'Money',
  Percent: 'Percent',
  // Test: 'test', // Если добавить 'Test', то будет ошибка компилляции.
} as const;

export type Kinds = (typeof Kind)[keyof typeof Kind];

export class Percent {
  private _value = 0;

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    if (value < 0 || value > 100) {
      throw Error(`Invalid percent value ${value}.`);
    }
    this._value = value;
  }
}

export type Money = {
  currency: string;
  amount: number;
};

export type DataValue = Money | Percent;

export class Data {
  private _kind: Kinds = Kind.Money;
  public get kind(): Kinds {
    return this._kind;
  }

  private _value: DataValue = { currency: '', amount: 0 };
  public get value(): DataValue {
    return this._value;
  }

  public setPercent(value: Percent): void {
    this._kind = Kind.Percent;
    this._value = value;
  }

  public setMoney(value: Money): void {
    this._kind = Kind.Money;
    this._value = value;
  }
}

function throwInvalidValueType(value: never): never;
function throwInvalidValueType(value: Kinds): never {
  throw new Error(`Unknown type: ${value}.`);
}

export const getDataValue = (data: Data): number => {
  switch (data.kind) {
    case Kind.Money:
      return (data.value as Money).amount;
    case Kind.Percent:
      return (data.value as Percent).value;
    default:
      return throwInvalidValueType(data.kind);
  }
};
