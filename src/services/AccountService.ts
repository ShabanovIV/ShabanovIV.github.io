import { IAccountService } from './abstract/IAccountService';

interface DiscountRecord {
  [userType: string]: number;
}

interface ProductDiscountRecord {
  [userType: string]: {
    [productType: string]: number;
  };
}

export class AccountService implements IAccountService {
  private userDiscounts: DiscountRecord = {};
  private productDiscounts: ProductDiscountRecord = {};

  setDiscountForUserType(userType: 'Standard' | 'Premium' | 'Gold' | 'Free', discount: number): void {
    this.userDiscounts[userType] = discount;
  }

  setDiscountForProductType(
    userType: 'Standard' | 'Premium' | 'Gold' | 'Free',
    productType: 'Car' | 'Toy' | 'Food',
    discount: number
  ): void {
    if (!this.productDiscounts[userType]) {
      this.productDiscounts[userType] = {};
    }
    this.productDiscounts[userType][productType] = discount;
  }

  calculateTotalDiscount(
    userType: 'Standard' | 'Premium' | 'Gold' | 'Free',
    productType: 'Car' | 'Toy' | 'Food'
  ): number {
    const userDiscount = this.userDiscounts[userType] || 0;
    const productDiscount = this.productDiscounts[userType]?.[productType] || 0;

    return userDiscount + productDiscount;
  }
}
