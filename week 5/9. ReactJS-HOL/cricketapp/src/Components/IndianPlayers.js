import React from "react";

export function ListofPlayers(props) {

    return (
        <ul>
            {props.players.map((item, index) => (
                <li key={index}>
                    Mr. {item.name} {item.score}
                </li>
            ))}
        </ul>
    );
}

export function Scorebelow70(props) {

    const result = props.players.filter(player => player.score < 70);

    return (
        <ul>
            {result.map((item, index) => (
                <li key={index}>
                    Mr. {item.name} {item.score}
                </li>
            ))}
        </ul>
    );
}

export function OddPlayers(IndianTeam) {

    const [first, second, third, fourth, fifth, sixth] = IndianTeam;

    return (
        <ul>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </ul>
    );
}

export function EvenPlayers(IndianTeam) {

    const [first, second, third, fourth, fifth, sixth] = IndianTeam;

    return (
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </ul>
    );
}

export function ListofIndianPlayers(props) {

    return (
        <ul>
            {props.IndianPlayers.map((item, index) => (
                <li key={index}>
                    Mr. {item}
                </li>
            ))}
        </ul>
    );
}