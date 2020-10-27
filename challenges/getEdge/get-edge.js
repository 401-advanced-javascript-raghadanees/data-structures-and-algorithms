'use strict';

const { Graph, Vertex } = require('../graph/graph.js');


function getEdges(graph, array) {
    var sum = 0 ;
    for (let i = 0; i < array.length; i++) {
        let neighbors = graph.getNeighbours(array[i]);
        neighbors.forEach(item => {
            if (item.vertex.value === array[i + 1].value) {
              sum += item.wight ;
                console.log('inside if>>', sum);
            }
        });
        // console.log('neighbors>>', neighbors);

    }
    if(sum > 0) {
        return `${true}  ${sum} `
    }
    else {
        return false ;
    }

}


const graph = new Graph();

const pandora = new Vertex('pandora');
const metroville = new Vertex('metroville');
const arendella = new Vertex('arendella');
const naboo = new Vertex('naboo');

graph.addVertex(pandora);
graph.addVertex(metroville);
graph.addVertex(arendella);
graph.addVertex(naboo);


graph.addDirectedEdge(pandora, metroville, 20);
graph.addDirectedEdge(pandora, arendella, 40);
graph.addDirectedEdge(arendella, naboo, 70);
graph.addDirectedEdge(naboo, pandora, 100);


let arr = [pandora, metroville]

console.log(getEdges(graph, arr));

module.exports = getEdges ;