import React from "react";
import Modal from "antd/lib/modal/Modal";

function FormModal(props) {
  return (
    <Modal
      className="fromModal"
      closable={false}
      open={props.isOpen}
      onCancel={props.isCancel}
      footer={props.footerModal}
    >
      {props.children}
    </Modal>
  );
}

export default FormModal;
