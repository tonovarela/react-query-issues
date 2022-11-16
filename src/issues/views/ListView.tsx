import { useState } from 'react';
import { LoadingIcon } from '../../shared/components/loading-icon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';



export const ListView = () => {

  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  const {issuesQuery} = useIssues();

  const onChangeLabel = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter(label => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName])
      console.log(selectedLabels);

  }
   
  return (
    <div className="row mt-5">

      <div className="col-8">
        {
          issuesQuery.isLoading
          ?(<LoadingIcon></LoadingIcon>)
          :(<IssueList  issues={issuesQuery.data || []} />)
        }
        
      </div>

      <div className="col-4">
        <LabelPicker selectedLabels={selectedLabels} onChange={(labelName) => onChangeLabel(labelName)} />
      </div>
    </div>
  )
}
