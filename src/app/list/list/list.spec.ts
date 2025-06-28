import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';


import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


import { ListService } from './list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    
    const listServiceMock = {
      getItems: () => [],
      addItem: jasmine.createSpy('addItem'),
      changeStatus: jasmine.createSpy('changeStatus'),
    };

    await TestBed.configureTestingModule({
      imports: [
        ListComponent, 
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
