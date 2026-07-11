"use client";

import { useId, useState, type ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import {
  UA_PHONE_PREFIX,
  formatUaPhoneDigits,
  isValidUaPhoneDigits,
  sanitizeUaPhoneDigits,
} from "@/lib/phone";

interface PhoneInputProps {
  id?: string;
  name: string;
  required?: boolean;
  className?: string;
  errorLabel?: string;
  onValidityChange?: (valid: boolean) => void;
}

export function PhoneInput({
  id,
  name,
  required,
  className,
  errorLabel = "Введіть коректний український номер телефону",
  onValidityChange,
}: PhoneInputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [digits, setDigits] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = isValidUaPhoneDigits(digits);
  const showError = touched && digits.length > 0 && !valid;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const next = sanitizeUaPhoneDigits(event.target.value);
    setDigits(next);
    onValidityChange?.(isValidUaPhoneDigits(next));
  }

  function handleBlur() {
    setTouched(true);
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "group flex items-center rounded-xl border bg-white/[0.03] transition-colors duration-200",
          showError
            ? "border-red-500/50 focus-within:border-red-500/60"
            : "border-white/10 focus-within:border-accent/60 focus-within:bg-white/[0.05]",
          className
        )}
      >
        <span
          aria-hidden="true"
          className="select-none border-r border-white/10 py-3 pl-4 pr-3 text-sm font-medium text-white/50"
        >
          {UA_PHONE_PREFIX}
        </span>
        <input
          id={inputId}
          name={name}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required={required}
          placeholder="XX XXX XX XX"
          value={formatUaPhoneDigits(digits)}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showError}
          aria-describedby={showError ? `${inputId}-error` : undefined}
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none"
        />
      </div>
      {showError && (
        <span id={`${inputId}-error`} className="text-xs text-red-400">
          {errorLabel}
        </span>
      )}
    </div>
  );
}
