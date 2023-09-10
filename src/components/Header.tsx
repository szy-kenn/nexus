interface Props {
    title: string;
    subtitle?: string;
}

const Header = ({ title, subtitle }: Props) => {
    return (
        <div className="header-container">
            <h1 className="header">{title}</h1>
            <h2 className="subheader">{subtitle}</h2>
        </div>
    );
};

export default Header;
