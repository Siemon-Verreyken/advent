'use client';
import React from "react";

class vector2 {
    posX: number = 0
    posY: number = 0
}

class line {
    startPos: vector2 = new vector2()
    endPos: vector2 = new vector2()
}

export default function Exercise4() {
    function find(grid: string[][], toFind: string, vertical: 0 | 1, horizontal: 0 | 1): line[] {
        const reverseDiagonal: 0 | 1 = (vertical + horizontal < 1) ? 1 : 0
        const reverse = toFind.split("").reverse().join("")
        const found: line[] = []
        const length = toFind.length - 1
        for (let yPos: number = length * reverseDiagonal;
             yPos < grid.length - (length * vertical);
             yPos++) {
            for (let xPos: number = 0;
                 xPos < grid[yPos].length - (length * horizontal);
                 xPos++) {
                let foundWord: string = ""
                for (let index: number = 0; index < toFind.length; index++) {
                    foundWord += grid[yPos + (index * (vertical - reverseDiagonal))][xPos + (index * (horizontal + reverseDiagonal))]
                }
                if (foundWord === toFind || foundWord === reverse) {
                    found.push({
                        startPos: {
                            posX: xPos,
                            posY: yPos
                        },
                        endPos: {
                            posX: xPos + (length * (horizontal + reverseDiagonal)),
                            posY: yPos + (length * (vertical - reverseDiagonal))
                        }
                    })
                }
            }
        }
        return found
    }

    function findAll(grid: string[][], toFind: string): line[] {
        return [
            ...find(grid, toFind, 1, 0), // vertical
            ...find(grid, toFind, 0, 1), // horizontal
            ...find(grid, toFind, 1, 1), // diagonal
            ...find(grid, toFind, 0, 0) // reverse-diagonal
        ]
    }

    const input: string =
        "MMMSXXMASM\n" +
        "MSAMXMSMSA\n" +
        "AMXSXMAAMM\n" +
        "MSAMASMSMX\n" +
        "XMASAMXAMM\n" +
        "XXAMMXXAMA\n" +
        "SMSMSASXSS\n" +
        "SAXAMASAAA\n" +
        "MAMMMXMMMM\n" +
        "MXMXAXMASX"
    const grid = input.split("\n").map(row => row.split(""))
    const found: line[] = findAll(grid, "XMAS")

    return (
        <React.Fragment>
            <h2>Exercise 4</h2>
            <h2>Found {found.length} matches!</h2>
            <p>
                {
                    found.map(line => "from (" + line.startPos.posX + ", " + line.startPos.posY + ") to ("
                        + line.endPos.posX + ", " + line.endPos.posY + ")\n")
                        .map((s, i) => <React.Fragment key={i}>{s}<br/></React.Fragment>)
                }
            </p>
        </React.Fragment>
    );
}
