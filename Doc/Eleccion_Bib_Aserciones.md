## Elección y justificación de la biblioteca de aserciones 

A la hora de elegir una biblioteca de aserciones para un proyecto en Node.js, tenemos varias alternativas como son la propia biblioteca de assert que contiene Node.js, [Chai](https://www.chaijs.com/), [Must.js](https://github.com/moll/js-must) o [should.js](https://github.com/shouldjs/should.js).

En un primer momento, pensé en utilizar la propia biblioteca de aserciones de Node ya que era la que mejor conocía, sin embargo, después de informarme sobre el resto y también después de comprobar en [NPM trend](https://www.npmtrends.com/chai-vs-expect.js-vs-should-vs-must), qué biblioteca es la más usada (sin tener en cuenta assert), durante los últimos 6 meses, pude ver que se trataba de la biblioteca **Chai**, por lo que me llamó bastante la atención y he decidido usarla. Además, en la página anterior podemos ver que Chai se encuentra recientemente actualizada. 

Otro punto a favor de usar Chai, es que se recomienda su uso en una de las guías de buenas prácticas de Node.js que he consultado, la cuál se encuentra en este [enlace](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/testingerrorflows.md). 

Además, como podemos ver en su web, [Chai](https://www.chaijs.com/) cuenta con capacidad para expresarse bien con el estilo BDD o bien con el estilo TDD, según nos interese. Y por último, otro motivo de usar Chai es que se puede utilizar en cualquier framework de testing de javascript. 