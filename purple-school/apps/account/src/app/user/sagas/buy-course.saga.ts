import { PurchaseState } from '@purple-school/interfaces';
import { RMQService } from 'nestjs-rmq';
import { UserEntity } from '../entity/user.entity';
import { BuyCourseSageState } from './buy-course.state';

export class BuyCourseSaga {
  private state: BuyCourseSageState;

  constructor(
    private user: UserEntity,
    private courseId: string,
    private rmqService: RMQService
  ) {}

  getState() {
    return this.state;
  }

  setState(state: PurchaseState, courseId: string) {
    switch (state) {
      case PurchaseState.Started:
        break;
      case PurchaseState.WaitingForPayment:
        break;
      case PurchaseState.Purchased:
        break;
      case PurchaseState.WaitingForPayment:
        break;
      default:
        break;
    }

    this.state.setContext(this);
    this.user.updateCourseStatus(courseId, state);
  }
}
