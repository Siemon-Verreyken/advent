'use client';
import styles from "./page.module.css";
import React, {ReactNode, useEffect, useState} from "react";
import Exercise1 from "@/app/Pages/exercise1";
import Exercise2 from "@/app/Pages/exercise2";
import Exercise3 from "@/app/Pages/exercise3";
import Exercise4 from "@/app/Pages/exercise4";
import Exercise5 from "@/app/Pages/exercise5";


const Pages: ReactNode[] = [
    Exercise1(),
    Exercise2(),
    Exercise3(),
    Exercise4(),
    Exercise5()
];

function DisplayPage(index: number) {
    return (
        <div className={styles.page}>
            {Pages[index]}
        </div>
    );
}

//To make sure the state change is recorded in the event listener
let pageNumber : number = 0;
export default function Home() {
    const [Page, SetPage] = useState(0)
    pageNumber = Page;
    useEffect(() => {
        window.addEventListener('keydown', event => {
            if (event.code.length == 0) return;
            if (event.code == "ArrowLeft") {
                const tempPage : number = pageNumber - 1;
                SetPage((tempPage) < 0 ? Pages.length - 1 : tempPage);
            } else if (event.code == "ArrowRight") {
                SetPage((pageNumber + 1) % Pages.length);
            }
        });
    }, []);

    return (
        DisplayPage(Page)
    );
}
