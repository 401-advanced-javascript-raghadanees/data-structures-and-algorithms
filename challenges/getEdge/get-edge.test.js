const getEdges = require('./get-edge');
const { Graph, Vertex } = require('../graph/graph.js');

describe('getEdges function........', () => {

    const graph = new Graph();

    const pandora = new Vertex('pandora');
    const metroville = new Vertex('metroville');
    const arendella = new Vertex('arendella');
    const naboo = new Vertex('naboo');

    graph.addVertex(pandora);
    graph.addVertex(metroville);
    graph.addVertex(arendella);
    graph.addVertex(naboo);


    graph.addDirectedEdge(pandora, metroville, 300);
    graph.addDirectedEdge(pandora, arendella, 40);
    graph.addDirectedEdge(arendella, naboo, 70);
    graph.addDirectedEdge(naboo, pandora, 100);



    it('should give a falsy response to a one-node graph argument', () => {
        let arr = [pandora, metroville]

        const result = getEdges(graph, arr);

        expect(result).toEqual(false);
    });
    it('should give a falsy response to a non-graph argument', () => {

        let arr = [arendella, metroville]

        const result = getEdges(graph, arr);

        expect(result).toEqual(false);
    });


});