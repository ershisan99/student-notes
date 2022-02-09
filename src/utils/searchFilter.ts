export function filteredData(data: Array<any>, itemName: any, search?: string) {
   return data.filter((e: any) => {
      return search
         ? e[itemName as keyof typeof e].text
              .toLowerCase()
              .includes(search.toLowerCase())
         : e[itemName as keyof typeof e].text
   })
}
