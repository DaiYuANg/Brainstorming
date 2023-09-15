import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { BaseEntity } from './BaseEntity';

@EventSubscriber()
export class BaseEntitySubscriber
  implements EntitySubscriberInterface<BaseEntity>
{
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return BaseEntity;
  }

  beforeInsert(event: InsertEvent<BaseEntity>): Promise<any> | void {
    event.entity.createAt = new Date();
    console.log(`BEFORE BaseEntity INSERTED: `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<BaseEntity>): Promise<any> | void {
    event.databaseEntity.updateAt = new Date();
  }
}
