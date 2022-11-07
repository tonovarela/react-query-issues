import { useQuery } from "@tanstack/react-query"
import { useLabels } from './hooks/useLabel';


export const LabelPicker = () => {
  const { labelQuery } = useLabels();

  if (labelQuery.isLoading)
    return (      <p>Loading...</p>)

  return (
    <>

      {
        labelQuery.data?.map(({color,name,id}) => (
          
          <span key ={id}
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #${color}`, color: `#${color}` }}
          >
            {name}
          </span>
        ))
      }


    </>
  )
}
