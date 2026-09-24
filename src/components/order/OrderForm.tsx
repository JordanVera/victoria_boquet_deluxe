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
  ROSE_COLORS,
  ROSE_COUNTS,
  WRAPPING_PAPERS,
  PAYMENT_METHODS,
} from "@/lib/data";
import type { Dictionary } from "@/i18n";
import { useI18n } from "@/components/i18n/LanguageProvider";

function createOrderSchema(t: Dictionary) {
  return z
    .object({
      firstName: z.string().min(2, t.order.errors.firstName),
      lastName: z.string().min(1, t.order.errors.lastName),
      phone: z.string().min(7, t.order.errors.phone),
      roseCount: z.enum(["25", "50", "75", "100"], {
        required_error: t.order.errors.roseCount,
      }),
      roseColors: z.array(z.string()).min(1, t.order.errors.roseColors),
      wrapping: z.string().min(1, t.order.errors.wrapping),
      addOns: z.array(z.string()).optional(),
      personalization: z.enum(["banner", "note", "none"]),
      bannerMessage: z.string().optional(),
      noteMessage: z.string().optional(),
      fulfillment: z.enum(["pickup", "delivery"], {
        required_error: t.order.errors.fulfillment,
      }),
      deliveryAddress: z.string().optional(),
      date: z.string().min(1, t.order.errors.date),
      payment: z.string().min(1, t.order.errors.payment),
      requests: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      const count = ROSE_COUNTS.find((item) => item.id === data.roseCount);
      if (count && data.roseColors.length > count.colors) {
        const label = t.order.roseCounts[count.id].label;
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["roseColors"],
          message: t.order.errors.colorLimit(label, count.colors),
        });
      }
      if (data.personalization === "banner" && !data.bannerMessage?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["bannerMessage"],
          message: t.order.errors.banner,
        });
      }
      if (data.personalization === "note" && !data.noteMessage?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["noteMessage"],
          message: t.order.errors.note,
        });
      }
      if (data.fulfillment === "delivery" && !data.deliveryAddress?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["deliveryAddress"],
          message: t.order.errors.deliveryAddress,
        });
      }
    });
}

type FormValues = z.infer<ReturnType<typeof createOrderSchema>>;

export default function OrderForm() {
  const router = useRouter();
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const schema = useMemo(() => createOrderSchema(t), [t]);

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
    return selectedCount ? `$${selectedCount.price}+` : t.order.selectSize;
  }, [selectedCount, t.order.selectSize]);

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
          {t.order.detailsLegend}
        </legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t.order.firstName}</Label>
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
            <Label htmlFor="lastName">{t.order.lastName}</Label>
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
          <Label htmlFor="phone">{t.order.phone}</Label>
          <Input
            id="phone"
            placeholder="(713) 000-0000"
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
          {t.order.bouquetLegend}
        </legend>
        <p className="text-sm text-foreground/55">
          {t.order.estimated}{" "}
          <span className="text-foreground font-medium">{estimatedTotal}</span>{" "}
          {t.order.beforeAddOns}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {ROSE_COUNTS.map((count) => {
            const copy = t.order.roseCounts[count.id];
            return (
              <label
                key={count.id}
                className={`flex cursor-pointer items-start gap-3 border p-4 text-sm transition-colors ${
                  roseCount === count.id
                    ? "border-[#7A2432] bg-[#F6F1EA]"
                    : "border-border hover:border-[#7A2432]/40"
                }`}
              >
                <input
                  type="radio"
                  value={count.id}
                  {...register("roseCount")}
                  className="mt-1 accent-[#7A2432]"
                />
                <span>
                  <span className="block font-medium text-foreground">
                    {copy.label} — ${count.price}
                  </span>
                  <span className="text-foreground/50">{copy.note}</span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.roseCount && (
          <p className="text-destructive text-xs">{errors.roseCount.message}</p>
        )}

        <div className="space-y-2">
          <Label>{t.order.roseColor}</Label>
          <p className="text-xs text-foreground/45">
            {selectedCount
              ? `${t.order.selectUpTo} ${selectedCount.colors} ${selectedCount.colors === 1 ? t.order.color : t.order.colors} ${t.order.forThisSize}`
              : t.order.chooseCountFirst}
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
                      ? "border-[#7A2432] bg-[#7A2432] text-white"
                      : "border-border text-foreground/70 hover:border-[#7A2432]/50"
                  }`}
                >
                  {t.order.roseColors[color]}
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
          <Label htmlFor="wrapping">{t.order.wrapping}</Label>
          <select
            id="wrapping"
            {...register("wrapping")}
            className="flex h-10 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">{t.order.pleaseSelect}</option>
            {WRAPPING_PAPERS.map((paper) => (
              <option key={paper} value={paper}>
                {t.order.wrappingPapers[paper]}
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
          {t.order.addOnsLegend}
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {ADD_ON_OPTIONS.map((addon) => {
            const checked = addOns.includes(addon.id);
            const copy = t.order.addOnOptions[addon.id];
            return (
              <label
                key={addon.id}
                className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
                  checked ? "border-[#7A2432] bg-[#F6F1EA]" : "border-border"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleValue("addOns", addon.id, addOns)}
                  className="mt-1 accent-[#7A2432]"
                />
                <span>
                  <span className="block text-foreground">{copy.label}</span>
                  {copy.note ? (
                    <span className="text-foreground/45">{copy.note}</span>
                  ) : null}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          {t.order.personalizationLegend}
        </legend>
        <p className="text-sm text-foreground/55">
          {t.order.personalizationHelp}
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { id: "banner", label: t.order.banner },
            { id: "note", label: t.order.customNote },
            { id: "none", label: t.order.noMessage },
          ].map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-3 border p-4 text-sm ${
                personalization === option.id
                  ? "border-[#7A2432] bg-[#F6F1EA]"
                  : "border-border"
              }`}
            >
              <input
                type="radio"
                value={option.id}
                {...register("personalization")}
                className="accent-[#7A2432]"
              />
              {option.label}
            </label>
          ))}
        </div>
        {personalization === "banner" ? (
          <div className="space-y-2">
            <Label htmlFor="bannerMessage">{t.order.bannerMessage}</Label>
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
            <Label htmlFor="noteMessage">{t.order.noteMessage}</Label>
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
          {t.order.fulfillmentLegend}
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          <label
            className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
              fulfillment === "pickup"
                ? "border-[#7A2432] bg-[#F6F1EA]"
                : "border-border"
            }`}
          >
            <input
              type="radio"
              value="pickup"
              {...register("fulfillment")}
              className="mt-1 accent-[#7A2432]"
            />
            <span>
              <span className="block font-medium">{t.order.pickup}</span>
              <span className="text-foreground/50">{t.order.byAppointment}</span>
            </span>
          </label>
          <label
            className={`flex cursor-pointer items-start gap-3 border p-4 text-sm ${
              fulfillment === "delivery"
                ? "border-[#7A2432] bg-[#F6F1EA]"
                : "border-border"
            }`}
          >
            <input
              type="radio"
              value="delivery"
              {...register("fulfillment")}
              className="mt-1 accent-[#7A2432]"
            />
            <span>
              <span className="block font-medium">{t.order.delivery}</span>
              <span className="text-foreground/50">{t.order.feeApplies}</span>
            </span>
          </label>
        </div>
        {fulfillment === "delivery" ? (
          <div className="space-y-2">
            <Label htmlFor="deliveryAddress">{t.order.deliveryAddress}</Label>
            <Input
              id="deliveryAddress"
              placeholder={t.order.deliveryPlaceholder}
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
          <Label htmlFor="date">{t.order.date}</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date && (
            <p className="text-destructive text-xs">{errors.date.message}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-foreground mb-2">
          {t.order.paymentLegend}
        </legend>
        <div className="space-y-2">
          <Label htmlFor="payment">{t.order.payment}</Label>
          <select
            id="payment"
            {...register("payment")}
            className="flex h-10 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-xs"
          >
            <option value="">{t.order.pleaseSelect}</option>
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
          <Label htmlFor="requests">{t.order.requests}</Label>
          <Textarea
            id="requests"
            rows={5}
            placeholder={t.order.requestsPlaceholder}
            {...register("requests")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inspo">{t.order.inspo}</Label>
          <Input id="inspo" type="file" accept="image/*" />
          <p className="text-xs text-foreground/45">{t.order.inspoHelp}</p>
        </div>
      </fieldset>

      <p className="text-sm text-foreground/55 leading-relaxed">
        {t.order.afterSubmit}
      </p>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7A2432] text-white hover:bg-[#5F1C27] uppercase tracking-[0.15em] text-xs h-12 rounded-none"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.order.sending}
          </>
        ) : (
          t.order.submit
        )}
      </Button>
    </form>
  );
}
