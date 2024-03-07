import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HomepageSkeletons = () => {
  return (
    <>
      <SkeletonTheme baseColor="#ebecec" highlightColor="#ffff">
        <Skeleton height={300} />
        <Skeleton height={50} />
        <div className="d-flex justify-content-between align-items-center">
          <Skeleton width={100} height={40} className="my-2" />
          <Skeleton width={100} height={20} className="my-2" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Skeleton width={100} />
        </div>
      </SkeletonTheme>
    </>
  );
};

export default HomepageSkeletons;
