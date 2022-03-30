function paintedHouse (input) {
    let houseHeightX = input[0];
    let lenghtHouseY = input[1];
    let heightHouseWallH = input[2];

    let sideWall = houseHeightX * lenghtHouseY;
    let window = 1.5 * 1.5; 
    let twoWalls = (2 * sideWall) - (2 * window); 
    let backWalls = houseHeightX * houseHeightX;
    let door = 1.2 * 2; 
    let sumBackandFront = (2 * backWalls) - door;
    let sumArea = twoWalls + sumBackandFront
    let greenDye = sumArea / 3.4;

    let rectangleTwo = 2 * (houseHeightX * lenghtHouseY);
    let triangleTwo = 2 * (houseHeightX * heightHouseWallH / 2);
    let sumArea2 = rectangleTwo + triangleTwo;
    let redDye = sumArea2 / 4.3;
    console.log(greenDye.toFixed(2));
    console.log(redDye.toFixed(2));
}
paintedHouse([6,10,5.2])