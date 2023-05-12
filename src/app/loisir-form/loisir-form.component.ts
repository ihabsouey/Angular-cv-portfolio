import { Component } from '@angular/core';
import { LoisirService } from '../loisir.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loisir-form',
  templateUrl: './loisir-form.component.html',
  styleUrls: ['./loisir-form.component.css'],
})
export class LoisirFormComponent {
  loisirs: any[] = [];

  form!: FormGroup;

  selectedLoisirs: string[] = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private loisir: LoisirService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      titre: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loisir.add(this.selectedLoisirs);

    sessionStorage.setItem('cacheFromLoisir', 'false');
    this.location.back();
  }

  addLoisir() {
    const loisir = this.form.value.titre;
    loisir.split(';').forEach((element: any) => {
      if (
        element.trim() != '' &&
        !this.selectedLoisirs.includes(element.trim())
      )
        this.selectedLoisirs.push(element.trim());
    });

    this.form.get('titre')?.reset();
  }

  deleteLoisir(loisir: any) {
    const index = this.selectedLoisirs.indexOf(loisir);
    if (index >= 0) {
      this.selectedLoisirs.splice(index, 1);
    }
  }
}
