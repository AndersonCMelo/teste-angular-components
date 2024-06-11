import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  options = [
    { label: 'Aveiro', value: 'Aveiro' },
    { label: 'Beja', value: 'Beja' },
    { label: 'Braga', value: 'Braga' },
    { label: 'Bragança', value: 'Bragança' },
    { label: 'Castelo Branco', value: 'Castelo Branco' },
    { label: 'Santarém', value: 'Santarém' },
    { label: 'Setúbal', value: 'Setúbal' },
    { label: 'Viana do Castelo', value: 'Viana do Castelo' },
    { label: 'Vila Real e Viseu', value: 'Vila Real e Viseu' },
    { label: 'Coimbra', value: 'Coimbra' },
    { label: 'Évora', value: 'Évora' },
    { label: 'Faro', value: 'Faro' },
    { label: 'Guarda', value: 'Guarda' },
    { label: 'Leiria', value: 'Leiria' },
    { label: 'Lisboa', value: 'Lisboa' },
    { label: 'Portalegre', value: 'Portalegre' },
    { label: 'Porto', value: 'Porto' },
  ]
}
