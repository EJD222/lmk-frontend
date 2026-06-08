import { toast } from "sonner";

export function notifyError(message = "that didn't work — give it another go"): void {
  toast.error(message);
}

export function notifySuccess(message: string): void {
  toast.success(message);
}

export function notifyInfo(message: string): void {
  toast.info(message);
}
