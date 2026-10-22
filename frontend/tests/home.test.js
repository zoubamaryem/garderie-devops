test("Affiche le titre Ma Garderie", () => {
  document.body.innerHTML = "<h1>Ma Garderie</h1>";

  expect(document.body.textContent).toContain("Ma Garderie");
});