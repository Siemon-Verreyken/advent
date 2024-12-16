'use client';
import React from "react";

export default function Exercise3() {
    function parseInstructions(
        instructions: string,
        instruction: string,
        expectedNumbers: number,
        maxNumberLength: number,
        startCharacter: string = "(",
        endCharacter: string = ")",
        splitCharacter: string = ","): number[][] {
        const minLength: number = expectedNumbers + 2;
        const array: number[][] = []
        const instructionArr: string[] = instructions.split(instruction)
        for (let index = 0; index < instructionArr.length; index++) {
            if (index == 0 && !(instructions.substring(0, instruction.length) === instruction)) continue;
            if (instructionArr[index].length < minLength) continue
            if (instructionArr[index][0] != startCharacter) continue
            const endIndex: number = instructionArr[index].indexOf(endCharacter, minLength - 1)
            if (endIndex == -1) continue
            const numberStrings: string[] = instructionArr[index].substring(1, endIndex).split(splitCharacter)
            if (numberStrings.length != expectedNumbers) continue
            if (!numberStrings.every(numString => numString.length <= maxNumberLength)) continue
            const numbers: number[] = numberStrings.map(Number)
            if (!numbers.every(num => !isNaN(num))) continue
            array.push(numbers);
        }
        return array
    }

    const instructions: string = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
    const parsedInstructions: number[][] = parseInstructions(instructions, "mul", 2, 3);
    const solutions: number[] = parsedInstructions.map((numbers: number[]): number => 
        numbers.reduce((total, next) => total * next, 1))
    const sum: number = solutions.reduce((sum: number, next: number): number => sum + next, 0)
    return (
        <React.Fragment>
            <h2>Exercise 3</h2>
            <h4>The total equals {sum}</h4>
            {solutions.map((value: number, index: number) =>
                <React.Fragment key={"multReport" + index}>
                    <p>Multiplication {index + 1}: {value}</p>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
