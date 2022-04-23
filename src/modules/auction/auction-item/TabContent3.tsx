import React from 'react'

interface Props {
    seeMore: boolean,
    setSeeMore: React.Dispatch<React.SetStateAction<boolean>>
}

const TabContent3 = ({ seeMore, setSeeMore }: Props) => {
    return (
        <div>TabContent3</div>
    )
}

export default TabContent3