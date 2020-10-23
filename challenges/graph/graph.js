class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // adjacency list (3rd method) : quick search, space effecient.
    /*
        vertex with neighbours 
        0 => [2]
        2 => [3,4]
        5 => []
        */
    this._adjacencyList = new Map();
  }


  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Vertex not found !!!');
    } else {
      // to cover the undirected
      //1->2 
      //2->1
      // get neighbours 
      const adjacencies = this._adjacencyList.get(startVertex);
      // add vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
    }

  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex) ) {
      console.log('vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('V ====> ', vertex);
      console.log('E ====> ', edge);
      return vertex, edge ;
    }
  }
  size() {
    if(this._adjacencyList.size) {
      return (this._adjacencyList.size);
    } else{
      return null;
    }   
  }

  bfs() {
        
  }

  dfs() {

  }

  pathTo() {

  }

}


const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight);
graph.addDirectedEdge(eight, seven);

graph.printAll();

module.exports = { Graph , Vertex , Edge } ;