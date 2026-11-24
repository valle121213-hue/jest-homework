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

  it ("Вooks have the same title, the order of the list is preserved", ()=> {
     expect (
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Властелин Колец",
      ])
    ).toEqual([
       "Властелин Колец",
       "Властелин Колец", 
       "Гарри Поттер",
      ]);
});

});
