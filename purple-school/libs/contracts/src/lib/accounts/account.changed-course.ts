import { PurchaseState } from '@purple-school/interfaces';
import { IsString } from 'class-validator';
import { PaymentStatus } from '../payment/payment.check';

export namespace AccountChangedCourse {
  export const topic = 'account.changed-course.event';

  export class Request {
    @IsString()
    userId: string;

    @IsString()
    courseId: string;

    @IsString()
    state: PurchaseState;
  }
}
