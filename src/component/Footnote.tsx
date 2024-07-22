import './../css/Footnote.css'
import { ReduxAllType } from './../type/Type';
import { useAppSelector } from '../app/store';



function FootnotePage(): JSX.Element {
    
    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)

    return (
        <div className='FootnotePageWrap flex column jc-start ai-start'>
            <div className='footnoteHead' />
            <div className='footnoteBody flex column jc-start'>
                <div className='flex row jc-start ai-center'>
                    <span>[1]</span>
                    <p>투명드래곤의 크기는 2미터였다.</p>
                </div>
            </div>
        </div>
    )
}




export default FootnotePage