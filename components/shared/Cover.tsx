"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { useCoverImage } from "@/hooks/use-cover-image";

import { useEdgeStore } from "@/lib/edgestore";

import { cn } from "@/lib/utils";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const params = useParams();

  const { edgestore } = useEdgeStore();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);
  const coverImage = useCoverImage();

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({ url });
    }

    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} fill alt="cover" className="object-cover" />}
      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            className="text-xs text-muted-foreground"
            onClick={() => coverImage.onReplace(url)}
            variant="outline"
            size="sm"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Change cover
          </Button>{" "}
          <Button
            className="text-xs text-muted-foreground"
            onClick={onRemove}
            variant="outline"
            size="sm"
          >
            <X className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="h-[36vh] w-full" />;
};
