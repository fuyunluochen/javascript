const includesZeroGroups = Array.from(
    { length: 100 },
    () => Math.floor(Math.random() * 2),
);
const zeroGroupsAreNotIncluded = includesZeroGroups.filter((number) =>
    number != 0
);
console.log(zeroGroupsAreNotIncluded);