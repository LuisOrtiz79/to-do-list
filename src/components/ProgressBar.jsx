import {useState, useEffect} from 'react';
//useEffect to make the change in the progress bar

export const ProgressBar = ({tasks}) => {
    const [progress, setProgress] = useState (0);

    const handleProgressBar = () => {
        let completed = 0;

        tasks.forEach((current) => current.completed ? completed += 1 : null);

        const total = Math.floor(100 / (tasks.length / completed));

        setProgress(total);
    };

    useEffect(() => {
        handleProgressBar();
    });

    const getColor = () => {
        if (progress < 40) {
            return "#ff0000";
        } else if (progress < 70) {
            return "#ffa500";
        } else {
            return "#2ecc71";
        }
    }
    
    return ( 
        <div className="container">
            <div className= "progress-bar">
                <div className="progress-bar-fill" style={{width: `${progress}%`, backgroundColor: getColor() }}>
                    {" "}
                </div>
            </div>

            <div className= "progress-label">{progress}% Completed</div>
        </div>
    );
};