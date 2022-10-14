function solveMaze(maze, x, y) {
    //Posición fuera del laberinto
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
        return false;
    }
    //Encontré la salida del laberinto
    if (maze[x][y] == 'S') {
        return true;
    }
    //Lugar con obstáculo encontrado
    if (maze[x][y] == '#') {
        return false;
    }
    //Detectamos que estamos volviendo sobre nuestros pasos
    if (maze[x][y] == 'C') {
        return false;
    }
    //Marco la posición actual como parte de la solución
    maze[x][y] = 'C';

    //Busco continuar el camino hacia el norte
    if (solveMaze(maze, x, y - 1) == true) {
        return true;
    }
    //Busco continuar el camino  hacia el oeste
    if (solveMaze(maze, x - 1, y) == true) {
        return true;
    }
    //Busco continuar el camino  hacia el sur
    if (solveMaze(maze, x, y + 1) == true) {
        return true;
    }
    //Busco continuar el camino  hacia el este
    if (solveMaze(maze, x + 1, y) == true) {
        return true;
    }
    //En caso de no poder continuar desmarco la posición para intentar un nuevo trazado
    maze[x][y] = '.';
    return false;
}

//Representación de un laberinto de pruebas
let maze = [
    ['I', '.', '.', '.', '#', '#'],
    ['#', '.', '#', '.', '.', '.'],
    ['#', '.', '#', '#', '.', '#'],
    ['.', '.', '#', '.', '#', '#'],
    ['#', '.', '.', '.', '#', 'S'],
    ['#', '.', '#', '.', '.', '.'],
];

//De encontrar un camino exitoso muestro su recorrido por consola
if (solveMaze(maze, 0, 0)) {
    console.log(maze);
} else {
    console.log('El laberinto no posee una salida partiendo de las coordenadas seleccionadas');
}
