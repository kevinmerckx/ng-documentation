import { Component, Input, OnChanges } from '@angular/core';
import { CoreInputType, CoreMethodType, CoreOutputType } from 'core-documentation/dist/types/components/core-component-api/core-component-api';
import { Observable, of, forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ComponentDocumentation, DocumentationService, InputType, MethodType, OutputType } from '../documentation.service';

/**
 * Displays the component API: inputs, outputs and methods.
 */
@Component({
  selector: 'docs-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.sass']
})
export class ComponentApiComponent implements OnChanges {
  @Input() componentId: string;
  @Input() componentType: 'components' | 'directives';

  documentation$: Observable<ComponentDocumentation>;
  selector$: Observable<string>;

  coreInputs$: Observable<CoreInputType[]>;
  coreOutputs$: Observable<CoreOutputType[]>;
  coreMethods$: Observable<CoreMethodType[]>;

  constructor(
    private documentation: DocumentationService
  ) { }

  /**
   * @ignore
   */
  ngOnChanges() {
    this.documentation$ = this.documentation.getComponentDocumentation$(this.componentId, this.componentType);
    this.selector$ = this.documentation$.pipe(map(d => d ? d.selector : ''));
    const getInputObservable = (input: InputType): Observable<CoreInputType> => {
      return this.getInputType(input).pipe(
        map(theType => {
          return {
            name: input.name,
            defaultValue: input.defaultValue,
            description: input.description,
            type: theType
          };
        })
      );
    };
    this.coreOutputs$ = this.documentation$
      .pipe(
        map(d => d ? d.outputsClass || [] : []),
        map(sortByName)
      );
    this.coreMethods$ = this.documentation$
      .pipe(
        map(d => d ? d.methodsClass || [] : []),
        map(sortByName)
      );
    this.coreInputs$ = this.documentation$
      .pipe(
        map(d => d ? d.inputsClass || [] : []),
        map(sortByName),
        switchMap(inputs => {
          return forkJoin(
            inputs.map(input => getInputObservable(input))
          );
        }),
        tap(inputs => {
          console.log(inputs);
        })
      );
  }

  stringify(a: any): string {
    return JSON.stringify(a);
  }

  /**
   * @ignore
   */
  getInputType(input: InputType): Observable<string> {
    return this.documentation.getInputType({
      componentId: this.componentId,
      componentType: this.componentType,
      input
    });
  }
}

function sortByName<T extends { name: string }>(arr: T[]): T[] {
  const result = (arr || []).slice(0);
  result.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
}
