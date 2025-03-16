const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

const compareArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

compareArr(arr1, arr2);

// array-object

let albums1 = [
  { artist: "Frank Zappa", title: "Over-Nite Sensation", year: 1973 },
  { artist: "Frank Zappa", title: "Apostrophe", year: 1974 },
  { artist: "Frank Zappa", title: "One Size Fits All", year: 1975 },
];

// print all artiest name
console.log(albums1[0].artist);
console.log(albums1[1].artist);
console.log(albums1[2].artist);

// print all title name
console.log(albums1[0].title);
console.log(albums1[1].title);
console.log(albums1[2].title);

// print all year name
console.log(albums1[0].year);
console.log(albums1[1].year);
console.log(albums1[2].year);
