import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchForm: FormGroup;
  submitted = false;
  baseUrl = 'https://swapi.co/api'
  _data = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: ['']
    })
  }

  onSubmit(dropdown, search) {
    return (this.http.get(`${this.baseUrl}/${dropdown}/?search=${search}`))
    .subscribe(data => {
      this._data = data
    })
  }

  title = 'swapi';
}
