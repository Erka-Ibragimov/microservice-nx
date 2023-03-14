import { PurchaseState } from '@purple-school/interfaces';
import { RMQService } from 'nestjs-rmq';
import { UserEntity } from '../entity/user.entity';
import { BuyCourseSageState } from './buy-course.state';
import { BuyCourseSagaStateStarted } from './buy-course.steps';

export class BuyCourseSaga {
  private state: BuyCourseSageState;

  constructor(
    public user: UserEntity,
    public courseId: string,
    public rmqService: RMQService
  ) {}

  getState() {
    return this.state;
  }

  setState(state: PurchaseState, courseId: string) {
    switch (state) {
      case PurchaseState.Started:
        this.state = new BuyCourseSagaStateStarted();
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
