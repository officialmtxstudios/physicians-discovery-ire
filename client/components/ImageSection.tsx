interface ImageSectionProps {
  src: string;
  alt: string;
}

export default function ImageSection({ src, alt }: ImageSectionProps) {
  return (
    <div className="image-section">
      <img src={src} alt={alt} className="section-image" />
    </div>
  );
}
