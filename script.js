function solveMaze(maze, x, y) {
    //Posición fuera del laberinto
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
        return false;
    }
    //Encontré la salida del laberinto
    if (maze[x][y] == 'G') {
        return true;
    }
    //Lugar con obstáculo encontrado
    if (maze[x][y] == '#') {
        return false;
    }
    if (maze[x][y] == '+') {
        return false;
    }
    //Marco la posición actual como parte de la solución
    maze[x][y] = '+';
    //Busco hacia el norte
    if (solveMaze(maze, x, y - 1) == true) {
        return true;
    }
    //Busco hacia el oeste
    if (solveMaze(maze, x - 1, y) == true) {
        return true;
    }
    //Busco hacia el sur
    if (solveMaze(maze, x, y + 1) == true) {
        return true;
    }
    //Busco hacia el este
    if (solveMaze(maze, x + 1, y) == true) {
        return true;
    }
    maze[x][y] = '.';
    return false;
}

let maze = [
    ['S', '.', '.', '.', '#', '#'],
    ['#', '.', '#', '.', '.', '.'],
    ['#', '.', '#', '#', '.', '#'],
    ['.', '.', '#', '.', '#', '#'],
    ['#', '.', '.', '.', '#', 'G'],
    ['#', '.', '#', '.', '.', '.'],
];

if (solveMaze(maze, 0, 0)) {
    console.log(maze);
} else {
    console.log('El laberinto no posee una salida partiendo de las coordenadas seleccionadas');
}
