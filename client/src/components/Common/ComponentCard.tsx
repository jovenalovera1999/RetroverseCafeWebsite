import type { ReactNode } from "react";

interface ComponentCardProps {
  title: string;
  children: ReactNode;
  description?: string;
  className?: string;
}

const ComponentCard = ({
  title,
  children,
  description,
  className,
}: ComponentCardProps) => {
  return (
    <>
      <div
        className={`rounded-lg border border-secondary bg-primary ${className}`}
      >
        <div className="px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-medium text-secondary">{title}</h3>
              {description && (
                <p className="mt-1 text-sm text-secondary">{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-secondary sm:p-6">
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ComponentCard;
