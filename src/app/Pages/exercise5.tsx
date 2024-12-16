'use client';
import React from "react";

export default function Exercise5() {
    function checkCorrect(numbers: number[], dict: Map<number, number>): boolean {
        return numbers.every((number: number, index: number): boolean =>
            numbers.splice(index).every((nextNumber: number): boolean => number != dict.get(nextNumber)))
    }

    const rulesInput: string = "47|53\n" +
        "97|13\n" +
        "97|61\n" +
        "97|47\n" +
        "75|29\n" +
        "61|13\n" +
        "75|53\n" +
        "29|13\n" +
        "97|29\n" +
        "53|29\n" +
        "61|53\n" +
        "97|53\n" +
        "61|29\n" +
        "47|13\n" +
        "75|47\n" +
        "97|75\n" +
        "47|61\n" +
        "75|61\n" +
        "47|29\n" +
        "75|13\n" +
        "53|13"
    const updateInput: string = "75,47,61,53,29\n" +
        "97,61,53,29,13\n" +
        "75,29,13\n" +
        "75,97,47,61,53\n" +
        "61,13,29\n" +
        "97,13,75,29,47"

    const updateDictionary: Map<number, number> = new Map<number, number>(rulesInput.split("\n").map(
        (value: string): [number, number] => {
            const temp: number[] = value.split("|").map(Number)
            return [temp[0], temp[1]]
        }))
    const input: number[][] = updateInput.split("\n").map((value: string): number[] => value.split(",").map((value: string): number => Number(value)))
    const correct: number[][] = input.filter((entry: number[]): boolean => checkCorrect(entry, updateDictionary))
    console.log(input)
    input.forEach((row: number[]) => console.log(row.map(toString).reduce((str, next) => str + next + ",", "")))
    console.log(correct)
    correct.forEach((row: number[]) => console.log(row.map(toString).reduce((str, next) => str + next + ",", "")))
    
    return (
        <React.Fragment>
            <h2>Exercise 5</h2>
            <p>{correct.map((values, index) => {
                return (<React.Fragment key={index}>
                    {values.map(
                        (value, valueIndex) => {
                            return (<React.Fragment key={index + " " + valueIndex}>
                                {(valueIndex === values.length / 2) ? <b>{value}</b> : value},
                            </React.Fragment>)
                        })} <br/>
                </React.Fragment>)
            })}</p>
        </React.Fragment>
    );
}
