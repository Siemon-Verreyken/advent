'use client';
import React from "react";

export default function Exercise1() {
    const list1: number[] = [3, 4, 2, 1, 3, 3]
    const list2: number[] = [4, 3, 5, 3, 9, 3]
    const distance = list1.map((number, index) => Math.abs(number - list2[index]))
    const totalDistance: number = distance.reduce((sum, next) => sum + next, 0)
    return (
        <React.Fragment>
            <h2>Exercise 1</h2>
            <p>The total distance between the lists is: {totalDistance}</p>
        </React.Fragment>
    );
}
