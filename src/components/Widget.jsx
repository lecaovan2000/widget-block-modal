import React from "react";
import FormModal from "./Modal";
import { useState } from "react";
import HeaderModal from "./HeaderModal";
import PageExamples from "./homePage/PageExamples";
import PageRecent from "./homePage/PageRecent";

const Widget = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState("examples");

  const option = [
    {
      label: "Examples",
      value: "examples",
    },
    {
      label: "Recent",
      value: "recent",
    },
    {
      label: "Google Drive",
      value: "ggdrive",
    },
    {
      label: "GitHub",
      value: "github",
    },
    {
      label: "Upload",
      value: "upload",
    },
  ];
  return (
    <div className="widget">
      <div className="widget__btn">
        <button onClick={() => setOpenModal(true)}>openModal</button>
      </div>
      <div className="widget__modal">
        <FormModal
          isOpen={openModal}
          isCancel={() => setOpenModal(false)}
          footerModal={() => {
            return (
              <>
                <button>cands</button> <button>cands</button>
              </>
            );
          }}
        >
          <header>
            <HeaderModal
              list={option}
              selected={select}
              handleClick={(value) => {
                setSelect(value);
              }}
            />
          </header>
          <body>
            {select == "examples" && <PageExamples />}
            {select == "recent" && <PageRecent />}
          </body>
        </FormModal>
      </div>
    </div>
  );
};

export default Widget;
