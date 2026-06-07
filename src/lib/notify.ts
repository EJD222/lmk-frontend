import { toast } from "sonner";

export function notifyError(message = "Something went wrong. Please try again."): void {
  toast.error(message);
}

export function notifySuccess(message: string): void {
  toast.success(message);
}

export function notifyInfo(message: string): void {
  toast.info(message);
}
