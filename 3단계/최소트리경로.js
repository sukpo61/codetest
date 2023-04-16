function solution(n, edges, visitedges) {
  function getdepth(start, target, edges) {
    function buildGraph(edges) {
      const graph = {};
      for (let edge of edges) {
        const [from, to] = edge;
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from);
      }
      return graph;
    }

    function dfs(graph, start, target, depth = 0, visited = {}) {
      visited[start] = true;
      if (start === target) {
        return depth;
      }

      for (let neighbor of graph[start]) {
        if (!visited[neighbor]) {
          const result = dfs(graph, neighbor, target, depth + 1, visited);
          if (result !== null) {
            return result;
          }
        }
      }

      return null;
    }

    const graph = buildGraph(edges);

    const depth = dfs(graph, start, target);

    console.log("depth", depth);

    return depth;
  }

  function permutations(arr) {
    let result = [];

    function generatePermutations(currentPermutation, remainingElements) {
      if (remainingElements.length === 0) {
        result.push(currentPermutation);
      } else {
        for (let i = 0; i < remainingElements.length; i++) {
          const newPermutation = [...currentPermutation, remainingElements[i]];
          const newRemaining = [
            ...remainingElements.slice(0, i),
            ...remainingElements.slice(i + 1),
          ];
          generatePermutations(newPermutation, newRemaining);
        }
      }
    }

    generatePermutations([], arr);

    return result;
  }

  function createroot(arr) {
    let sample = permutations(arr);

    sample.map((e) => e.push(n));
    sample.map((e) => !e.includes(1) && e.unshift(1));

    return sample;
  }

  function getlength(arr) {
    let result = 0;

    arr.map((e, index) => {
      if (arr[index + 1]) {
        result = result + getdepth(e, arr[index + 1], edges);
      }
    });

    return result;
  }

  const root = createroot(visitedges);

  function getminlength() {
    let result = [];

    console.log("root", root);

    root.map((e) => {
      result.push(getlength(e));
    });

    return Math.min(...result);
  }

  return getminlength();
}

console.log(
  solution(
    6,
    [
      [1, 2],
      [1, 3],
      [3, 4],
      [3, 5],
      [4, 6],
    ],
    [2, 3, 5]
  )
);
