function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = top_calculateDistance();
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateTime() {}
}

function top_calculateDistance() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) {}
  function radians(degrees) {}
}
