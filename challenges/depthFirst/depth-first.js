'use strict';

let { Graph , Vertex } = require('../graph/graph');


class Depthfirst extends Graph {

  constructor() {
    super();
  }

  depthfirst(node) {

    let arr = [];
    let complete = [];
    arr.push(node);
    

    while (arr.length > 0) {
      let current = arr.pop();
      complete.push(current.value);
      let neighbour = this.getNeighbours(current);

      for (let k of neighbour) {
        if (!arr.includes(k.vertex))
          arr.push(k.vertex);
      }
      console.log(arr);

    }
    return complete;

  }
}


const graph = new Depthfirst() ;
const one = new Vertex('A');
const two = new Vertex('B');
const three = new Vertex('c');
const four = new Vertex('D');
const five = new Vertex('E');
const six = new Vertex('F');
const seven = new Vertex('G');

graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(six);
graph.addVertex(seven);


graph.addDirectedEdge(one,two ,'$20');
graph.addDirectedEdge(one,five);
graph.addDirectedEdge(two,four);
graph.addDirectedEdge(three,one);
graph.addDirectedEdge(four,five);
graph.addDirectedEdge(five,six);

graph.addDirectedEdge(seven,seven);


console.log('>>',graph.depthfirst(four));


module.exports = Depthfirst;