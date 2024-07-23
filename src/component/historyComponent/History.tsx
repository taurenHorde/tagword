

import HistoryWarpPage from "./HistoryWrap"
import OptionPage from "./Option"


function HistoryPage(): JSX.Element {
    return <div className='flex column jc-start ai-center'>
        <OptionPage />
        <HistoryWarpPage />
    </div>
}



export default HistoryPage