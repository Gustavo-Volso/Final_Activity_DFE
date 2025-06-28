import { Injectable } from '@angular/core';
import { ListItem, Status } from './list-item.model';

@Injectable({ providedIn: 'root' })
export class ListService {
  private items: ListItem[] = [];
  private idCounter = 1;

  getItems() {
    return this.items;
  }

  addItem(item: Omit<ListItem, 'id'>) {
    this.items.push({ ...item, id: this.idCounter++ });
  }

  updateItem(id: number, updated: Partial<Omit<ListItem, 'id'>>) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      Object.assign(item, updated);
    }
  }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  changeStatus(id: number, status: Status) {
    const item = this.items.find(i => i.id === id);
    if (item) item.status = status;
  }
}
