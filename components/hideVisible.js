// import Collapsible from "./collapsible";
import Filter from "./filter";
import { data } from './../data'

const HideVisible = () => {
  return (
    <div className="hideVisible">
      <Filter data={data} />
    </div>
  );
};

export default HideVisible;
