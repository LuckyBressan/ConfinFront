import { CircleCheck, CircleX, HelpCircle, TriangleAlert } from "lucide-react";

import { Alert as AlertComponent, AlertDescription, AlertTitle } from "@/components/ui/alert";

export enum AlertTypes {
    SUCCESS = 'success',
    ERROR   = 'error',
    WARNING = 'warning',
    INFO    = 'info',
}

export default function Alert({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: AlertTypes
}) {

    let icon;
    let colorClass;

    switch (type) {
        case AlertTypes.SUCCESS:
            icon = <CircleCheck className="h-4 w-4" />;
            colorClass = "border-green-500 text-green-500";
            break;
        case AlertTypes.ERROR:
            icon = <CircleX className="h-4 w-4" />;
            colorClass = "border-red-500 text-red-500";
            break;
        case AlertTypes.WARNING:
            icon = <TriangleAlert className="h-4 w-4" />;
            colorClass = "border-yellow-500 text-yellow-500";
            break;
        case AlertTypes.INFO:
        default:
            icon = <HelpCircle className="h-4 w-4" />;
            colorClass = "border-blue-500 text-blue-500";
            break;
    }

  return (
    <AlertComponent className={colorClass}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </AlertComponent>
  );
}
