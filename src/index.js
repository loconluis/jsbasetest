const cities = ["Ciudad de Mexico", "Ciudad de Guatemala", "Bogota", "Lima", "Buenos Aires"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
}

module.exports = randomString;