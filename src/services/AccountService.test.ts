import { IAccountService } from './abstract/IAccountService';
import { AccountService } from './AccountService';

describe('AccountService', () => {
  let accountService: IAccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  describe('setDiscountForUserType', () => {
    it('should set a discount for a user type', () => {
      accountService.setDiscountForUserType('Standard', 10);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(10);
    });

    it('should overwrite the discount for a user type', () => {
      accountService.setDiscountForUserType('Standard', 10);
      accountService.setDiscountForUserType('Standard', 20);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(20);
    });
  });

  describe('setDiscountForProductType', () => {
    it('should set a discount for a product type for a user type', () => {
      accountService.setDiscountForProductType('Standard', 'Car', 15);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(15);
    });

    it('should combine the user and product type discounts correctly', () => {
      accountService.setDiscountForUserType('Standard', 10);
      accountService.setDiscountForProductType('Standard', 'Car', 15);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(25);
    });
  });

  describe('calculateTotalDiscount', () => {
    it('should return 0 if no discounts are set', () => {
      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(0);
    });

    it('should return only the user type discount if no product type discount exists', () => {
      accountService.setDiscountForUserType('Standard', 10);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(10);
    });

    it('should return only the product type discount if no user type discount exists', () => {
      accountService.setDiscountForProductType('Standard', 'Car', 15);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(15);
    });

    it('should correctly combine the user type and product type discounts', () => {
      accountService.setDiscountForUserType('Standard', 10);
      accountService.setDiscountForProductType('Standard', 'Car', 15);

      const result = accountService.calculateTotalDiscount('Standard', 'Car');
      expect(result).toBe(25);
    });
  });
});
