// https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({ src, ...rest }) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : 'https://thumbs2.imgbox.com/8f/34/sg6EXHwp_t.jpg'}
      onError={() => {
        set_imgSrc('https://thumbs2.imgbox.com/8f/34/sg6EXHwp_t.jpg')}
      }
    />
  );
}
