import React from 'react'
import { useQuery } from '@apollo/client'
import { REACT_QUERY } from '../../components/RenderPage'
import { RichTextContent } from '@graphcms/rich-text-types'
import { MyItem } from '../../components/MyItem'
import MyGrid from '../../components/MyGrid'
import { filteredData } from '../../utils/searchFilter'

const ReactPage: React.FC<{ search?: string }> = ({ search }) => {
   const { loading, error, data } = useQuery(REACT_QUERY)

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error :(</p>

   const newData = filteredData(data.reactPageItems, 'reactPageItem', search)
   return (
      <MyGrid>
         {newData.map((e: { reactPageItem: { raw: RichTextContent } }) => (
            <MyItem content={e.reactPageItem.raw} />
         ))}
      </MyGrid>
   )
}

export default ReactPage
