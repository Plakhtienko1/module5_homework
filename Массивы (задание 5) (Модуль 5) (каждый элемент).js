function lostnums(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          console.log(arr[i]);
        }, 1000 * (i + 1));
    }
}

lostnums([4,8,15,16,23,42]);