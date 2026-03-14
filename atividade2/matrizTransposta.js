function transporMatriz(A) {
    console.log("\nMatriz Original\n");
    console.table(A);

    if (A.length === 0) return;

    const numLinhas = A.length;
    const numColunas = A[0].length;
    let transposta = [];

    for (let j = 0; j < numColunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < numLinhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    console.log("\n\nMatriz Transposta\n");
    console.table(transposta);
}

const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizA);