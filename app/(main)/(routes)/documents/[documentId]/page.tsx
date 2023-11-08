"use client";

import Cover from "@/components/shared/Cover";
import Toolbar from "@/components/shared/Toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";

type Props = {
  params: {
    documentId: Id<"documents">;
  };
};

const Page = ({ params: { documentId } }: Props) => {
  const document = useQuery(api.documents.getById, {
    documentId,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return <div>Not found...</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default Page;
