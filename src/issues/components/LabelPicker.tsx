
import { FC } from "react";
import { LoadingIcon } from "../../shared/components/loading-icon";
import { useLabels } from '../hooks/useLabel';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void
}


export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const { labelQuery } = useLabels();

  if (labelQuery.isLoading)
    return (<LoadingIcon></LoadingIcon>)
  return (
    <>
      {
        labelQuery.data?.map(({ color, name, id }) => (
          <span key={id}
            className={`badge rounded-pill m-1 label-picker  ${selectedLabels.includes(name)?'label-active':''}`}
            onClick={ ()=> onChange(name)}
            style={{ border: `1px solid #${color}`, color: `#${color}` }}
          >
            {name}
          </span>
        ))
      }


    </>
  )
}
