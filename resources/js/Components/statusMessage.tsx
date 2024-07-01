import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/Components/ui/alert"

interface StatusMessageProps {
  status?: string
  message?: string
}

const StatusMessage = ({ status, message }: StatusMessageProps) => {
  return (
    <>
      <div className={"my-3"}>
        {status &&
          <Alert variant={"default"}
                 className={"border-green-600 w-[350px] sm:w-[400px] md:w-[500px] text-green-600"}>
            <ExclamationTriangleIcon color={"green"} className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{message ? message : status}</AlertDescription>
          </Alert>
        }
      </div>
    </>
  )
}
export default StatusMessage
