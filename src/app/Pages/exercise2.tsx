'use client';
import React from "react";

export default function Exercise2() {
    const input: string[] = [
        "7 6 4 2 1",
        "1 2 7 8 9",
        "9 7 6 2 1",
        "1 3 2 4 5",
        "8 6 4 4 1",
        "1 3 6 7 9"
    ]

    //#region functions 
    function parseReport(report: string): number[] {
        return report.split(" ").map(data => Number(data))
    }

    function checkSortedAscending(arr: number[]): boolean {
        return arr.every((value: number, index: number, array: number[]): boolean =>
            index === 0 || value >= array[index - 1]);
    }

    function checkSortedDescending(arr: number[]): boolean {
        return arr.every((value: number, index: number, array: number[]): boolean =>
            index === 0 || value <= array[index - 1]);
    }

    function isWithinValueGap(report: number[], minValue: number, maxValue: number): boolean {
        return report.every((value: number, index: number, array: number[]): boolean => {
            const gap = Math.abs(value - array[index - 1]);
            return index === 0 || (gap <= maxValue && gap >= minValue)
        })
    }

    function checkReport(report: number[]): boolean {
        return (checkSortedAscending(report) || checkSortedDescending(report)) && isWithinValueGap(report, 1, 3)
    }

    //#endregion

    const reports: boolean[] = input.map(parseReport).map(checkReport)
    const safeReports: number = reports.map((bool: boolean): number => bool ? 1 : 0).reduce((count, next) => count + next, 0)
    return (
        <React.Fragment>
            <h2>Exercise 2</h2>
            <h4>A total of {safeReports} reports are safe</h4>
            {reports.map((isSafe: boolean, index: number) =>
                <React.Fragment key={"report" + index}>
                    <p>Report number {index + 1} is {isSafe ? "safe" : "unsafe"}</p>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
