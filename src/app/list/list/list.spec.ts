import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

// Importar os módulos usados pelo componente standalone
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

// Mock do serviço, se o componente usar algum via injeção
import { ListService } from './list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    // Se o ListService é injetado, você pode criar um mock simples para o teste
    const listServiceMock = {
      getItems: () => [],
      addItem: jasmine.createSpy('addItem'),
      changeStatus: jasmine.createSpy('changeStatus'),
    };

    await TestBed.configureTestingModule({
      imports: [
        ListComponent,  // componente standalone
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
      ],
      providers: [
        { provide: ListService, useValue: listServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
