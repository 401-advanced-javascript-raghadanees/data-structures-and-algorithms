'use strict';

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
    this._adjacencyList = new Map();
  }


  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Vertex not found !!!');
    } else {
      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }

  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('V ====> ', vertex);
      console.log('E ====> ', edge);
      return vertex, edge;
    }
  }
  size() {
    if (this._adjacencyList.size) {
      return (this._adjacencyList.size);
    } else {
      return null;
    }
  }

  BreadthFirst(start) {
    let visited = new Set();
    // let queue =[];
    // queue.push(start);
    let queue = [start];
    visited.add(start);
      
    while (queue.length > 0) {
      let currentNode = queue.shift(); 
          
      let neighbors = this.getNeighbours(currentNode);
      console.log('neighbors...........',neighbors);
              
      for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;
      
        if(visited.has(neighborNode)) {
          continue;
        } else {
          visited.add(neighborNode);
        }
        queue.push(neighborNode);
      }
      
              
    }
    return visited;
  }
}

let v1 = new Vertex('Pandora');
let v2 = new Vertex('Arendelle');
let v3 = new Vertex('Metroville');
let v4 = new Vertex('Monstroplolis');
let v5 = new Vertex('Narnia');
let v6 = new Vertex('Naboo');


let graph = new Graph();
graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);
graph.addVertex(v6);

graph.addDirectedEdge(v1 ,v2);
graph.addDirectedEdge(v2 ,v4);
graph.addDirectedEdge(v2 ,v3);
graph.addDirectedEdge(v3 ,v4);
graph.addDirectedEdge(v3 ,v5);
graph.addDirectedEdge(v3 ,v6);
graph.addDirectedEdge(v6 ,v5);
graph.addDirectedEdge(v4 ,v6);

console.log(graph.BreadthFirst());