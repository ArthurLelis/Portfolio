interface StackItemProps {
  name: string;
  icon: React.ReactNode;
}

export function StackItem({ name, icon }: StackItemProps) {
  return (
    <div className="flex items-center gap-4 p-2 border-2 border-detail rounded-lg text-secondary">
      <div className="p-2 bg-detail rounded-lg text-lg font-semibold">
        {icon}
      </div>

      <h2 className="font-semibold">
        {name}
      </h2>
    </div>
  );
}
