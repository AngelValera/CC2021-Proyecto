## Elección y justificación del marco de pruebas 

A la hora de elegir una biblioteca de aserciones para un proyecto en Node.js, tenemos varias alternativas como son [Mocha](https://mochajs.org/), [Jasmine](https://jasmine.github.io/) o [Jest](https://jestjs.io/).

De la misma forma que hice a la hora de escoger la biblioteca de aserciones, decidí usar la web [NPM trend](https://www.npmtrends.com/mocha-vs-jasmine-vs-jest), en este caso podemos ver que el más popular es Jest, además de que es el que más estrellas de github tiene, seguido por Mocha.

Por otro lado, en la [guía de buenas prácticas](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/testingerrorflows.md) de Node.js que consulté en la que se recomendaba el uso de la biblioteca Chai, también se recomendaba el uso de Mocha.

Por tanto, después de echar un vistazo a Jest, finalmente me decante por usar el marco de pruebas **Mocha**. La decisión de debió en gran parte a tengo un poco de experiencia previa usando Mocha y a que pude encontar bastante documentación de cómo trabajar con mocha y Chai juntos.  