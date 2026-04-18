"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import "./Modal.styles.css";
import type { ModalProps } from "./Modal.types";

/**
 * Accessible modal dialog built on Radix UI.
 * Handles focus trapping, keyboard dismissal, and scroll lock.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
}: ModalProps) {
  const sizeClass = {
    sm: "modal-sm",
    md: "modal-md",
    lg: "modal-lg",
    xl: "modal-xl",
    full: "modal-full",
  }[size];

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className={cn("modal-content", sizeClass)}>
          <div className="modal-header">
            {title && (
              <Dialog.Title className="modal-title">{title}</Dialog.Title>
            )}
            {description && (
              <Dialog.Description className="modal-description">
                {description}
              </Dialog.Description>
            )}
            <Dialog.Close className="modal-close" aria-label="Close dialog">
              <X size={20} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <div className="modal-body">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
