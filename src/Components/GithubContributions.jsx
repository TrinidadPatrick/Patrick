import React from 'react'
import {GitHubCalendar} from "react-github-calendar";
import 'react-activity-calendar/tooltips.css';

const GithubContributions = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
        <h2 className='text-white text-3xl'>Github Contributions</h2>
        <div className='w-[90%] lg:w-full flex justify-center'>
        <GitHubCalendar
            theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
            }}
            style={{color: 'white', width: '100%'}}
            username="TrinidadPatrick"
            blockSize={15}
            showWeekdayLabels
            blockMargin={5}
            fontSize={16}
            renderBlock={(block, activity) => {
                return (
                <g>
                    {block}
                    <title>
                    {`${activity.count} contributions on ${activity.date}`}
                    </title>
                </g>
                );
            }}
        />
        </div>
    </div>
  )
}

export default GithubContributions