"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

import { useMutation, useQuery } from "convex/react";

import { Skeleton } from "@/components/ui/skeleton";
import { Cover } from "@/components/shared/cover";
import { Toolbar } from "@/components/shared/toolbox";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

type Props = {
  params: {
    documentId: Id<"documents">;
  };
};

export default function Document({ params: { documentId } }: Props) {
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/shared/editor"), {
        ssr: false,
      }),
    []
  );

  const update = useMutation(api.documents.update);
  const document = useQuery(api.documents.getById, {
    documentId,
  });

  const onChange = (content: string) => {
    update({
      id: documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found...</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
}
