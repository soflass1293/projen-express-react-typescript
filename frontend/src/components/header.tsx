type HeaderProps = {
  title: string;
  active?: boolean;
  onClick: (title: string) => void;
};
const Header = ({ title, active = false, onClick }: HeaderProps) => {
  return (
    <header
      className="App-header cursor-pointer"
      onClick={() => onClick(title)}
    >
      <h1 style={active ? { color: "orange" } : {}}>{title}</h1>
    </header>
  );
};

export default Header;
