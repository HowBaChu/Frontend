import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import graph_data from "../assets/data/graph_data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  rotation: 180,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};
const CirCle_Graph = ({ ...attrProps }) => {
  return (
    <Container {...attrProps}>
      <Pie type="pie" data={graph_data} options={options} />
    </Container>
  );
};

export default CirCle_Graph;

const Container = styled.div`
  width: 100px;
  height: 100px;
`;
