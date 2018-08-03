import Polyglot from 'node-polyglot';

const polyglot = new Polyglot();

let { t, extend } = polyglot;

t = t.bind(polyglot);
extend = extend.bind(polyglot);

export { t, extend };
