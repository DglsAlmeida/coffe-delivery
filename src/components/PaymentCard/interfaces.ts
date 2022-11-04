export interface PaymentCardProps {
  paymentType: string;
  selected: boolean;
  handleSelected: () => void;
}

export interface PaymentCardContainerProps {
  isSelected: boolean;
}
