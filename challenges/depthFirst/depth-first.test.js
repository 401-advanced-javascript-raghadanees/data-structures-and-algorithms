'use strict';

let Depthfirst = require('./depth-first');
let Vertex = require('../graph/graph').Vertex;

describe('depth-first graph =======>', () => {


  const graph = new Depthfirst();

  const one = new Vertex('A');
  const two = new Vertex('B');
  const three = new Vertex('c');
  const four = new Vertex('D');
  const five = new Vertex('E');
  const six = new Vertex('F');
  const seven = new Vertex('G');
  const eight = new Vertex('H');
  

  graph.addVertex(one);
  graph.addVertex(two);
  graph.addVertex(three);
  graph.addVertex(four);
  graph.addVertex(five);
  graph.addVertex(six);
  graph.addVertex(seven);
  graph.addVertex(eight);

  graph.addDirectedEdge(one, four, 0);
  graph.addDirectedEdge(one, two, 0);
  graph.addDirectedEdge(two, three, 0);
  graph.addDirectedEdge(three, seven, 0);
  graph.addDirectedEdge(four, eight, 0);
  graph.addDirectedEdge(four, five, 0);
  graph.addDirectedEdge(eight, six, 0);


  it('depth-first output', () => {
    expect(graph.dfs(one)).toString('["A", "B", "C", "G", "D", "E", "H", "F"]');

  });
});