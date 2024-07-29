import Spinner from 'react-bootstrap/Spinner';
interface SpinnerProps {
    animation?: "border" | "grow";
    variant?: string;
}
const CustomSpinner = ({ animation = "border", variant = "secondary" }: SpinnerProps) => {
    return (
        <Spinner animation={animation} variant={variant} />
    );
};

export default CustomSpinner;
