import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const Heading = (props: Props) => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Heading;
