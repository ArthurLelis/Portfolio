import Image, { StaticImageData } from 'next/image';

interface ProjectItemProps {
  title: string;
  description: string;
  image: StaticImageData;
  stacks: {
    name: string;
    icon: React.ReactNode;
  }[];
};

export function ProjectItem({
  title,
  description,
  image,
  stacks,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col gap-12 p-6 border-2 border-detail rounded-lg lg:flex-row lg:gap-0">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h1 className="text-3xl text-secondary font-medium">
          {title}
        </h1>

        <p className="text-sm sm:text-base"> {description} </p>

        <div className="flex gap-6">
          {stacks.map((stack) => (
            <div
              id={stack.name}
              key={stack.name}
              className="stack flex items-center group text-secondary text-xl transition-all"
            >
              <span>
                {stack.icon}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full lg:w-1/2">
        <Image src={image} alt={title} className="w-1/2" />
      </div>
    </div>
  );
}
