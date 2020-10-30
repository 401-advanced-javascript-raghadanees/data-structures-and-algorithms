'use strict';


const {Graph} = require('../graph/graph');
const {Queue} = require('../stacksAndQueues/stacks-and-queues');

class BFGragh extends Graph {

  constructor(){
    super();
  }

  breadthFirst(node) {
    if (node === undefined || node.value === undefined) {
      return null;
    }

    const q = new Queue();
    q.enqueue(node);

    const arr = [];
    while (q.front !== null) {
      const current = q.dequeue();
      if (arr.includes(current)) {
        continue;
      }
      arr.push(current);
      const n = this.getNeighbors(current);
      for (let i = 0; i < n.length; i++) {
        if (!arr.includes(n[i].node)) {
          q.enqueue(n[i].node);
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
}
  
module.exports = BFGragh;

//   BreadthFirst(start) {
//     let visited = new Set();
//     // let queue =[];
//     // queue.push(start);
//     let queue = [start];
//     visited.add(start);
      
//     while (queue.length > 0) {
//       let currentNode = queue.shift(); 
          
//       let neighbors = this.getNeighbours(currentNode);
//       console.log('neighbors...........',neighbors);
              
//       for (let neighbor of neighbors) {
//         let neighborNode = neighbor.vertex;
      
//         if(visited.has(neighborNode)) {
//           continue;
//         } else {
//           visited.add(neighborNode);
//         }
//         queue.push(neighborNode);
//       }
      
              
//     }
//     return visited;
//   }
// }

// let v1 = new Vertex('Pandora');
// let v2 = new Vertex('Arendelle');
// let v3 = new Vertex('Metroville');
// let v4 = new Vertex('Monstroplolis');
// let v5 = new Vertex('Narnia');
// let v6 = new Vertex('Naboo');


// let graph = new Graph();
// graph.addVertex(v1);
// graph.addVertex(v2);
// graph.addVertex(v3);
// graph.addVertex(v4);
// graph.addVertex(v5);
// graph.addVertex(v6);

// graph.addDirectedEdge(v1 ,v2);
// graph.addDirectedEdge(v2 ,v4);
// graph.addDirectedEdge(v2 ,v3);
// graph.addDirectedEdge(v3 ,v4);
// graph.addDirectedEdge(v3 ,v5);
// graph.addDirectedEdge(v3 ,v6);
// graph.addDirectedEdge(v6 ,v5);
// graph.addDirectedEdge(v4 ,v6);

// console.log(graph.BreadthFirst());