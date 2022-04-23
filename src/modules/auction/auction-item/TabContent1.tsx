/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

interface Props {
    seeMore: boolean,
    setSeeMore: React.Dispatch<React.SetStateAction<boolean>>
}

const TabContent1 = ({ seeMore, setSeeMore }: Props) => {
    return (
        <div>
            <h3 style={{ fontWeight: 'bold' }}>Cây sanh ngàn năm thế cực kỳ giá trị, vô cùng hiếm có</h3>
            <p>
                Nơi có tài sản:  Số 15, Dịch Vọng Hậu, Cầu Giấy, Hà Nội.
            </p>
            <p>
                Mô tả: Thân cây kim ngân có độ dẻo dai, bền chắc, chiều cao có thể lên tới 6m. Lá cây kim ngân xòe tán rộng như bàn tay, quanh năm xanh tốt.
            </p>
            <img src={require('../../../assets/images/item_image.png')} alt="image" />
            <p style={{ marginTop: '40px' }}>
                Hoa kim ngân màu kem, gồm những cánh to, nở về đêm và có hương thơm dịu nhẹ. Hoa cây kim ngân trong tự nhiên thường nở từ khoảng tháng 4-11 hàng năm, tuy nhiên với các giống cây kim ngân chủ yếu để làm cảnh như ngày nay thì sẽ hiếm thấy hoa nở hơn.
                Quả của cây kim ngân hình trứng, đường kính cỡ nửa gang tay, khi chín sẽ có màu vàng nâu, khi quả khô nứt rụng ra có khoảng 10-20 hạt.
                Hoa kim ngân màu kem, gồm những cánh to, nở về đêm và có h
            </p>
            {!seeMore && <div className="see-more" onClick={() => setSeeMore(true)}>
                Xem thêm
            </div>
            }
        </div>
    )
}

export default TabContent1