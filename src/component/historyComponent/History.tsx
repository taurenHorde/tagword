import HistoryWarpPage from "./HistoryWrap"
import OptionPage from "./Option"

function HistoryPage(): JSX.Element {
    return <div className='flex column jc-start ai-center'
        style={{ width: '100%' }}>
        <OptionPage />
        <HistoryWarpPage />
    </div>
}



export default HistoryPage