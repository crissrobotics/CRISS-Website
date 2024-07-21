import React from "react";
import "./facultycard.scss";
import ReactFlipCard from 'reactjs-flip-card';

export default function FacultyCard({ name, team }) {

    const styles = {
        front: { background: '#00275B', color: 'white'}
    };

    return (
        <div className="facultyCard">
            <ReactFlipCard
                direction="horizontal"
                frontStyle={styles.front}
                backStyle={styles.front}
                frontComponent={<div className="front">Hover me!</div>}
                backComponent={
                    <div className="back">
                        <div className="name">{name}</div>
                        <div className="team">{team}</div>
                    </div>
                }
            />
        </div>
    );
}
