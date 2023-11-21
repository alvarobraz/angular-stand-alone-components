import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getRouteParams } from 'src/app/helpers/get-rout-params';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  public form = this.formVuilder.group({
    email: ['alvarobraz83@gmail.com'],
    password: ['1234567']
  })

  public id = getRouteParams('id')

  constructor(
    private formVuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.form.value.email)
    console.log(this.form.value.password)
    // console.log(this.form.value.valor_nao_tipado_acusara_um_erro)

    console.log(this.id)
  }

}
