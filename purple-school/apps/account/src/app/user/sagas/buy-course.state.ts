import { PaymentStatus } from '@purple-school/contracts';
import { UserEntity } from '../entity/user.entity';
import { BuyCourseSaga } from './buy-course.saga';

export abstract class BuyCourseSageState {
  public saga: BuyCourseSaga;
  public setContext(saga: BuyCourseSaga) {
    this.saga = saga;
  }

  public abstract pay(): Promise<{ paymentLink: string; user: UserEntity }>;
  public abstract checkPayment(): Promise<{
    user: UserEntity;
    status: PaymentStatus;
  }>;
  public abstract cancel(): Promise<{ user: UserEntity }>;
}
