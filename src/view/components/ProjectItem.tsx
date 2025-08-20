import Image, { StaticImageData } from 'next/image';

interface ProjectItemProps {
  title: string;
  logo: StaticImageData;
  image: StaticImageData;
  description: string;
  stacks: {
    name: string;
  }[];
};

export function ProjectItem({
  title,
  logo,
  image,
  description,
  stacks,
}: ProjectItemProps) {
  return (
    <div
      className="relative border-t border-[#fbfbfb1a] border-dashed py-14 rounded-[12px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image.src})`,
          WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 max-w-2/5">
        <div className="flex gap-4">
          <div className="border border-[#fbfbfb0d] bg-[#111111cc] p-3 rounded-[10px] flex items-center justify-center">
            <Image src={logo} alt={`Logo ${title}`} width={36} height={36} />
          </div>

          <h1 className="text-[#fbfbfb] text-[40px] font-semibold tracking-[-1.2px] leading-[110%]">
            {title}
          </h1>
        </div>

        <p className="text-[#fbfbfbcc]">
          {description}
        </p>
      </div>
    </div>
  );
}
