import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { ListService } from './list.service';
import { ListItem, Status } from './list-item.model';

@Component({
  standalone: true,
  selector: 'app-list',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  filter: Status | 'todos' = 'todos';
  editingId: number | null = null;
  form = new FormGroup({
  title: new FormControl<string | null>('', Validators.required),
  description: new FormControl<string | null>(''),
  status: new FormControl<Status | null>('pendente'),
});

editForm = new FormGroup<{
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  status: FormControl<Status | null>;
}>({
  title: new FormControl<string | null>('', Validators.required),
  description: new FormControl<string | null>(''),
  status: new FormControl<Status | null>('pendente'),
});


  constructor(public service: ListService) {}

  get filteredItems() {
    return this.filter === 'todos'
      ? this.service.getItems()
      : this.service.getItems().filter(i => i.status === this.filter);
  }

  addItem() {
    if (this.form.valid) {
      this.service.addItem(this.form.value as Omit<ListItem, 'id'>);
      this.form.reset({ status: 'pendente' });
    }
  }

  startEdit(item: ListItem) {
    this.editingId = item.id;
    this.editForm.setValue({
      title: item.title,
      description: item.description ?? '',
      status: item.status,
    });
  }

  cancelEdit() {
    this.editingId = null;
  }

  saveEdit() {
    if (this.editForm.valid && this.editingId !== null) {
      this.service.updateItem(this.editingId, this.editForm.value as Partial<Omit<ListItem, 'id'>>);
      this.editingId = null;
    }
  }

  deleteItem(id: number) {
    if (confirm('Confirma remoção do item?')) {
      this.service.removeItem(id);
    }
  }

  changeStatus(id: number) {
    const statuses: Status[] = ['pendente', 'em andamento', 'feito'];
    const item = this.service.getItems().find(i => i.id === id);
    if (item) {
      const next = statuses[(statuses.indexOf(item.status) + 1) % statuses.length];
      this.service.changeStatus(id, next);
    }
  }
}
