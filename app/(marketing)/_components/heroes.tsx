import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/assets/images/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="documents"
          />
          <Image
            src="/assets/images/documents-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px]">
          <Image
            src="/assets/images/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="reading"
          />
          <Image
            src="/assets/images/reading-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};
