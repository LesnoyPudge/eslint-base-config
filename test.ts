const some = () => {
  console.log("wow");
  const o = { wow: "sdfsdfsdf", wow2: "qweqweqweqwe", qwe: "qweqweqwee" };

  const wow = (...p: any) => {};
  const wow2 = () => 5;

  wow(wow2());
};
