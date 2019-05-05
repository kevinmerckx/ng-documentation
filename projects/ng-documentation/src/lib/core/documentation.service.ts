import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENTATION_PATH } from '../documentation.token';

export interface InputType {
    name: string;
    description: string;
    type?: string;
    defaultValue: string;
}

export interface OutputType {
    name: string;
    description: string;
    type: string;
    defaultValue: string;
}

export interface MethodType {
    name: string;
    returnType: string;
}

export interface ComponentDocumentation {
    name: string;
    selector: string;
    description: string;
    inputsClass: Array<InputType>;
    outputsClass: Array<OutputType>;
    methodsClass: Array<MethodType>;
    accessors: {[id: string]: {
        name: string
        getSignature: {
            returnType: string
        }
    }};
}

export interface Documentation {
    directives: Array<ComponentDocumentation>;
    components: Array<ComponentDocumentation>;
}

@Injectable({
    providedIn: 'root'
})
export class DocumentationService {
    private documentationSubject = new BehaviorSubject<Documentation>(undefined);

    get documentation() {
        return this.documentationSubject.value;
    }

    get documentation$() {
        return this.documentationSubject.asObservable();
    }

    constructor(
        private http: HttpClient,
        @Optional() @Inject(DOCUMENTATION_PATH) documentationPath
    ) {
        this.http.get(documentationPath || 'assets/documentation/documentation.json')
        .subscribe((c: any) => {
          this.documentationSubject.next(c);
        });
    }

    getComponentDocumentation$(name: string, type: keyof Documentation) {
        return this.documentationSubject.pipe(
            map(documentation => {
                if (!documentation) {
                    return undefined;
                } else {
                    return documentation[type].find(d => d.name === name);
                }
            })
        );
    }

    getComponentDocumentation(name: string, type: keyof Documentation) {
        if (!this.documentation) {
            return undefined;
        } else {
            const result = this.documentation[type].find(d => d.name === name);
            if (result) {
                return result;
            }
            throw new Error('Not found: ' + name);
        }
    }

    getInputType(options: {
        componentId: string
        componentType: keyof Documentation
        input: InputType
    }): Observable<string> {
        return this.getComponentDocumentation$(options.componentId, options.componentType)
            .pipe(map(d => {
                const defaultResult = options.input.type;
                if (!d.accessors) {
                    if (!defaultResult) {
                        return this.getTypeFromDefaultValue(options.input.defaultValue);
                    }
                    return defaultResult;
                }
                const acc = d.accessors[options.input.name];
                if (acc) {
                    return acc.getSignature.returnType;
                } else {
                    return defaultResult;
                }
            }));
    }

    getTypeFromDefaultValue(defaultValue: string) {
        if (defaultValue === 'false' || defaultValue === 'true') {
            return 'boolean';
        }
        throw new Error('Type not found');
    }
}
