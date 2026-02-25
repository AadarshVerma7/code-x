import React from "react";
import SuiteCard from "./SuiteCard";
import { Suite } from "@/utils/type";

function DisplaySuites({ suites }: { suites: Suite[] }) {
  return (
    <div className="grid grid-cols-3">
      {suites.map((suite, index) => {
        return <SuiteCard info={suite} />;
      })}
    </div>
  );
}

export default DisplaySuites;
