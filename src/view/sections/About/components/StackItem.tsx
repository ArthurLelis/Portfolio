interface StackItemProps {
  stack: {
    name: string;
    logo: React.ElementType;
  };
}

export function StackItem({ stack }: StackItemProps) {
  const Logo = stack.logo;

  return (
    <div className="flex items-center justify-center gap-2 p-1.5 rounded-lg border-1 border-gray-300 border-r-2 border-r-[#3b82f6] bg-white hover:shadow-lg transition">
      <Logo isActive={stack.name !== 'Websockets'} className="w-5 h-5" />

      <p className="text-xs font-medium text-[#111111cc]">
        {stack.name}
      </p>
    </div>
  );
}
