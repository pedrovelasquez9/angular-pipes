import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DoublePipe } from "./common/pipes/double.pipe";
import { Jedis } from './common/interfaces/jedis';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "./common/pipes/search.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, DoublePipe, FormsModule, SearchPipe]
})
export class AppComponent {
  title = 'angular-custom-pipes';
  message = { msg: "Hola desde Programación en español" };
  date = new Date();
  number = 2;
  searchValue: string = '';
  jediOrder: Jedis[] = [
    { name: "Obi-wan Kenobi", rank: "master" },
    { name: "Yoda", rank: "master" },
    { name: "Anakin Skywalker", rank: "padawan" },
    { name: "Mace Windu", rank: "master" },
    { name: "Adi Galia", rank: "master" }
  ]
}
