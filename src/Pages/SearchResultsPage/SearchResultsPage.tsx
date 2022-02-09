import React from 'react'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import Design from '../Design/Design'
import Git from '../Git/Git'
import Monday from '../InterviewQuestions/Monday'
import Tuesday from '../InterviewQuestions/Tuesday'
import Wednesday from '../InterviewQuestions/Wednesday'
import JSTS from '../JSTS/JSTS'
import ReactPage from '../ReactPage/ReactPage'
import StartPage from '../Start Page/StartPage'

type SearchResultsPageType = {
   search: string
}

export const SearchResultsPage: React.FC<SearchResultsPageType> = ({
   search,
}) => {
   return (
      <>
         <StartPage search={search} />
         <Monday search={search} />
         <Tuesday search={search} />
         <Wednesday search={search} />
         <Design search={search} />
         <JSTS search={search} />
         <ReactPage search={search} />
         <Git search={search} />
         <AdditionalInfo search={search} />
      </>
   )
}
