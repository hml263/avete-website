import React from 'react'
import {TeamType} from "./company"

interface TeamProps{
    team: TeamType
}

const TeamList:React.FC<TeamProps> = ({
    team
}) => {
  return (
    <div className="mx-3 mt-6 flex flex-col rounded-lg bg-secondary text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg mx-auto block"
        src={team.image_url}
        alt="CEO" width="400" height=""/>
    </a>
    <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight"> {team.name}</h5>
      <p className="mb-4 text-sm text-justify">
      {team.description}</p>
    </div>
    {/* <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      <small>Last updated 3 mins ago</small>
    </div> */}
  </div>
  )
}

export default TeamList