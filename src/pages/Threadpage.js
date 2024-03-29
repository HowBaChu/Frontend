import styled from "styled-components";
import Opinion from "../components/Opinion";
import OpinionInput from "../components/OpinionInput";
import { useEffect, useState } from "react";
import { GetOpin } from "../api/GetOpin";
import { useParams } from "react-router-dom";

const Threadpage = ({
  isDelete,
  handleDeleteState,
  toggleReportModal,
  toggleDeleteModal,
  setCuropinId,
}) => {
  const [opinList, setOpinList] = useState([]); // Get Thread Opin response
  const [parentOpin, setParentOpin] = useState([{}]);
  const { opinId } = useParams();

  useEffect(() => {
    isDelete && reloadOpinList();
    handleDeleteState(false);
  }, [isDelete]);

  const reloadOpinList = async () => {
    const opinListdata = await GetOpin(
      (opinListdata) => console.log(opinListdata),
      opinId,
      0,
    );
    setOpinList(opinListdata);

    setParentOpin([opinListdata?.parentOpin]);
  };

  useEffect(() => {
    const loadOpinList = async () => {
      const opinListdata = await GetOpin(
        (opinListdata) => console.log(opinListdata),
        opinId,
        0,
      );
      setOpinList(opinListdata);
      setParentOpin([opinListdata?.parentOpin]);
    };
    loadOpinList();
  }, []);

  return (
    <>
      {opinList && (
        <ThreadWrapper>
          <ThreadOpinion
            reloadOpinList={reloadOpinList}
            toggleReportModal={toggleReportModal}
            toggleDeleteModal={toggleDeleteModal}
            opinContent={parentOpin[0]}
            setCuropinId={setCuropinId}
          />
          <Hr />
          <OpinionArea>
            <OpinList>
              {opinList?.childOpinList?.map((opin) => {
                return (
                  <ReOpin
                    reloadOpinList={reloadOpinList}
                    key={opin.id}
                    opinContent={opin}
                    toggleReportModal={toggleReportModal}
                    toggleDeleteModal={toggleDeleteModal}
                    setCuropinId={setCuropinId}
                  />
                );
              })}
            </OpinList>
          </OpinionArea>

          <Input onOpinSubmit={() => reloadOpinList()} />
        </ThreadWrapper>
      )}
    </>
  );
};

const ThreadWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav
  margin: 70px auto 0 auto;
`;
const ThreadOpinion = styled(Opinion)`
  width: calc(100vw - 44px);
  position: fixed;
  top: 80px;
`;
const Hr = styled.hr`
  width: calc(100vw - 44px);
  margin-top: 90px;
  position: fixed;
`;
const OpinionArea = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav
  margin-top: 100px;
  overflow: scroll;
  position: fixed;
`;
const OpinList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const ReOpin = styled(Opinion)`
  margin-bottom: 20px;
`;
const Input = styled(OpinionInput)`
  position: fixed;
  left: 0;
  bottom: 50px;
  background-color: white;
`;

export default Threadpage;
