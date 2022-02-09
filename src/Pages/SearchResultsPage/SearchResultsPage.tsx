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
         <AdditionalInfo search={search} />
         <Design search={search} />
         <Git search={search} />
         <Monday search={search} />
         <Tuesday search={search} />
         <Wednesday search={search} />
         <JSTS search={search} />
         <ReactPage search={search} />
         <StartPage search={search} />
      </>
   )
}
