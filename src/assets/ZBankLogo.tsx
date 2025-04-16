
interface ZBankLogoProps {
  color?: string;
}

const ZBankLogo: React.FC<ZBankLogoProps> = ({ color = "#ea384c" }) => {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold" style={{ color }}>Z</span>
      <span className="text-2xl font-bold" style={{ color }}>Bank</span>
    </div>
  );
};

export default ZBankLogo;
