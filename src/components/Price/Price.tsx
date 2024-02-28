function Price({ amount }: { amount: string }) {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(Number(amount));

  return <span className="font-semibold">{formattedPrice}원</span>;
}

export default Price;
