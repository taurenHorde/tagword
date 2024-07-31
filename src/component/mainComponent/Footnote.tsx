import './../../css/mainCss/Footnote.css'
import { ReduxAllType} from './../../type/Type';
import { useAppSelector } from './../../app/store';


function FootnotePage(): JSX.Element {
    const footnoteConversionData = useAppSelector((state: ReduxAllType) => state.footnoteConversionStoreSlice)
    return (
        <div className='FootnotePageWrap flex column jc-start ai-start'>
            <div className='footnoteBody flex column jc-start'>
                {footnoteConversionData.map((val, idx) => <div className='flex row jc-start ai-center' key={idx}>
                    <span>[{val.no}]</span>
                    <p>{val.footnote}</p>
                </div>
                )}
            </div>
        </div >
    )
}




export default FootnotePage