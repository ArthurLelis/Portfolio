import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { StackItem } from './StackItem';

interface ProjectItemProps {
  title: string;
  logo: StaticImageData;
  description: string;
  images: {
    banner: StaticImageData;
    thumbnail: StaticImageData;
  };
  stacks: {
    name: string;
    logo: React.ElementType;
  }[];
}

export function ProjectItem({
  title,
  logo,
  images,
  description,
  stacks,
}: ProjectItemProps) {
  const [stackActive, setStackActive] = useState('');

  return (
    <div className="relative border-t border-[#fbfbfb1a] border-dashed py-14 rounded-[12px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -left-1/5 [@media(min-width:1691px)]:left-0 hidden xl:block"
        style={{
          backgroundImage: `url(${images.banner.src})`,
          WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 w-full xl:max-w-1/3 2xl:max-w-2/5">
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

        <div className="">
          <h2 className="text-xl 2xl:text-2xl font-medium text-[#444] tracking-[-0.864px] leading-[40.32px]">
            Tecnologias usadas
          </h2>

          <div className="flex flex-wrap gap-5 mt-6">
            {stacks.map((stack) => (
              <StackItem
                stack={stack}
                key={Math.random()}
                stackActive={stackActive}
                setStackActive={setStackActive}
              />
            ))}
          </div>
        </div>
      </div>

      <Image src={images.thumbnail} alt={title} className="mt-6 rounded-lg block xl:hidden" />
    </div>
  );
}
