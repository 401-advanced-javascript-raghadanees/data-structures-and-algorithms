'use strict';
const { Graph, Vertex } = require('./graph');

describe('Graph----------------> ', () => {

  const graph = new Graph();

  const four = new Vertex(4);
  const five = new Vertex(5);
  const two = new Vertex(2);
  const one = new Vertex(1);


  it(' add node to the graph', () => {
    graph.addVertex(two);

    expect(graph._adjacencyList.has(two)).toBe(true);
  });


  it('add edge to the graph', () => {
    graph.addDirectedEdge(one, two);
    expect(graph._adjacencyList.entries()).toBeTruthy();
  });

  it('all nodes can be retrieved from the graph', () => {
    expect(graph.printAll()).toBeTruthy();
  });

  it('All appropriate neighbors can be retrieved', () => {
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addDirectedEdge(four, five);
    expect(graph.getNeighbours(four)[0].vertex.value).toBe(5);
  });


  it('The size is returned, (no. of nodes) in the graph ', () => {
    expect(graph.size()).toBe(3);

  });


  it('returning graph has one node and edge ', () => {
    const graph2 = new Graph();
    const fifty = new Vertex(50);
    graph2.addVertex(fifty);
    graph.addDirectedEdge(fifty, fifty);

    expect(graph2._adjacencyList.entries()).toBeTruthy();
    expect(graph2.size()).toBe(1);
  });


  it('An empty graph returns null', () => {
    const graph3 = new Graph();
            
    expect(graph3.size()).toBe(null);

  });

});