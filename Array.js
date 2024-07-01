class Arr {
  constructor(size, Arra, count) {
    this.Arra = new Array(size);
    this.size = size;
    this.count = 0;
  }

  insert(val) {
    if (this.count === this.Arra.length) {
      this.count = 0;
      const arr = new Array(this.Arra.length + 1);
      for (let i = 0; i <= this.Arra.length; i++) {
        arr[i] = this.Arra[i] || val;
        this.count++;
      }

      this.Arra = arr;
      this.size = arr.length;
    } else {
      this.Arra[this.count] = val;
      this.count++;
    }
  }

  remove(index) {
    if (index > -1 && index <= this.Arra.length) {
      let arr = new Array(this.Arra.length - 1);
      //   console.log(arr);
      for (let i = 0; i <= this.Arra.length - 1; i++) {
        if (index != i) {
          //   console.log("added", this.Arra[i]);
          if (i > index) {
            arr[i - 1] = this.Arra[i];
          } else {
            arr[i] = this.Arra[i];
          }
        } else {
          //   continue;
          console.log("Deleted", this.Arra[i]);
        }
      }
      console.log(arr);
      this.Arra = arr;
      this.size = arr.length;
      this.checkCount(this.Arra);
    } else {
      console.log("not a valid index to remove");
    }
  }

  checkCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        // console.log(arr[i], "true");
        count++;
      } else {
        console.log("false");
      }
    }
    return (this.count = count);
  }

  newRemove(index) {
    if (index > -1 && index <= this.Arra.length)
      for (let i = index; i < this.Arra.length - 1; i++) {
        this.Arra[i] = this.Arra[i + 1];
        // console.log(index, i, this.Arra[i]);
      }
    // this.length = this.Arra.length;
  }

  findIndex(val) {
    for (let i = 0; i <= this.Arra.length; i++) {
      if (val === this.Arra[i]) {
        return i;
      }
    }
    return -1;
  }

  maxi() {
    let max = 0;
    for (let i = 0; i < this.Arra.length; i++) {
      if (max < this.Arra[i]) {
        max = this.Arra[i];
        // console.log((max, this.Arra[i]));
      }
    }
    return max;
  }

  reverse() {
    const arr = new Array(this.Arra.length);
    for (let i = 0; i < this.Arra.length; i++) {
      arr[i] = this.Arra[this.Arra.length - 1 - i];
      //   console.log(this.Arra[i]);
      //   console.log(arr);
    }
    // console.log("test");
    return arr;
  }

  intersect(arr2) {
    console.log("intersect");
    for (let i = 0; i < this.Arra.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (this.Arra[i] === arr2[j]) {
          console.log(this.Arra[i]);
        }
      }
    }
  }

  insertAt(index, item) {
    // this.Arra[index] = item;
    for (let i = index; i < this.Arra.length; i++) {
      if (i === index) {
        this.Arra[i] = item;
      } else {
        this.Arra[i] = this.Arra[i];
      }
    }
  }

  print() {
    console.log(this.Arra);
    console.log(
      `len: ${this.Arra.length} count: ${this.count} size: ${this.size}`
    );
  }
}
const arr = [1, 2, 6, 3, 4];
const arrr = [1, 2, 3, 4, , , , 5];
const arr1 = new Arr(3);
console.log(arr1);
arr1.insert(1);
arr1.insert(2);
arr1.insert(3);
// arr1.checkCount(arr1.Arra);
arr1.findIndex(100);
arr1.insert(4);
arr1.insert(5);
arr1.insert(6);
arr1.insert(10);
arr1.insert(7);
arr1.insert(7);
console.log(arr1.reverse());
// console.log(arr1.findIndex(7));
console.log(arr1.maxi());
arr1.intersect(arr);
arr1.insertAt(1, 666);
// arr1.remove(3);
// arr1.remove(3);
// arr1.remove(3);
arr1.print();

// function testt(array) {
//   const arr2 = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(i, array.length - i);
//     // for (let j = array.length; j > i; j--) {
//     arr2[i] = array[array.length - 1 - i];
//     //   console.log(i, j);
//     // }
//     // console.log(i);
//   }
//   console.log(array, arr2);
// }

// // testt(arr1.Arra);
// testt(arr);
