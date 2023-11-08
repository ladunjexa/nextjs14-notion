"use client";

import { Dialog, DialogHeader, DialogContent } from "../ui/dialog";
import { useCoverImage } from "@/hooks/useCoverImage";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <div>TODO: Upload image</div>
      </DialogContent>
    </Dialog>
  );
};
