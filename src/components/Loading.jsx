import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getTimeFormatted } from "../lib/utils";

const CustomSkeletonTheme = ({ count, height, width }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton count={count} height={height} width={width} />
      </p>
    </SkeletonTheme>
  );
};

const Loading = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="weather__header"></div>
        <div className="weather__body">
          <CustomSkeletonTheme count={1} height={40} width={150} />
          <CustomSkeletonTheme count={1} height={20} width={100} />
          <CustomSkeletonTheme count={1} height={30} width={100} />
          <CustomSkeletonTheme count={1} height={20} width={50} />
          <div className="weather__minmax">
            <CustomSkeletonTheme count={1} width={50} />
            <CustomSkeletonTheme count={1} width={50} />
          </div>
        </div>

        <div className="weather__info">
          <CustomSkeletonTheme count={1} height={60} />
          <CustomSkeletonTheme count={1} height={60} />
          <CustomSkeletonTheme count={1} height={60} />
          <CustomSkeletonTheme count={1} height={60} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
