interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CTAButton({ children, onClick }: CTAButtonProps) {
  return (
    <button className="cta-button" onClick={onClick}>
      {children}
    </button>
  );
}
