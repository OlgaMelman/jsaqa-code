const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("The function should throw TypeError without parametrs", () => {
    expect(() => sorting.sortByName()).toThrow();
  });

  
  it("The function should throw TypeError with one parametr", () => {
    expect(() => sorting.sortByName("Золотая рыбка")).toThrow()
  })


  it("Identical book titles should not be sorted", () => {
    expect(
      sorting.sortByName([
        "Золушка",
        "Золушка",
      ])
    ).toEqual([
      "Золушка",
      "Золушка",
      ]);
  });

});
