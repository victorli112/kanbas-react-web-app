function FunctionParenthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <>
      <h3> Parenthesis and Parenthesis</h3>
      <br />
      twoSquared = {twoSquared}
      <br />
      square(2) = {square(2)}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      plusOne(3) = {plusOne(3)}
    </>
  );
}
export default FunctionParenthesisAndParameters;
