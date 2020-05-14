const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Miss ",
    name: { first: "Violet", last: " Min" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Female" },
    age: 27,
    email: "violet@violet.com",
    location: "Bothell, WA",
    picture: "https://picsum.photos/seed/picsum/55/55"

  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Mr. ",
    name: { first: "Danny ", last: " Benson" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "danny@danny.com",
    location: "NYC, NY",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Mrs. ",
    name: { first: "Carrie", last: " Elms" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "carrie@carrie.com",
    location: "Austin, TX",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471ui9",
    title: "Mrs. ",
    name: { first: "Shayla", last: " Trotsky" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "shayla@shayla.com",
    location: "Portland, OR",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718tr9",
    title: "Miss ",
    name: { first: "Sam", last: " Jettison" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "sam@sam.com",
    location: "Seattle, WA",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471ww9",
    title: "Mrs. ",
    name: { first: "Kaylee", last: " Castner" },
    gender: { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
    email: "kaylee@kaylee.com",
    location: "Anaheim, CA",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471832",
    title: "Mr. ",
    name: { first: "Boris", last: " Landon" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "boris@boris.com",
    location: "Chicago, IL",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471855",
    title: "Mr. ",
    name: { first: "Mihael", last: " Matthews" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "mihael@mihael.com",
    location: "Fresno, CA",
    picture: "https://picsum.photos/seed/picsum/55/55"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471833",
    title: "Mr. ",
    name: { first: "Cameron", last: " Fraser" },
    gender: { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
    email: "cameron@cameron.com",
    location: "Garden City, NY",
    picture: "https://picsum.photos/seed/picsum/55/55"
  }
];

export function getEmployees() {
  return employees;
}