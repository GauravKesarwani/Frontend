function findPosition(pos) {
    let x = pos[0];
    let y = pos[1];

    let left = [x, --y];
    let right = [x, ++y];
    let top = [--x, y];
    let bottom = [++x, y];

    console.log(x, y);
    console.log(left);
    console.log(right);
    console.log(top);
    console.log(bottom);
}


findPosition([3, 1]);