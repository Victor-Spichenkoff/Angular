import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatesPage } from './states-page';

describe('StatesPage', () => {
    let component: StatesPage;
    let fixture: ComponentFixture<StatesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StatesPage],
        }).compileComponents();

        fixture = TestBed.createComponent(StatesPage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
