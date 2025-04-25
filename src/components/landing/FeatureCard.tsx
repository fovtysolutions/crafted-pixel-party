import React from "react";

interface FeatureCardProps {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  tag,
  title,
  subtitle,
  description,
  image,
  imagePosition,
}) => {
  const TextContent = () => (
    <div className="self-stretch flex min-w-60 flex-col font-normal w-[463px] my-auto max-md:max-w-full">
      <div className="flex items-stretch gap-[11px] text-xs">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/acefcea8a6fbe753a886e8fe800107ece8a1330f?placeholderIfAbsent=true"
          alt="Icon"
          className="aspect-[23.00/22.56] object-contain w-[23px] fill-[linear-gradient(91deg,#6D96FF_51.83%,#9645FF_78.82%)] shrink-0"
        />
        <div className="bg-clip-text bg-[linear-gradient(91deg,#6D96FF_51.83%,#9645FF_78.82%)] basis-auto">
          {tag}
        </div>
      </div>
      <div className="text-white text-[26px] font-semibold leading-7 mt-[7px]">
        {title}
        <span style={{ color: "rgba(255,255,255,1)" }}>{subtitle}</span>
      </div>
      <div className="text-white text-sm self-stretch mt-5 max-md:max-w-full">
        {description}
      </div>
    </div>
  );

  const ImageContent = () => (
    <div className="self-stretch min-w-60 w-[460px] my-auto max-md:max-w-full">
      <img
        src={image}
        alt={title}
        className="aspect-[1] object-contain w-full max-md:max-w-full"
      />
    </div>
  );

  return (
    <div className="flex items-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10 px-5">
      {imagePosition === "left" ? (
        <>
          <ImageContent />
          <TextContent />
        </>
      ) : (
        <>
          <TextContent />
          <ImageContent />
        </>
      )}
    </div>
  );
};

export default FeatureCard;
