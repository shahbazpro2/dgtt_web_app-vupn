import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import ItemCard from "../../../common/components/ItemCard";
import ItemListCard from "../../../common/components/ItemListCard";
import { ItemCardStatus } from '../../../common/types/types'

interface AuctionListViewProps {
    type: "list" | "grid",
}

const AuctionListView = ({ type }: AuctionListViewProps) => {
    const [itemList, setItemList] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        let newList: React.ReactNode[] = [];
        if (type === "grid") {
            for (let i = 0; i < 12; i++) {
                newList.push(
                    <ItemCard status={ItemCardStatus.SUCCESS} />
                )
            }
        } else if (type === "list") {
            for (let i = 0; i < 6; i++) {
                newList.push(
                    <ItemListCard />
                )
            }
        }
        setItemList(newList);
    }, [type])

    return (
        <div style={{ marginTop: 25 }}>
            <Row gutter={[10, 10]} align="middle" justify="center">
                {itemList.map((item, index) => {
                    return (
                        <Col span={type === "grid" ? 8 : 24} key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {item}
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default AuctionListView;