import { Button, Modal, Result } from "antd";
import { ReactComponent as SuccessIcon } from '../../../assets/images/success.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/images/error.svg';

interface ModalProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    status: "success" | "error",
    okText?: string,
    cancelText?: string,
    title: React.ReactNode,
    noCancelButton?: boolean
}

const iconMap = {
    success: <SuccessIcon />,
    error: <ErrorIcon />
}

const ConfirmModal = ({ visible, onOk, onCancel, status, okText, cancelText, title, noCancelButton }: ModalProps) => {
    return (
        <Modal
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            footer={false}
            className="custom-modal"
        >
            <Result
                icon={iconMap[status]}
                title={title}
                extra={[
                    ...noCancelButton ? [] : [<Button
                        className="button-gray"
                        key="cancel"
                        style={{ width: 160, height: 50 }}
                        onClick={onCancel}>
                        {cancelText || "HUỶ BỎ"}
                    </Button>],
                    <Button
                        className="button-light-yellow"
                        key="ok"
                        style={{ width: 160, height: 50 }}
                        onClick={onOk}>
                        {okText || "ĐỒNG Ý"}
                    </Button>
                ]}
            />
        </Modal>
    )
}

export default ConfirmModal;