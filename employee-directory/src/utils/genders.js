export const genders = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" }
];

export function getGenders() {
  return genders.filter(g => g);
}