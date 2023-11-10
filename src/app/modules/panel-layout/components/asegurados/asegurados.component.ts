import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaListService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-asegurados',
  templateUrl: './asegurados.component.html',
  styleUrls: ['./asegurados.component.scss']
})
export class AseguradosComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
