"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  ADD_ON_OPTIONS,
  PAYMENT_METHODS,
  ROSE_COLORS,
  ROSE_COUNTS,
  WRAPPING_PAPERS,
} from "@/lib/data";

const schema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(7, "Phone number is required"),
    roseCount: z.enum(["25", "50", "75", "100"], {
      required_error: "Choose a rose count",
    }),
    roseColors: z.array(z.string()).min(1, "Select at least one color"),
    wrapping: z.string().min(1, "Choose wrapping paper"),
    addOns: z.array(z.string()).optional(),
    personalization: z.enum(["banner", "note", "none"]),
    bannerMessage: z.string().optional(),
    noteMessage: z.string().optional(),
    fulfillment: z.enum(["pickup", "delivery"], {
      required_error: "Choose pickup or delivery",
    }),
    deliveryAddress: z.string().optional(),
    date: z.string().min(1, "Pickup or delivery date is required"),
    payment: z.string().min(1, "Choose a payment method"),
    requests: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const count = ROSE_COUNTS.find((item) => item.id === data.roseCount);
    if (count && data.roseColors.length > count.colors) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["roseColors"],
        message: `${count.label} includes up to ${count.colors} color${count.colors === 1 ? "" : "s"}`,
      });
    }
    if (data.personalization === "banner" && !data.bannerMessage?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["bannerMessage"],
        message: "Add a banner message",
      });
    }
    if (data.personalization === "note" && !data.noteMessage?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["noteMessage"],
        message: "Add a note message",
      });
    }
    if (data.fulfillment === "delivery" && !data.deliveryAddress?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["deliveryAddress"],
        message: "Delivery address is required",
      });
    }
  });

type FormValues = z.infer<typeof schema>;

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      roseColors: [],
      addOns: [],
      personalization: "none",
      fulfillment: "pickup",
    },
  });

  const roseCount = watch("roseCount");
  const roseColors = watch("roseColors") ?? [];
  const addOns = watch("addOns") ?? [];
  const personalization = watch("personalization");
  const fulfillment = watch("fulfillment");

  const selectedCount = ROSE_COUNTS.find((item) => item.id === roseCount);

  const estimatedTotal = useMemo(() => {
    return selectedCount ? `$${selectedCount.price}+` : "Select a size";
  }, [selectedCount]);

  const toggleValue = (
    field: "roseColors" | "addOns",
    value: string,
    current: string[],
  ) => {
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    setValue(field, next, { shouldValidate: true });
  };

  const onSubmit = async (_data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Your Details
        </legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              placeholder="Alejandra"
              {...register("firstName")}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-destructive text-xs">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              placeholder="Martinez"
              {...register("lastName")}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-destructive text-xs">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            placeholder="(915) 000-0000"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-destructive text-xs">{errors.phone.message}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Bouquet Details
        </legend>
        <p className="text-sm text-foreground/55">
          Estimated bouquet total:{" "}
          <span className="text-foreground font-medium">{estimatedTotal}</span>{" "}
          before add-ons and delivery.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {ROSE_COUNTS.map((count) => (
            <label
              key={count.id}
              className={`flex cursor-pointer items-start gap-3 border p-4 text-sm transition-colors ${
                roseCount === count.id
                  ? "border-[#e56b8c] bg-[#FBF6F7]"
                  : "border-border hover:border-[#e56b8c]/40"
              }`}
            >
              <input
                type="radio"
                value={count.id}
                {...register("roseCount")}
                className="mt-1 accent-[#e56b8c]"
              />
              <span>
                <span className="block font-medium text-foreground">
                  {count.label} — ${count.price}
                </span>
                <span className="text-foreground/50">{count.note}</span>
              </span>
            </label>
          ))}
        </div>
        {errors.roseCount && (
          <p className="text-destructive text-xs">{errors.roseCount.message}</p>
        )}

        <div className="space-y-2">
          <Label>Rose Color *</Label>
          <p className="text-xs text-foreground/45">
            {selectedCount
              ? `Select up to ${selectedCount.colors} color${selectedCount.colors === 1 ? "" : "s"} for this size.`
              : "Choose a rose count first, then pick colors."}
          </p>
          <div className="flex flex-wrap gap-2">
            {ROSE_COLORS.map((color) => {
              const checked = roseColors.includes(color);
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => toggleValue("roseColors", color, roseColors)}
                  className={`rounded-full border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
                    checked
                      ? "border-[#e56b8c] bg-[#e56b8c] text-black"
                      : "border-border text-foreground/70 hover:border-[#e56b8c]/50"
                  }`}
                >
                  {color}
                </button>
              );
            })}
          </div>
          {errors.roseColors && (
            <p className="text-destructive text-xs">
              {errors.roseColors.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="wrapping">Wrapping Paper *</Label>
          <select
            id="wrapping"
            {...register("wrapping")}
            className="flex h-10 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Please select</option>
            {WRAPPING_PAPERS.map((paper) => (
              <option key={paper} value={paper}>
                {paper}
              </option>
            ))}
          </select>
          {errors.wrapping && (
            <p className="text-destructive text-xs">{errors.wrapping.message}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Add-Ons
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {ADD_ON_OPTIONS.map((addon) => {
            const checked = addOns.includes(addon.id);
            return (
              <label
                key={addon.id}
                className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
                  checked ? "border-[#e56b8c] bg-[#FBF6F7]" : "border-border"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleValue("addOns", addon.id, addOns)}
                  className="mt-1 accent-[#e56b8c]"
                />
                <span>
                  <span className="block text-foreground">{addon.label}</span>
                  {addon.note ? (
                    <span className="text-foreground/45">{addon.note}</span>
                  ) : null}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Personalization
        </legend>
        <p className="text-sm text-foreground/55">
          Choose a message banner, a custom note, or skip this step.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { id: "banner", label: "Banner" },
            { id: "note", label: "Custom note" },
            { id: "none", label: "No message" },
          ].map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-3 border p-4 text-sm ${
                personalization === option.id
                  ? "border-[#e56b8c] bg-[#FBF6F7]"
                  : "border-border"
              }`}
            >
              <input
                type="radio"
                value={option.id}
                {...register("personalization")}
                className="accent-[#e56b8c]"
              />
              {option.label}
            </label>
          ))}
        </div>
        {personalization === "banner" ? (
          <div className="space-y-2">
            <Label htmlFor="bannerMessage">Message for banner</Label>
            <Input id="bannerMessage" {...register("bannerMessage")} />
            {errors.bannerMessage && (
              <p className="text-destructive text-xs">
                {errors.bannerMessage.message}
              </p>
            )}
          </div>
        ) : null}
        {personalization === "note" ? (
          <div className="space-y-2">
            <Label htmlFor="noteMessage">Message for note</Label>
            <Textarea id="noteMessage" rows={3} {...register("noteMessage")} />
            {errors.noteMessage && (
              <p className="text-destructive text-xs">
                {errors.noteMessage.message}
              </p>
            )}
          </div>
        ) : null}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Pickup or Delivery
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          <label
            className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
              fulfillment === "pickup"
                ? "border-[#e56b8c] bg-[#FBF6F7]"
                : "border-border"
            }`}
          >
            <input
              type="radio"
              value="pickup"
              {...register("fulfillment")}
              className="mt-1 accent-[#e56b8c]"
            />
            <span>
              <span className="block font-medium">Pickup</span>
              <span className="text-foreground/50">Far East El Paso</span>
            </span>
          </label>
          <label
            className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
              fulfillment === "delivery"
                ? "border-[#e56b8c] bg-[#FBF6F7]"
                : "border-border"
            }`}
          >
            <input
              type="radio"
              value="delivery"
              {...register("fulfillment")}
              className="mt-1 accent-[#e56b8c]"
            />
            <span>
              <span className="block font-medium">Delivery</span>
              <span className="text-foreground/50">Fee applies</span>
            </span>
          </label>
        </div>
        {fulfillment === "delivery" ? (
          <div className="space-y-2">
            <Label htmlFor="deliveryAddress">Delivery Address *</Label>
            <Input
              id="deliveryAddress"
              placeholder="Street, El Paso, TX"
              {...register("deliveryAddress")}
            />
            {errors.deliveryAddress && (
              <p className="text-destructive text-xs">
                {errors.deliveryAddress.message}
              </p>
            )}
          </div>
        ) : null}
        <div className="space-y-2">
          <Label htmlFor="date">Pickup / Delivery Date *</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date && (
            <p className="text-destructive text-xs">{errors.date.message}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          Payment & Notes
        </legend>
        <div className="space-y-2">
          <Label htmlFor="payment">Preferred payment method *</Label>
          <select
            id="payment"
            {...register("payment")}
            className="flex h-10 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-xs"
          >
            <option value="">Please select</option>
            {PAYMENT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
          {errors.payment && (
            <p className="text-destructive text-xs">{errors.payment.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="requests">
            Special requests, inspo, or extra details
          </Label>
          <Textarea
            id="requests"
            rows={5}
            placeholder="Share color notes, occasion, or anything you want included."
            {...register("requests")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inspo">Inspiration photo</Label>
          <Input id="inspo" type="file" accept="image/*" />
          <p className="text-xs text-foreground/45">
            Optional. Final design may vary based on availability.
          </p>
        </div>
      </fieldset>

      <p className="text-sm text-foreground/55 leading-relaxed">
        After you submit, Bloomify will review the order, confirm details, and
        send 50% deposit information to place it.
      </p>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#e56b8c] text-black hover:bg-[#d15476] uppercase tracking-[0.15em] text-xs h-12 rounded-none"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Bouquet Order"
        )}
      </Button>
    </form>
  );
}
