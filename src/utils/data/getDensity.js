
const A = 86710969050178.5,
  B = 9.41268203527779,
  C = A / B,
  D = 1 - C

function getDensity(t) {
    return C + D*Math.pow(Math.E, -B*t)
}

export default getDensity