import React from 'react'

interface Props {
    seeMore: boolean,
    setSeeMore: React.Dispatch<React.SetStateAction<boolean>>
}

const TabContent2 = ({ seeMore, setSeeMore }: Props) => {
    return (
        <div>TabContent2</div>
    )
}

export default TabContent2