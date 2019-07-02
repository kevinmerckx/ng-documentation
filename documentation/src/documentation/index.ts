import { Rule, SchematicContext, Tree, chain, externalSchematic } from '@angular-devkit/schematics';
import * as path from 'path';
import * as fs from 'fs';

export function documentation(options: any): Rule {
  options.name = options['--'][0];
  options.skipTests = true;
  options.skipInstall = true;
  options.minimal = true;
  return (_1: Tree, _2: SchematicContext) => {
    return chain([
      externalSchematic('@schematics/angular', 'application', options),
      (tree) => {
        const angularJson = JSON.parse((tree.read('angular.json') as Buffer).toString());
        const projectRoot = angularJson.newProjectRoot + '/test-docs';
        tree.create(
          path.join(projectRoot, 'src', 'app', 'shared', 'shared.module.ts'),
          fs.readFileSync(path.join(__dirname, '../files/shared.module.ts.template'))
        );
        return tree;
      },
      externalSchematic('@schematics/angular', 'module', {
        name: 'shared',
        project: options.name
      })
    ]);
  };
}
