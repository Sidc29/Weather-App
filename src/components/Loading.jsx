import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeletonTheme = ({ count, height, width, borderRadius }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <>
        <Skeleton
          count={count}
          height={height}
          width={width}
          borderRadius={borderRadius}
        />
      </>
    </SkeletonTheme>
  );
};

const Loading = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="weather__body">
          <CustomSkeletonTheme
            count={1}
            height={40}
            width={200}
            borderRadius={10}
          />
          <CustomSkeletonTheme
            count={1}
            height={15}
            width={150}
            borderRadius={30}
          />
          <CustomSkeletonTheme
            count={1}
            height={40}
            width={120}
            borderRadius={30}
          />
          <CustomSkeletonTheme
            count={1}
            height={50}
            width={60}
            borderRadius={10}
          />
          <p className="weather__temperature">
            <CustomSkeletonTheme
              count={1}
              height={40}
              width={100}
              borderRadius={10}
            />
          </p>
          <div className="weather__minmax">
            <CustomSkeletonTheme
              count={1}
              height={20}
              width={80}
              borderRadius={10}
            />
            <CustomSkeletonTheme
              count={1}
              height={20}
              width={80}
              borderRadius={10}
            />
          </div>
        </div>

        <div className="weather__info">
          <CustomSkeletonTheme count={1} height={80} borderRadius={10} />
          <CustomSkeletonTheme count={1} height={80} borderRadius={10} />
          <CustomSkeletonTheme count={1} height={80} borderRadius={10} />
          <CustomSkeletonTheme count={1} height={80} borderRadius={10} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
