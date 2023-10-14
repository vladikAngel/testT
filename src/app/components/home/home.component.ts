import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDropdownSettings} from "ng-multiselect-dropdown";

interface OptionsInterface {
  items: Array<OptionItemsInterface>,
  totalCount: number
}

interface OptionItemsInterface {
  categoryId: number
  categoryName: string
  displayType: number
  id: number
  name: string
  order: number
  type: number
  values: Array<OptionValuesItemsInterface>
}

interface OptionValuesItemsInterface {
  id: number
  isSelected: boolean
  optionId: number
  optionName: string
  parentId: number
  parentName: string
  value: string
}

export interface IProduct {
  categoryId: number
  categoryName: string
  count: number
  description: string
  id: number
  images: Array<any>,
  isFavorite: boolean
  name: string
  optionValues: Array<any>
  price:8302.13
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: OptionsInterface = {items: [], totalCount: 0};
  filteredOptions: OptionsInterface = {items: [], totalCount: 0};
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  products: Array<IProduct> = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.setDropdownConfig();
    this.getOptions();
    this.getPopularProducts();
    this.getActionProducts()
  }

  getPopularProducts(): void {
    this.http.get<Array<IProduct>>('https://kupikolesa.it-trends.ru/api/product/Popular').subscribe(x => {
      this.products = x;
    })
  }
  getActionProducts(): void {
    this.http.get<Array<IProduct>>('https://kupikolesa.it-trends.ru/api/product/Popular').subscribe(x => {
      this.products = x;
    })
  }

  setDropdownConfig(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'value',
      enableCheckAll: false,
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Поиск',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getOptions(): void {
    this.http.get<OptionsInterface>('https://kupikolesa.it-trends.ru/api/Option/GetAll?categoryId=5&displayType=1').subscribe(x => {
      this.options = JSON.parse(JSON.stringify(x))
      this.filteredOptions = JSON.parse(JSON.stringify(x))
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
