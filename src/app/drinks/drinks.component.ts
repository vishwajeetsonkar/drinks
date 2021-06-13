import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DrinksService } from './drinks.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
  providers: [DrinksService]
})
export class DrinksComponent implements OnInit {

  drinks: any;
  search: any = '';
  categoryList: Array<any> = [];
  filteredDrinks: any;
  @ViewChildren("checkboxes")
  checkboxes!: QueryList<ElementRef>;

  constructor(private _drinks: DrinksService, private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this._drinks.getDrinks().subscribe((res: any) => { 
        this.drinks = res.drinks;
        this.filteredDrinks = this.drinks;
        this.getAllCategory();
      },
      (err: any) => {
        console.log(err)
      })
    }

    getAllCategory(): void {
      let drinks = this.drinks.map((drink: any) => drink.strCategory);
      drinks = [...new Set(drinks)];
      drinks = drinks.map((element: string) => {
        return {'label': element, 'value': element }
      });
      this.categoryList = drinks;
    }

    filterChange() {
      this.submit();
    }

    fetchSelectedCategory(): Array<any> {
      return this.checkboxes
      .filter((element) => element.nativeElement.checked === true)
      .map((e: any) => e.nativeElement.defaultValue);
    }

    submit(): void {
      let checkedDrinks = this.fetchSelectedCategory();
      checkedDrinks.length 
      ? this.filteredDrinks = this.drinks.filter((e: any) => checkedDrinks.includes(e.strCategory))
      : this.reset();
    }

    reset(): void {
      this.filteredDrinks = this.drinks;
      this.uncheckAll();
    }
    
    uncheckAll() {
      this.checkboxes.forEach((element) => {
        element.nativeElement.checked = false;
      });
    }
}
