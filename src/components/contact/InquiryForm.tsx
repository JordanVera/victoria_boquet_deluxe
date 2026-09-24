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
import type { Dictionary } from "@/i18n";
import { useI18n } from "@/components/i18n/LanguageProvider";

function createInquirySchema(t: Dictionary) {
  return z.object({
    name: z.string().min(2, t.contact.errors.name),
    email: z.string().email(t.contact.errors.email),
    phone: z.string().min(7, t.contact.errors.phone),
    occasion: z.string().min(1, t.contact.errors.occasion),
    date: z.string().optional(),
    message: z.string().min(10, t.contact.errors.message),
  });
}

type FormValues = z.infer<ReturnType<typeof createInquirySchema>>;

export default function InquiryForm() {
  const router = useRouter();
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const schema = useMemo(() => createInquirySchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t.contact.fullName}</Label>
          <Input
            id="name"
            placeholder="Jane Smith"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.contact.email}</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">{t.contact.phone}</Label>
          <Input
            id="phone"
            placeholder="(713) 555-0100"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-destructive text-xs">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="occasion">{t.contact.occasion}</Label>
          <Input
            id="occasion"
            placeholder={t.contact.occasionPlaceholder}
            {...register("occasion")}
            className={errors.occasion ? "border-destructive" : ""}
          />
          {errors.occasion && (
            <p className="text-destructive text-xs">
              {errors.occasion.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">{t.contact.preferredDate}</Label>
        <Input id="date" type="date" {...register("date")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.message}</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={t.contact.messagePlaceholder}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-destructive text-xs">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7A2432] text-white hover:bg-[#5F1C27] uppercase tracking-[0.15em] text-xs h-12"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          t.contact.send
        )}
      </Button>
    </form>
  );
}
