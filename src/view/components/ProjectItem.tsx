import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ProjectItemProps {
  title: string;
  logo: StaticImageData;
  image: StaticImageData;
  description: string;
  stacks: {
    name: string;
    logo: React.ElementType;
  }[];
}

export function ProjectItem({
  title,
  logo,
  image,
  description,
  stacks,
}: ProjectItemProps) {
  const [stackActive, setStackActive] = useState('');

  return (
    <div className="relative border-t border-[#fbfbfb1a] border-dashed py-14 rounded-[12px] overflow-hidden">
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

        <div className="">
          <h2 className="text-xl 2xl:text-2xl font-medium text-[#fbfbfbcc] tracking-[-0.864px] leading-[40.32px]">
            Tecnologias usadas
          </h2>

          <div className="flex flex-wrap gap-5 mt-6">
            {stacks.map((stack) => {
              const Logo = stack.logo;

              return (
                <div
                  key={stack.name}
                  onMouseLeave={() => setStackActive('')}
                  onMouseEnter={() => setStackActive(stack.name)}
                  className="group flex flex-col items-center transition-all"
                >
                  <Logo isActive={stackActive === stack.name} />

                  <span className="text-[#fbfbfbcc] text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-semibold">
                    {stack.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
