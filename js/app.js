const canvas = document.getElementById("myCanvas");

canvas.width = 600;
canvas.height = 600;

const ctx = canvas.getContext("2d");

const p1 = new Point(200, 200);
const p2 = new Point(500, 200);
const p3 = new Point(400, 400);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p1, p3);
const s3 = new Segment(p1, p4);
const s4 = new Segment(p2, p3);

function addRandomPoint() {
  const success = graph.tryAddPoint(
    new Point(Math.random() * canvas.width, Math.random() * canvas.height),
  );

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
  console.log("success", success);
}

function addRandomSegment() {
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);
  let success = false;

  if (index1 != index2) {
    success = true;
    graph.tryAddSegment(
      new Segment(graph.points[index1], graph.points[index2]),
    );
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
  console.log("success", success);
}

const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3, s4]);
graph.draw(ctx);
