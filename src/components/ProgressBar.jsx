import {useState} from 'react';

export const ProgressBar = ({task, setTasks}) => {
    const [progress, setProgress] = useState (0); 

    let progressSize = Number(100 / task.length)

    const handleProgressBar = () => {

        {tasks &&
            tasks.map((task) => {
            if(progress < 100 && task[i].completed === true){
                setProgress(progress +progressSize)
            }
        })}
        
    }

    // const handleButtonClick = () => {
    //     if (progress < 100) {
    //         setProgress(progress +20); 
    //     }
    //     }
        
        const handleButtonReset = () => {
            setProgress (0);
        };

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
 <div
  className="progress-bar-fill" 
  style={{width: `${progress}%`, backgroundColor: getColor() }}
  >
    {" "}
    </div>
    </div>
    <div className= "progress-label">{progress}%</div>
    {/* <button onClick={handleButtonClick}>Progress</button> */}
    <button onClick={handleProgressBar}>Progress</button>
    <button onClick={handleButtonReset}>Reset</button>
    </div>
    );
};