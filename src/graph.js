/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const vertex = new GraphNode({ value, edges });
    this.vertices.push(vertex);
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], vertex);
    } else {
      for (let i = 0; i < edges.length; i++) {
        edges[i].pushToEdges(vertex);
      }
    }
    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) return true;
    } return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  removeVertex(value) {
    if (this.contains(value)) {
      for (let i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].value === value) {
          this.vertices.splice(i, 1);
          i--;
        } else {
          const verts = this.vertices[i].edges;
          for (let j = 0; j < verts.length; j++) {
            if (verts[j].value === value) {
              verts.splice(j, 1);
            }
          }
        }
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let fromToTo = false;
    let toToFrom = false;
    const from = fromVertex.edges;
    const to = toVertex.edges;
    for (let i = 0; i < from.length; i++) {
      if (from[i] === toVertex) {
        fromToTo = true;
      }
    }
    for (let i = 0; i < to.length; i++) {
      if (to[i] === fromVertex) {
        toToFrom = true;
      }
    }
    return (fromToTo && toToFrom);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    const from = fromVertex.edges;
    const to = toVertex.edges;
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      for (let i = 0; i < from.length; i++) {
        if (from[i] === toVertex) {
          from.splice(i, 1);
        }
      }
      for (let i = 0; i < to.length; i++) {
        if (to[i] === fromVertex) {
          to.splice(i, 1);
        }
      }
    } if (fromVertex.edges.length === 0) {
      this.removeVertex(fromVertex.value);
    } if (toVertex.edges.length === 0) {
      this.removeVertex(toVertex.value);
    }
  }
}
module.exports = Graph;
