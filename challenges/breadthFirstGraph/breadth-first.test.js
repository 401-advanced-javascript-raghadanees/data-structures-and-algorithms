'use strict';
// const { Vertex } = require('../graph/graph');//
const { Node } = require('../stacksAndQueues/stacks-and-queues');
const BFGraph = require('./breadth-first');
const log = jest.spyOn(global.console, 'log').mockImplementation(() => { });

let pandora = new Node('Pandora');
let arendelle = new Node('Arendelle');
let monstropolis = new Node('Monstropolis');
let metroville = new Node('Metroville');
let naboo = new Node('Naboo');
let narnia = new Node('Narnia');

describe('breadthFirst---------', () => {

  it('returns null if the graph is empty', () => {
    const graph = new BFGraph();
    const result = graph.breadthFirst();
    expect(result).toBeNull();
  });
  it('logs each value', () => {
    log.mockClear();
    const graph = new BFGraph();

    const a = graph.addVertex(pandora);
    const b = graph.addVertex(arendelle);
    const c = graph.addVertex(monstropolis);
    const d = graph.addVertex(metroville);
    const e = graph.addVertex(naboo);
    const f = graph.addVertex(narnia);
    
    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(b, d);
    graph.addDirectedEdge(c, d);
    graph.addDirectedEdge(c, e);
    graph.addDirectedEdge(c, f);
    graph.addDirectedEdge(d, f);
    graph.addDirectedEdge(e, f);

    expect(log).toHaveBeenCalledWith('Vertex not found !!!');

    log.mockClear();
  });
});