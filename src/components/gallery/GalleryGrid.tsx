"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/lib/data";
import { galleryAlt } from "@/i18n/helpers";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n/LanguageProvider";

type GalleryGridProps = {
  initialCategory?: GalleryCategory;
};

export default function GalleryGrid({
  initialCategory = "all",
}: GalleryGridProps) {
  const { t } = useI18n();
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "all") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === category);
  }, [category]);

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s !== null ? (s - 1 + filtered.length) % filtered.length : 0,
    );
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % filtered.length : 0));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setCategory(cat.id);
              setSelected(null);
            }}
            className={cn(
              "px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 border",
              category === cat.id
                ? "bg-[#e56b8c] text-white border-[#e56b8c]"
                : "bg-transparent text-foreground/60 border-border hover:border-[#e56b8c]/50 hover:text-[#e56b8c]",
            )}
          >
            {t.gallery.categories[cat.id]}
          </button>
        ))}
      </div>

      <p className="text-center text-foreground/40 text-xs tracking-[0.12em] uppercase mb-8">
        {filtered.length}{" "}
        {filtered.length === 1 ? t.gallery.bouquet : t.gallery.bouquets}
      </p>

      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {filtered.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
            className="relative group cursor-pointer break-inside-avoid overflow-hidden"
            onClick={() => setSelected(i)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={galleryAlt(t, img.id)}
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog.Root open={selected !== null} onOpenChange={(o) => !o && close()}>
        <AnimatePresence>
          {selected !== null && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                  <Dialog.Title className="sr-only">
                    {galleryAlt(t, filtered[selected].id)}
                  </Dialog.Title>
                  <Dialog.Close className="absolute top-5 right-5 text-white/60 hover:text-white z-10">
                    <X size={22} />
                  </Dialog.Close>
                  <button type="button" onClick={prev} className="absolute left-4 md:left-8 text-white/60 hover:text-white z-10 p-2">
                    <ChevronLeft size={28} />
                  </button>
                  <Image
                    src={filtered[selected].src}
                    alt={galleryAlt(t, filtered[selected].id)}
                    width={1200}
                    height={900}
                    className="max-w-4xl w-full h-auto object-contain max-h-[80vh]"
                    priority
                  />
                  <button type="button" onClick={next} className="absolute right-4 md:right-8 text-white/60 hover:text-white z-10 p-2">
                    <ChevronRight size={28} />
                  </button>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
