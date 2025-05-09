import { CircleCheck, CircleX, HelpCircle, TriangleAlert } from "lucide-react";

import { Alert as AlertComponent, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertEnum } from "@/enums/AlertEnum";

export default function Alert({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: AlertEnum
}) {

    const {
      color,
      icon
    } = {
      [AlertEnum.SUCCESS]: {
        icon : (<CircleCheck className="h-4 w-4" />),
        color: 'green'
      },
      [AlertEnum.ERROR]: {
        icon : (<CircleX className="h-4 w-4" />),
        color: 'red'
      },
      [AlertEnum.WARNING]: {
        icon : (<TriangleAlert className="h-4 w-4" />),
        color: 'yellow'
      },
      [AlertEnum.INFO]: {
        icon : (<HelpCircle className="h-4 w-4" />),
        color: 'blue'
      }
    }[type]

  return (
    <AlertComponent className={`border-${color}-500 text-${color}-500`}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </AlertComponent>
  );
}
