import React from 'react'

interface Props {
    seeMore: boolean,
    setSeeMore: React.Dispatch<React.SetStateAction<boolean>>
}

const TabContent4 = ({ seeMore, setSeeMore }: Props) => {
    return (
        <div>TabContent4</div>
    )
}

export default TabContent4