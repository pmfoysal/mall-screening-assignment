"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/animations";
import { BLUR_DATA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "./MediaGallery.styles.css";

interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MediaGallery({
  items,
  columns = 3,
  className,
}: MediaGalleryProps) {
  const colClass = { 2: "gallery-2", 3: "gallery-3", 4: "gallery-4" }[columns];

  return (
    <motion.div
      className={cn("mediaGallery", colClass, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      role="list"
    >
      {items.map((item, i) => (
        <motion.figure
          key={i}
          className="galleryItem"
          variants={staggerItem}
          role="listitem"
        >
          <div className="galleryImageWrapper">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          {item.caption && (
            <figcaption className="galleryCaption">{item.caption}</figcaption>
          )}
        </motion.figure>
      ))}
    </motion.div>
  );
}
