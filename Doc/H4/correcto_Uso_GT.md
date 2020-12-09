## Uso correcto del gestor de tareas

### Travis

El gestor de tareas ha sido usado en el primer sistema de integración utilizado en el repositorio, el cual ha sido Travis.ci.

Como se puede comprobar en el fichero [.travis.yml](../../.travis.yml).

```yml
language: node_js
node_js:
  - "10"
  - "12"
  - "14"
before_install:
  - npm install grunt-cli
install:
  - grunt install
script:
  - grunt test
```
El gestor de tareas Grunt, se utiliza tanto para instalar las dependencias, mediante la orden `grunt install` como para ejecutar los test mediante la orden `grunt test`.

---
#### Referencias: