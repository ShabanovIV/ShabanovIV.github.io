export interface IAccountService {
  setDiscountForUserType(userType: 'Standard' | 'Premium' | 'Gold' | 'Free', discount: number): void;

  setDiscountForProductType(
    userType: 'Standard' | 'Premium' | 'Gold' | 'Free',
    productType: 'Car' | 'Toy' | 'Food',
    discount: number
  ): void;

  calculateTotalDiscount(
    userType: 'Standard' | 'Premium' | 'Gold' | 'Free',
    productType: 'Car' | 'Toy' | 'Food'
  ): number;
}
