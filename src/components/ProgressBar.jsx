import {useState} from 'react';
//useEffect to make the change in the progress bar

export const ProgressBar = ({tasks, setTasks}) => {
    const [progress, setProgress] = useState (0); 

    // let progressSize = Number(100 / tasks.length)

    const handleProgressBar = () => {
        let completed = 0

        tasks.forEach((current) => current.completed ? completed += 1 : null)

        const total = 100 / (tasks.length / completed)

        setProgress(total)
        // let total = 0;

        // {tasks &&
        //     tasks.map((task) => {
        //     if(progress < 100 && task.completed === true){
        //         total++
        //     }
        // })}

        // setProgress(progress +(100/total));


        //for each marked completed increment a total and then add it to the progressbar
        //create a total variable
        //added it to the setProgess at the end after getting the total
        
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